import React, {forwardRef} from 'react';
import {
  TextInput as RNTextInput,
  View,
  Pressable,
  TextInputProps as RNTextInputProps,
  ViewStyle,
} from 'react-native';
import AppText from '../AppText';
import styles from './styles';
import {useState} from 'react';
import colors from '@theme/colors';
import {EInputTypes} from 'types/enums';
import {formatExp} from '@helpers/numbers';
import {Country} from 'types/index';
import {SvgUri} from 'react-native-svg';
import {Icon} from '@components/Icon';

export interface PhoneNumberInputProps extends RNTextInputProps {
  inputType?: EInputTypes;
  containerStyle?: ViewStyle;
  inputContainerStyle?: ViewStyle;
  error?: string;
  country: Country | null;
  onCountryCodePress?: () => void;
}

const PhoneNumberInput = forwardRef<RNTextInput, PhoneNumberInputProps>(
  (
    {
      inputType = EInputTypes.TEXT,
      containerStyle,
      value,
      error,
      inputContainerStyle,
      style,
      placeholderTextColor,
      country,
      onCountryCodePress,
      children,
      ...props
    },
    ref,
  ) => {
    const [valueVisible, setValueVisible] = useState<boolean>(false);

    const _toggleValueVisible = () => setValueVisible(prevValue => !prevValue);

    return (
      <View style={{...styles.container, ...containerStyle}}>
        <View
          style={{
            ...styles.inputContainer,
            ...inputContainerStyle,
            ...(error ? {borderColor: colors.RED_01} : {}),
          }}>
          <Pressable style={styles.country} onPress={onCountryCodePress}>
            <SvgUri style={styles.countryLogo} uri={country?.flag || ''} />
            <AppText style={styles.countryCode}>
              {country?.phone_code || '+234'}
            </AppText>
            <Icon name="caret-down" color={colors.GREY_04} />
          </Pressable>
          <RNTextInput
            cursorColor={colors.BLACK}
            placeholderTextColor={placeholderTextColor || colors.GREY_04}
            autoCapitalize="none"
            ref={ref}
            value={
              inputType === EInputTypes.EXP ? formatExp(value || '') : value
            }
            style={[{...styles.input}, style]}
            secureTextEntry={
              inputType === EInputTypes.PASSWORD && !valueVisible
            }
            {...props}
          />
          {inputType === EInputTypes.PASSWORD && (
            <Pressable onPress={_toggleValueVisible}>
              <AppText>{valueVisible ? 'Hide' : 'Show'}</AppText>
            </Pressable>
          )}
          {children}
        </View>
        {error && <AppText style={styles.error}>{error}</AppText>}
      </View>
    );
  },
);

export default PhoneNumberInput;
