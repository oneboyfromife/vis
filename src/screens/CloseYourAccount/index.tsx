import AppText from '@components/AppText';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import AppScreen from '@components/AppScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BackButton from '@components/BackButton';
import colors from '@theme/colors';
import {px} from '@helpers/responsiveness';
import ButtonPrimary from '@components/Buttons/buttonPrimary';

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
          <AppText style={styles.headerTitle}>Close Your Account</AppText>
          <View style={styles.right} />
        </View>
      }>
      <View
        style={{
          gap: 10,
        }}>
        <View
          style={{
            paddingVertical: 20,
            gap: 20,
          }}>
          <AppText
            style={{
              fontSize: px(28),
              fontWeight: '500',
            }}>
            Sorry to see you go
          </AppText>
          <AppText
            style={{
              color: colors.GREY_04,
            }}>
            Visaro strives for complete customer satisfaction. If you're having
            problems with your account, please see our{' '}
            <AppText
              style={{
                color: '#2563eb',
                fontWeight: '500',
              }}>
              Help Center
            </AppText>{' '}
            or{' '}
            <AppText
              style={{
                color: '#2563eb',
                fontWeight: '500',
              }}>
              Contact us
            </AppText>
            .
          </AppText>
          <AppText
            style={{
              color: colors.GREY_04,
            }}>
            Closing you account is final and both your account history and
            reputation number will be lost.
          </AppText>

          <AppText
            style={{
              color: colors.GREY_04,
            }}>
            If you'd like, you could ask us to{' '}
            <AppText
              style={{
                color: '#2563eb',
                fontWeight: '500',
              }}>
              delete your data
            </AppText>{' '}
            before closing the account.
          </AppText>
        </View>
        <ButtonPrimary
          title="Close Account"
          style={{
            backgroundColor: colors.RED_01,
          }}
        />
      </View>
    </AppScreen>
  );
};
