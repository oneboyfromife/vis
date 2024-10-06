import React, {useCallback} from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';
import {useEffect, useRef, useState} from 'react';
import colors from '@theme/colors';
import {TextInputProps} from '@components/TextInput';

const PinInput = ({onChangeText, error, containerStyle}: TextInputProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [pin, setPin] = useState<string[]>(Array(4).fill(''));
  const inputRefs = useRef<TextInput[]>([]);
  const pinRefs = useRef<TextInput[]>([]);

  const handleInputChange = useCallback(
    (text: string, index: number) => {
      const value = text;

      // Check if the input is a number and not empty
      if (!isNaN(Number(value)) && value !== '') {
        pin[index] = value;
        setPin([...pin]);

        // Move to the next input field if available
        if (index < 3) {
          setActiveIndex(index + 1);
          inputRefs.current[index + 1]?.focus();
        }
      } else {
        pin[index] = '';
        setPin([...pin]);
        setActiveIndex(index - 1);
        inputRefs.current[index - 1]?.focus();
      }
    },
    [pin],
  );

  useEffect(() => {
    onChangeText && onChangeText(pin.join(''));
  }, [pin, onChangeText]);

  useEffect(() => {
    pinRefs.current[0]?.focus();
  }, []);

  return (
    <View style={{...styles.container, ...containerStyle}}>
      {pin.map((value, index) => (
        <TextInput
          key={index}
          style={{
            ...styles.input,
            ...(error && value === '' ? {borderColor: colors.RED_01} : {}),
            ...(activeIndex === index || value.length > 0
              ? {borderColor: colors.BLUE_01}
              : {}),
          }}
          secureTextEntry
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

export default PinInput;
