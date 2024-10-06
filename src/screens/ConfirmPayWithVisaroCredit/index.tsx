import AppText from '@components/AppText';
import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import styles from './styles';
import AppScreen from '@components/AppScreen';
import BackButton from '@components/BackButton';
import ButtonPrimary from '@components/Buttons/buttonPrimary';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from '@components/Icon';
import colors from '@theme/colors';
import Visa from '@assets/svgs/visa';
import LoaderLock from '@assets/svgs/loaderLock';
import {navigate} from '@helpers/navigation';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';

const Loader = () => {
  useEffect(() => {
    setTimeout(() => {
      navigate(NAVIGATION_ROUTES.CONFIRM_PAY_WITH_VISARO_CREDIT);
    }, 5000);
  }, []);
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}>
      <View>
        <LoaderLock />
      </View>
      <AppText
        style={{
          fontWeight: '600',
        }}>
        Almost Done
      </AppText>
    </View>
  );
};

export default () => {
  const [isDone, setIsDone] = useState(false);
  return (
    <>
      {isDone && <Loader />}
      <AppScreen contentContainerStyle={[styles.container]}>
        <View style={styles.sheetHeader}>
          <View style={styles.flexContainer}>
            <BackButton />
          </View>
        </View>
        <View>
          <AppText style={styles.header}>Final Step</AppText>
        </View>
        <View>
          <AppText style={styles.writeUp}>
            Please make sure the info below are correct
          </AppText>
          <View />
        </View>
        <View style={{flex: 1, gap: 20}}>
          <AppText style={[styles.amount]}>₦ 2,450,900.50</AppText>
          <AppText
            style={{
              opacity: 0.8,
            }}>
            one month advance
          </AppText>
          <TouchableOpacity
            style={{
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexDirection: 'row',
              gap: 15,
            }}>
            <View>
              <Image
                source={require('@assets/images/visaro-credit-avatar.png')}
              />
            </View>
            <View
              style={{
                gap: 18,
                flex: 1,
              }}>
              <View
                style={{
                  gap: 2,
                }}>
                <AppText
                  style={{
                    fontWeight: '600',
                  }}>
                  Visaro Credit
                </AppText>
                <AppText
                  style={{
                    opacity: 0.8,
                  }}>
                  Visa Debit ****1234
                </AppText>
              </View>
              <View
                style={{
                  gap: 10,
                }}>
                <AppText
                  style={{
                    opacity: 0.8,
                  }}>
                  N2,450,900.00 Broken down into one month of grace.
                </AppText>
                <AppText
                  style={{
                    opacity: 0.8,
                  }}>
                  See scedule
                </AppText>
              </View>
            </View>
            <View />
          </TouchableOpacity>
        </View>
        <ButtonPrimary
          title="Pay"
          onPress={() => {
            setIsDone(true);
          }}
        />
      </AppScreen>
    </>
  );
};
