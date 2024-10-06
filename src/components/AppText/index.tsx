import React, {forwardRef} from 'react';
import {Text, TextProps} from 'react-native';
import styles from './styles';

export default forwardRef<Text, TextProps>((props, ref) => {
  const {style, ...rest} = props;
  return <Text ref={ref} style={[styles.text, style]} {...rest} />;
});
