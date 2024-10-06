import AppText from '@components/AppText';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import AppScreen from '@components/AppScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BackButton from '@components/BackButton';
import colors from '@theme/colors';
import {px} from '@helpers/responsiveness';
import {Icon} from '@components/Icon';

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
          <AppText style={styles.headerTitle}>Update KYC</AppText>
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
            gap: 30,
          }}>
          <View
            style={{
              gap: 20,
              flex: 1,
            }}>
            <AppText>Current KYC Level</AppText>
            <View
              style={{
                gap: 15,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <AppText
                  style={{
                    fontSize: px(16),
                    color: '#667085',
                  }}>
                  Daily Transaction Limit
                </AppText>
                <AppText
                  style={{
                    fontSize: px(16),
                    fontWeight: '600',
                  }}>
                  N20,000
                </AppText>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <AppText
                  style={{
                    fontSize: px(16),
                    color: '#667085',
                  }}>
                  Loan Limit
                </AppText>
                <AppText
                  style={{
                    fontSize: px(16),
                    fontWeight: '600',
                  }}>
                  N20,000
                </AppText>
              </View>
            </View>
          </View>
          <Icon name="check-circle" weight="fill" size={30} color={'#12B76A'} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 8,
            gap: 30,
          }}>
          <View
            style={{
              gap: 20,
              flex: 1,
            }}>
            <AppText>Upgrade to Tier 2</AppText>
            <View
              style={{
                gap: 15,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <AppText
                  style={{
                    fontSize: px(16),
                    color: '#667085',
                  }}>
                  Daily Transaction Limit
                </AppText>
                <AppText
                  style={{
                    fontSize: px(16),
                    fontWeight: '600',
                  }}>
                  N100,000
                </AppText>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <AppText
                  style={{
                    fontSize: px(16),
                    color: '#667085',
                  }}>
                  Loan Limit
                </AppText>
                <AppText
                  style={{
                    fontSize: px(16),
                    fontWeight: '600',
                  }}>
                  N100,000
                </AppText>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <AppText
                  style={{
                    fontSize: px(16),
                    color: '#667085',
                  }}>
                  Requirements
                </AppText>
                <AppText
                  style={{
                    fontSize: px(16),
                    fontWeight: '600',
                  }}>
                  Identity Card
                </AppText>
              </View>
            </View>
          </View>
          <Icon
            name="arrow-circle-up"
            weight="fill"
            size={30}
            color={'#FDB022'}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 8,
            gap: 30,
          }}>
          <View
            style={{
              gap: 20,
              flex: 1,
            }}>
            <AppText>Upgrade to Tier 3</AppText>
            <View
              style={{
                gap: 15,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <AppText
                  style={{
                    fontSize: px(16),
                    color: '#667085',
                  }}>
                  Daily Transaction Limit
                </AppText>
                <AppText
                  style={{
                    fontSize: px(16),
                    fontWeight: '600',
                  }}>
                  Unlimited
                </AppText>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <AppText
                  style={{
                    fontSize: px(16),
                    color: '#667085',
                  }}>
                  Loan Limit
                </AppText>
                <AppText
                  style={{
                    fontSize: px(16),
                    fontWeight: '600',
                  }}>
                  N500,000
                </AppText>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <AppText
                  style={{
                    fontSize: px(16),
                    color: '#667085',
                  }}>
                  Requirements
                </AppText>
                <AppText
                  style={{
                    fontSize: px(16),
                    fontWeight: '600',
                    textAlign: 'right',
                  }}>
                  Recorded Video{'\n'}Address Details
                </AppText>
              </View>
            </View>
          </View>
          <Icon
            name="arrow-circle-up"
            weight="fill"
            size={30}
            color={'#FDB022'}
          />
        </View>
      </View>
    </AppScreen>
  );
};
