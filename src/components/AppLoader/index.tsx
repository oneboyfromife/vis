import React from 'react';
import {Modal, View} from 'react-native';
import styles from './styles';
import Spinner from './spiner';

export default ({loading = false}: {loading?: boolean}) => {
  return (
    <Modal transparent visible={loading}>
      <View style={styles.loaderContainer}>
        <Spinner />
      </View>
    </Modal>
  );
};
