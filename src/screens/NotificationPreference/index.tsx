import AppText from '@components/AppText';
import React from 'react';
import {Switch, View} from 'react-native';
import styles from './styles';
import AppScreen from '@components/AppScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BackButton from '@components/BackButton';
import colors from '@theme/colors';
import {px} from '@helpers/responsiveness';

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
          <AppText style={styles.headerTitle}>Notification Preference</AppText>
          <View style={styles.right} />
        </View>
      }>
      <View
        style={{
          gap: 20,
        }}>
        <View
          style={{
            paddingHorizontal: 20,
            gap: 20,
          }}>
          <AppText
            style={{
              fontSize: px(28),
              fontWeight: '500',
            }}>
            Push notifications
          </AppText>
          <AppText
            style={{
              color: colors.GREY_04,
            }}>
            Choose notifications you want to get from the app.
          </AppText>
          <AppText
            style={{
              color: colors.GREY_04,
            }}>
            Keep in mind, we’ll send notifications for security reasons or if we
            need to contact you about your account.
          </AppText>
          <AppText
            style={{
              color: colors.GREY_04,
            }}>
            We’ll notify you when you:
          </AppText>
        </View>
        <View
          style={{
            backgroundColor: colors.WHITE,
            padding: 10,
            paddingHorizontal: 20,
            gap: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 8,
            }}>
            <View
              style={{
                gap: 4,
              }}>
              <AppText>Have a purchase or reward update</AppText>
            </View>
            <Switch value={true} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 8,
              gap: 20,
            }}>
            <View
              style={{
                gap: 4,
                flex: 1,
              }}>
              <AppText>Receive payments</AppText>
            </View>
            <Switch />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 8,
              gap: 20,
            }}>
            <View
              style={{
                gap: 4,
                flex: 1,
              }}>
              <AppText>Receive a money request</AppText>
            </View>
            <Switch />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 8,
              gap: 20,
            }}>
            <View
              style={{
                gap: 4,
                flex: 1,
              }}>
              <AppText>Send payments</AppText>
            </View>
            <Switch />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 8,
              gap: 20,
            }}>
            <View
              style={{
                gap: 4,
                flex: 1,
              }}>
              <AppText>Receive direct messages</AppText>
            </View>
            <Switch />
          </View>
        </View>
        <View
          style={{
            backgroundColor: colors.WHITE,
            padding: 10,
            paddingHorizontal: 20,
            gap: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 8,
              gap: 20,
            }}>
            <View
              style={{
                gap: 4,
                flex: 1,
              }}>
              <AppText>
                Announcements, offers and incentives tailored for you
              </AppText>
            </View>
            <Switch value={true} />
          </View>
        </View>
      </View>
    </AppScreen>
  );
};
