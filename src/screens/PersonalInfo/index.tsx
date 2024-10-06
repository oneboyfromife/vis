import AppText from '@components/AppText';
import React from 'react';
import {Pressable, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import AppScreen from '@components/AppScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BackButton from '@components/BackButton';
import {Icon} from '@components/Icon';
import FastImage from 'react-native-fast-image';
import {useAuth} from 'src/context/AuthContext';
import colors from '@theme/colors';
import {px} from '@helpers/responsiveness';
import {navigate} from '@helpers/navigation';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';

export default () => {
  const {top, bottom} = useSafeAreaInsets();

  const {user} = useAuth();

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
          <AppText style={styles.headerTitle}>Personal Info</AppText>
          <View style={styles.right} />
        </View>
      }>
      <View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
            paddingVertical: 20,
          }}>
          <Pressable
            onPress={() => {}}
            style={{
              backgroundColor: colors.WHITE_01,
              borderRadius: 100,
              width: 90,
              aspectRatio: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FastImage
              source={{uri: user?.profile_pics}}
              style={{
                width: '100%',
                aspectRatio: 1,
                position: 'absolute',
                zIndex: 9,
              }}
            />
            <Icon name="user" size={28} />
          </Pressable>
          <TouchableOpacity>
            <AppText>Change Photo</AppText>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: colors.WHITE,
            padding: 10,
            paddingHorizontal: 20,
            gap: 20,
          }}>
          <TouchableOpacity
            onPress={() => navigate(NAVIGATION_ROUTES.CHANGE_EMAIL_ADDRESS)}
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
                  fontSize: px(16),
                }}>
                Email Address
              </AppText>
              <AppText style={{}}>harry@visaro.com</AppText>
            </View>
            <Icon name="caret-right" size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate(NAVIGATION_ROUTES.CHANGE_PHONE_NUMBER)}
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
                  fontSize: px(16),
                }}>
                Phone Number
              </AppText>
              <AppText style={{}}>8** **** 3757</AppText>
            </View>
            <Icon name="caret-right" size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate(NAVIGATION_ROUTES.CHANGE_ADDRESS)}
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
                  fontSize: px(16),
                }}>
                Address
              </AppText>
              <AppText style={{}}>No 34 Ojodu Berger road, Lagos</AppText>
            </View>
            <Icon name="caret-right" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </AppScreen>
  );
};
