import React, {useCallback} from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';
import {useEffect, useRef, useState} from 'react';
import colors from '@theme/colors';
import {TextInputProps} from '@components/TextInput';

const OTPInput = ({onChangeText, error, containerStyle}: TextInputProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [otp, setOtp] = useState<string[]>(Array(4).fill(''));
  const inputRefs = useRef<TextInput[]>([]);
  const pinRefs = useRef<TextInput[]>([]);

  const handleInputChange = useCallback(
    (text: string, index: number) => {
      const value = text;

      // Check if the input is a number and not empty
      if (!isNaN(Number(value)) && value !== '') {
        otp[index] = value;
        setOtp([...otp]);

        // Move to the next input field if available
        if (index < 3) {
          setActiveIndex(index + 1);
          inputRefs.current[index + 1]?.focus();
        }
      } else {
        otp[index] = '';
        setOtp([...otp]);
        setActiveIndex(index - 1);
        inputRefs.current[index - 1]?.focus();
      }
    },
    [otp],
  );

  useEffect(() => {
    onChangeText && onChangeText(otp.join(''));
  }, [otp, onChangeText]);

  useEffect(() => {
    pinRefs.current[0]?.focus();
  }, []);

  return (
    <View style={{...styles.container, ...containerStyle}}>
      {otp.map((value, index) => (
        <TextInput
          key={index}
          style={{
            ...styles.input,
            ...(error && value === '' ? {borderColor: colors.RED_01} : {}),
            ...(activeIndex === index || value.length > 0
              ? {borderColor: colors.BLUE_01}
              : {}),
          }}
          value={value}
          ref={ref => (inputRefs.current[index] = ref!)}
          placeholder={'0'}
          maxLength={1}
          caretHidden
          onChangeText={text => handleInputChange(text, index)}
          onPressIn={() => setActiveIndex(index)}
          keyboardType="number-pad"
        />
      ))}
    </View>
  );
};

export default OTPInput;
