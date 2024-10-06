import AppText from '@components/AppText';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import AppScreen from '@components/AppScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BackButton from '@components/BackButton';
import {Icon} from '@components/Icon';
import colors from '@theme/colors';
import {px} from '@helpers/responsiveness';
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
          <AppText style={styles.headerTitle}>Contact Us</AppText>
          <View style={styles.right} />
        </View>
      }>
      <View
        style={{
          gap: 10,
        }}>
        <View
          style={{
            padding: 20,
            gap: 10,
          }}>
          <AppText
            style={{
              fontSize: px(28),
              fontWeight: '500',
            }}>
            We would love to hear from you.
          </AppText>
          <AppText>Any questions or enquires? Reach out to us.</AppText>
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
                Nigerian Address
              </AppText>
              <AppText style={{}}>No 34 Ojodu Berger road, Lagos</AppText>
            </View>
            <Icon name="clipboard" size={24} />
          </TouchableOpacity>
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
                UK Address
              </AppText>
              <AppText style={{}}>No 34 Ojodu Berger road, Lagos</AppText>
            </View>
            <Icon name="clipboard" size={24} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            padding: 20,
            gap: 20,
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 15,
            }}>
            <View
              style={{
                backgroundColor: colors.GREY_05,
                padding: 10,
                aspectRatio: 1,
                borderRadius: 100,
              }}>
              <Icon name="device-mobile-camera" size={26} />
            </View>
            <AppText
              style={{
                fontSize: px(20),
              }}>
              +23439456793
            </AppText>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 15,
            }}>
            <View
              style={{
                backgroundColor: colors.GREY_05,
                padding: 10,
                aspectRatio: 1,
                borderRadius: 100,
              }}>
              <Icon name="envelope-simple" size={26} />
            </View>
            <AppText
              style={{
                fontSize: px(20),
              }}>
              hello@visaro.com
            </AppText>
          </TouchableOpacity>
        </View>
      </View>
    </AppScreen>
  );
};
