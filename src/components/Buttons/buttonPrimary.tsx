import React from 'react';
import AppButton from '.';
import styles from './styles';
import colors from '@theme/colors';
import {IAppButton} from './types';

const ButtonPrimary = ({style, titleStyle, ...props}: IAppButton) => (
  <AppButton
    {...props}
    style={{
      ...styles.buttonPrimary,
      ...(props?.disabled ? {backgroundColor: colors.GREY_08} : {}),
      ...style,
    }}
    titleStyle={{...styles.titlePrimary, ...titleStyle}}
    activeOpacity={0.8}
  />
);

export default ButtonPrimary;
