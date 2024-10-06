import AppText from '@components/AppText';
import React from 'react';
import {FlatList, TextInput, TouchableOpacity, View} from 'react-native';
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
          <AppText style={styles.headerTitle}>La Masia Foundation</AppText>
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
              gap: 20,
            }}>
            <View
              style={{
                gap: 10,
              }}>
              <AppText
                style={{
                  fontSize: px(16),
                  opacity: 0.5,
                  fontWeight: '500',
                }}>
                Brief summary
              </AppText>
              <AppText
                style={{
                  fontSize: px(16),
                }}>
                La masia (founded in 2009) is a foundation that aims to help
                out-of-school kids get back into the classromoms. La masia
                (founded in 2009) is a foundation that aims to help
                out-of-school kids get back into the classromoms. La masia
                (founded in 2009) is a foundation that aims to help
                out-of-school kids get back into the classromoms. La masia
                (founded in 2009) is a foundation that aims to help
                out-of-school kids get back into the classromoms.
              </AppText>
            </View>
            <View
              style={{
                gap: 10,
              }}>
              <AppText
                style={{
                  fontSize: px(16),
                  opacity: 0.5,
                  fontWeight: '500',
                }}>
                Stats
              </AppText>
              <View
                style={{
                  gap: 5,
                }}>
                <AppText
                  style={{
                    fontSize: px(16),
                  }}>
                  Students listed: 26
                </AppText>
                <AppText
                  style={{
                    fontSize: px(16),
                  }}>
                  Students helped: 12,743
                </AppText>
                <AppText
                  style={{
                    fontSize: px(16),
                  }}>
                  Amount raised so far: $34,000
                </AppText>
                <AppText
                  style={{
                    fontSize: px(16),
                  }}>
                  Years of experience: 16
                </AppText>
                <AppText
                  style={{
                    fontSize: px(16),
                  }}>
                  Rating: 4.2/5 (1,456 reviews)
                </AppText>
                <AppText
                  style={{
                    fontSize: px(16),
                  }}>
                  Visaro credibility score: 98/100 (Extremely recommended)
                </AppText>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <AppText
              style={{
                fontSize: px(16),
                opacity: 0.5,
                fontWeight: '500',
              }}>
              Students
            </AppText>
            <TouchableOpacity
              onPress={() =>
                navigate(NAVIGATION_ROUTES.MERCHANTS_STUDENT_LIST)
              }>
              <AppText
                style={{
                  fontSize: px(16),
                  fontWeight: '500',
                  color: colors.ORANGE_01,
                }}>
                View Full List
              </AppText>
            </TouchableOpacity>
          </View>
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
                    Adesokan Emmanuel (22)
                  </AppText>
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
                    <AppText
                      style={{
                        fontSize: px(14),
                      }}>
                      Undergraduate
                    </AppText>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 10,
                      alignItems: 'center',
                    }}>
                    <AppText
                      style={{
                        fontSize: px(14),
                      }}>
                      Funding progress : 50%
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
