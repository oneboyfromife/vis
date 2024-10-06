import AppText from '@components/AppText';
import React from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import {Icon} from '@components/Icon';
import colors from '@theme/colors';
import {px} from '@helpers/responsiveness';
import {SvgFromUri} from 'react-native-svg';

const Wallet = () => {
  return (
    <>
      <View
        style={{
          gap: 20,
        }}>
        <View style={styles.sectionHeader}>
          <AppText style={styles.sectionTitle}>Cards</AppText>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: colors.WHITE,
              borderRadius: 100,
            }}>
            <Icon name="plus" weight="bold" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
          }}>
          <View
            style={{
              width: '100%',
              aspectRatio: 2 / 1.2,
              backgroundColor: colors.BLUE_01,
              shadowColor: colors.GREY_04,
              borderWidth: 1,
              borderColor: colors.WHITE,
              shadowOffset: {
                width: 2,
                height: 2,
              },
              shadowOpacity: 0.2,
              shadowRadius: 5,
              borderRadius: 15,
              padding: 20,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                alignItems: 'flex-end',
              }}>
              <Icon name="credit-card" size={30} color={colors.WHITE} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  gap: 10,
                }}>
                <AppText
                  style={{
                    fontWeight: '600',
                    fontFamily: 'monospace',
                    textTransform: 'uppercase',
                    letterSpacing: 4,
                    fontSize: px(16),
                    color: colors.WHITE,
                  }}>
                  Harry Stone
                </AppText>
                <AppText
                  style={{
                    fontFamily: 'monospace',
                    textTransform: 'uppercase',
                    letterSpacing: 4,
                    fontSize: px(16),
                    color: colors.WHITE,
                  }}>
                  **** 1234
                </AppText>
              </View>
              <SvgFromUri
                uri="https://www.svgrepo.com/show/355117/mastercard.svg"
                width={50}
                height={50}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <AppText style={styles.sectionTitle}>Preferences</AppText>
        </View>
        <View style={styles.featuresContainer}>
          <TouchableOpacity style={styles.feature}>
            <View
              style={{
                backgroundColor: colors.ORANGE_01,
                borderRadius: 100,
                width: 55,
                justifyContent: 'center',
                alignItems: 'center',
                aspectRatio: 1,
              }}>
              <Icon name="globe" color="white" weight="bold" size={24} />
            </View>
            <AppText style={styles.featureText}>Online Purchases</AppText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.feature}>
            <View
              style={{
                backgroundColor: '#5FCF86',
                borderRadius: 100,
                width: 55,
                justifyContent: 'center',
                alignItems: 'center',
                aspectRatio: 1,
              }}>
              <Icon name="wallet" color="white" size={24} />
            </View>
            <AppText style={styles.featureText}>Automatic Payment</AppText>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Wallet;
