import AppText from '@components/AppText';
import React, {FC, useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import AppScreen from '@components/AppScreen';
import BackButton from '@components/BackButton';
import ButtonPrimary from '@components/Buttons/buttonPrimary';
import CheckBox from '@components/CheckBox';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from '@components/Icon';
import colors from '@theme/colors';
import Visa from '@assets/svgs/visa';
import LoaderLock from '@assets/svgs/loaderLock';
import {navigate} from '@helpers/navigation';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Loader: FC<{
  setIsDone: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({setIsDone}) => {
  useEffect(() => {
    setTimeout(() => {
      setIsDone(false);
      navigate(NAVIGATION_ROUTES.CONFIRM_PAY_WITH_VISARO_CREDIT);
    }, 5000);
  }, [setIsDone]);
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
        We’re setting up your funding source
      </AppText>
    </View>
  );
};

export default () => {
  const [isDone, setIsDone] = useState(false);

  const {top} = useSafeAreaInsets();

  return (
    <>
      {isDone && <Loader setIsDone={setIsDone} />}
      <AppScreen
        contentContainerStyle={[
          styles.container,
          {
            paddingTop: top,
            paddingBottom: 10,
          },
        ]}>
        <View style={styles.sheetHeader}>
          <View style={styles.flexContainer}>
            <BackButton />
          </View>
        </View>
        <View>
          <AppText style={styles.header}>
            Set up payments for Visaro Credit
          </AppText>
        </View>
        <View>
          <AppText style={styles.writeUp}>
            This payment will be held now The rest will be automatic
          </AppText>
          <View />
        </View>
        <View style={{flex: 1, gap: 20}}>
          <TouchableOpacity
            style={{
              justifyContent: 'space-between',
              padding: 20,
              alignItems: 'flex-start',
              flexDirection: 'row',
              gap: 15,
              borderWidth: 2,
              borderStyle: 'solid',
              borderColor: colors.ORANGE_01,
              backgroundColor: colors.ORANGE_01 + '10',
              borderRadius: 15,
            }}>
            <View>
              <Visa />
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
                  Visa ending in 1234
                </AppText>
                <AppText
                  style={[
                    styles.orangeText,
                    {
                      fontWeight: '400',
                    },
                  ]}>
                  Expiry 06/2024
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
                    color: colors.BLUE_02,
                    fontWeight: '600',
                  }}>
                  Set as default
                </AppText>
                <AppText
                  style={[
                    styles.orangeText,
                    {
                      fontWeight: '600',
                    },
                  ]}>
                  Edit
                </AppText>
              </View>
            </View>
            <View>
              <Icon
                name="check-circle"
                weight="fill"
                color={colors.ORANGE_01}
                size={24}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 20,
              gap: 15,
              borderWidth: 1,
              borderStyle: 'dashed',
              borderColor: 'gray',
              borderRadius: 15,
            }}>
            <View
              style={{
                padding: 12,
                backgroundColor: colors.GREY_01,
                borderRadius: 100,
              }}>
              <Icon name="plus" />
            </View>
            <AppText style={styles.orangeText}>Link a Card</AppText>
          </TouchableOpacity>
          <View style={styles.termsCheck}>
            <CheckBox />
            <AppText style={styles.terms}>
              You have read the{' '}
              <AppText style={styles.orangeText}>Terms and Condition </AppText>
              and agree to have them presented electronically.
            </AppText>
          </View>
        </View>
        <ButtonPrimary
          title="Continue"
          onPress={() => {
            setIsDone(true);
          }}
        />
      </AppScreen>
    </>
  );
};
