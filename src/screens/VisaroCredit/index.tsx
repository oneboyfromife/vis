import AppText from '@components/AppText';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import AppScreen from '@components/AppScreen';
import BackButton from '@components/BackButton';
import {navigate} from '@helpers/navigation';
import ButtonPrimary from '@components/Buttons/buttonPrimary';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';
import RadioButton from '@components/RadioButton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default () => {
  const {top} = useSafeAreaInsets();

  return (
    <AppScreen
      contentContainerStyle={[
        styles.container,
        {
          paddingTop: top,
          paddingBottom: 10,
        },
      ]}>
      <View style={styles.sheetHeader}>
        <View style={styles.flexContainer}>
          <BackButton />
        </View>
      </View>
      <View>
        <AppText style={styles.header}>Visaro Credit</AppText>
      </View>
      <View>
        <AppText style={styles.writeUp}>
          Total you’ll pay to Green Africa
        </AppText>
        <AppText style={[styles.amount]}>₦ 2,450,900.50</AppText>
        <View>
          <View style={styles.validationContainer}>
            <RadioButton selected={true} />
            <AppText>No Late Fees</AppText>
          </View>
          <View style={styles.validationContainer}>
            <RadioButton selected={true} />
            <AppText>Automatic payments</AppText>
          </View>
          <View style={styles.validationContainer}>
            <RadioButton selected={true} />
            <AppText>Interest-fee loan</AppText>
          </View>
        </View>
      </View>
      <AppText style={[styles.writeUp]} />
      <View style={{flex: 1}} />
      <ButtonPrimary
        title="Continue"
        onPress={() => {
          console.log('hey');
          navigate(NAVIGATION_ROUTES.SETUP_VISARO_CREDIT);
        }}
      />
    </AppScreen>
  );
};
