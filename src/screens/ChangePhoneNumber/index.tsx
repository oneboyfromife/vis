import AppText from '@components/AppText';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import AppScreen from '@components/AppScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BackButton from '@components/BackButton';
import {px} from '@helpers/responsiveness';
import {navigate} from '@helpers/navigation';
import TextInput from '@components/TextInput';
import ButtonPrimary from '@components/Buttons/buttonPrimary';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';
import {EInputTypes} from 'types/enums';

export default () => {
  const {top, bottom} = useSafeAreaInsets();

  return (
    <AppScreen
      contentContainerStyle={[
        styles.container,
        {
          paddingBottom: bottom,
        },
      ]}
      header={
        <View style={[styles.header, {paddingTop: top}]}>
          <BackButton />
          <AppText style={styles.headerTitle}>Phone Number</AppText>
          <View style={styles.right} />
        </View>
      }>
      <View
        style={{
          gap: 20,
          paddingTop: 40,
        }}>
        <View
          style={{
            gap: 10,
          }}>
          <AppText
            style={{
              fontSize: px(28),
              fontWeight: '500',
            }}>
            Change phone number
          </AppText>
          <AppText
            style={{
              opacity: 0.8,
            }}>
            Making any changes to this will be updated with the new phone number
          </AppText>
        </View>
        <TextInput placeholder="Enter Phone Number" keyboardType="phone-pad" />
        <View />
        <ButtonPrimary
          title="Save Changes"
          onPress={() => {
            navigate(NAVIGATION_ROUTES.CONFIRM_PASSWORD);
          }}
        />
      </View>
    </AppScreen>
  );
};
