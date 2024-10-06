import React from 'react';
import AppButton from '.';
import styles from './styles';
import {IAppButton} from './types';

const ButtonSecondary = ({style, titleStyle, ...props}: IAppButton) => (
  <AppButton
    {...props}
    style={{...styles.buttonSecondary, ...style}}
    titleStyle={{...styles.titleSecondary, ...titleStyle}}
    activeOpacity={0.5}
  />
);

export default ButtonSecondary;
