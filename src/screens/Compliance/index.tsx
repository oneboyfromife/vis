import AppText from '@components/AppText';
import React from 'react';
import {Switch, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import AppScreen from '@components/AppScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BackButton from '@components/BackButton';
import colors from '@theme/colors';
import {px} from '@helpers/responsiveness';
import {Icon} from '@components/Icon';
import {navigate} from '@helpers/navigation';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';

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
          <AppText style={styles.headerTitle}>Compliance</AppText>
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
        <TouchableOpacity
          onPress={() => navigate(NAVIGATION_ROUTES.UPDATE_KYC)}
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
              KYC
            </AppText>
            <AppText
              style={{
                fontSize: px(16),
              }}>
              Update your KYC to Tier 2
            </AppText>
          </View>
          <Icon name="caret-right" />
        </TouchableOpacity>
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
            <AppText>BVN</AppText>
          </View>
          <Switch />
        </View>
      </View>
    </AppScreen>
  );
};
