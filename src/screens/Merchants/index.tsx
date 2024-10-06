import AppText from '@components/AppText';
import React from 'react';
import {
  FlatList,
  Switch,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
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
          <AppText style={styles.headerTitle}>Merchants</AppText>
          <View style={styles.right} />
        </View>
      }>
      <View
        style={{
          gap: 20,
        }}>
        <View
          style={{
            gap: 20,
            paddingHorizontal: 20,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 15,
              paddingHorizontal: 15,
              gap: 15,
              borderRadius: 50,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon name="magnifying-glass" />
            <TextInput
              style={{
                fontSize: px(16),
                paddingVertical: 7,
                borderRightColor: '#cbd5e1',
                borderRightWidth: 1,
                paddingRight: 20,
                flex: 1,
              }}
              placeholder="Search through your favorite NGOs"
            />
            <Icon name="funnel" />
          </View>
          <AppText
            style={{
              fontSize: px(16),
              opacity: 0.5,
              fontWeight: '500',
            }}>
            Suggested
          </AppText>
        </View>
        <FlatList
          contentContainerStyle={{
            gap: 20,
            paddingHorizontal: 20,
          }}
          data={new Array(10).fill(0)}
          renderItem={() => {
            return (
              <TouchableOpacity
                onPress={() => navigate(NAVIGATION_ROUTES.MERCHANTS_INFO)}
                style={{
                  gap: 20,
                  padding: 20,
                  borderRadius: 10,
                  shadowColor: '#0004',
                  shadowOpacity: 0.2,
                  shadowRadius: 10,
                  backgroundColor: 'white',
                  shadowOffset: {
                    width: 2,
                    height: 2,
                  },
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 15,
                  }}>
                  <View
                    style={{
                      borderRadius: 100,
                      width: 40,
                      aspectRatio: 1,
                      backgroundColor: colors.GREY_01,
                    }}
                  />
                  <AppText
                    style={{
                      fontSize: px(22),
                      fontWeight: '600',
                      flex: 1,
                    }}>
                    La Masia Foundation
                  </AppText>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    {new Array(4).fill(0).map(() => (
                      <Icon
                        name="star"
                        weight="fill"
                        size={14}
                        color="#fcd34d"
                      />
                    ))}
                  </View>
                </View>
                <View>
                  <AppText numberOfLines={2}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere ab, deserunt suscipit consequatur dolores labore
                  </AppText>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 20,
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 10,
                      alignItems: 'center',
                    }}>
                    <Icon name="map-pin" />
                    <AppText
                      style={{
                        fontSize: px(14),
                      }}>
                      Spain
                    </AppText>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 10,
                      alignItems: 'center',
                    }}>
                    <Icon name="user-circle" />
                    <AppText
                      style={{
                        fontSize: px(14),
                      }}>
                      2,400
                    </AppText>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 10,
                      alignItems: 'center',
                    }}>
                    <Icon name="envelope" />
                    <AppText
                      style={{
                        fontSize: px(14),
                      }}>
                      partner@lamasia.com
                    </AppText>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </AppScreen>
  );
};
