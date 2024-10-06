import React from 'react';
import {TouchableOpacity} from 'react-native';
import AppText from '../AppText';
import styles from './styles';
import {IAppButton} from './types';

const AppButton = ({title, style, titleStyle, ...props}: IAppButton) => (
  <TouchableOpacity style={{...styles.button, ...style}} {...props}>
    <AppText style={{...styles.title, ...titleStyle}}>{title}</AppText>
  </TouchableOpacity>
);

export default AppButton;
