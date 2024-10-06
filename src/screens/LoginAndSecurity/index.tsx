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
          <AppText style={styles.headerTitle}>Login & Security</AppText>
          <View style={styles.right} />
        </View>
      }>
      <View
        style={{
          backgroundColor: colors.WHITE,
          padding: 10,
          paddingHorizontal: 20,
          gap: 20,
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
            <AppText
              style={{
                color: '#667085',
              }}>
              Face ID
            </AppText>
            <AppText
              style={{
                fontSize: px(16),
              }}>
              Enable Face ID for faster Login
            </AppText>
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
            <AppText
              style={{
                color: '#667085',
              }}>
              Extend your login session
            </AppText>
            <AppText
              style={{
                fontSize: px(16),
              }}>
              You account is eligible for longer logged-in sessions for
              activities you do often
            </AppText>
          </View>
          <Switch />
        </View>
      </View>
    </AppScreen>
  );
};
