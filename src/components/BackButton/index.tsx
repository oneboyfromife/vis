import {navigationRef} from '@helpers/navigation';
import React from 'react';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import styles from './styles';
import {Icon} from '@components/Icon';

const BackButton = () => {
  return (
    <TouchableWithoutFeedback
      onPress={() => navigationRef.goBack()}
      style={styles.backButtonContainer}>
      <Icon name="arrow-left" />
    </TouchableWithoutFeedback>
  );
};

export default BackButton;
