import AppScreen from '@components/AppScreen';
import AppText from '@components/AppText';
import React from 'react';
import {Pressable, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import {Icon} from '@components/Icon';
import colors from '@theme/colors';
import FastImage from 'react-native-fast-image';
import {useAuth} from 'src/context/AuthContext';
import {navigate, navigationRef} from '@helpers/navigation';
import {CommonActions} from '@react-navigation/native';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';

const settings = [
  {
    name: 'Personal Info',
    icon: 'user',
    onPress: () => {
      navigate(NAVIGATION_ROUTES.PERSONAL_INFO_FLOW);
    },
  },
  {
    name: 'Compliance',
    icon: 'shield-check',
    onPress: () => {
      navigate(NAVIGATION_ROUTES.COMPLIANCE_FLOW);
    },
  },
  {
    name: 'Login & Security',
    icon: 'lock',
    onPress: () => {
      navigate(NAVIGATION_ROUTES.LOGIN_AND_SECURITY);
    },
  },
  {
    name: 'Notification Preferences',
    icon: 'bell',
    onPress: () => {
      navigate(NAVIGATION_ROUTES.NOTIFICATIONS_PREFERENCE);
    },
  },
  {
    name: 'Help',
    icon: 'bell',
    onPress: () => {
      navigate(NAVIGATION_ROUTES.HELP_FLOW);
    },
  },
  {
    name: 'Contact Us',
    icon: 'phone-outgoing',
    onPress: () => {
      navigate(NAVIGATION_ROUTES.CONTACT_US);
    },
  },
  {
    name: 'Legal Agreements',
    icon: 'file-text',
    onPress: () => {
      navigate(NAVIGATION_ROUTES.LEGAL);
    },
  },
  {
    name: 'Close your account',
    icon: 'trash',
    onPress: () => {
      navigate(NAVIGATION_ROUTES.CLOSE_YOUR_ACCOUNT);
    },
  },
  {
    name: 'Log out',
    icon: 'sign-out',
    onPress: () => {
      navigationRef.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: NAVIGATION_ROUTES.ONBOARDING}],
        }),
      );
    },
  },
];

export default () => {
  const {top} = useSafeAreaInsets();

  const {user} = useAuth();
  return (
    <AppScreen
      header={
        <View
          style={[
            {
              paddingTop: top,
            },
            styles.header,
          ]}>
          <AppText style={styles.headerTitle}>Account</AppText>

          <Pressable>
            <Icon name="bell" color={colors.WHITE} size={28} />
          </Pressable>
        </View>
      }>
      <View>
        <View style={styles.profileContainer}>
          <Pressable onPress={() => {}} style={styles.youButton}>
            <FastImage source={{uri: user?.photo}} style={styles.avatar} />
            <Icon name="user" size={28} />
            <View style={styles.cameraIcon}>
              <Icon color="white" name="camera" size={16} />
            </View>
          </Pressable>
          <View>
            <AppText style={styles.profileName}>
              {user?.firstname || 'Not Logged In'}
            </AppText>
            <AppText>{user?.email}</AppText>
            <AppText>{user?.username}</AppText>
          </View>
        </View>
        <View style={styles.settingsList}>
          {settings.map((setting, i) => {
            return (
              <Pressable
                style={styles.setting}
                key={i}
                onPress={() => setting.onPress()}>
                <Icon size={24} name={setting.icon} />
                <AppText style={styles.settingTitle}>{setting.name}</AppText>
              </Pressable>
            );
          })}
        </View>
      </View>
    </AppScreen>
  );
};
