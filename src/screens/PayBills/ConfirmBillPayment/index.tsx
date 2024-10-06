import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AppScreen from '@components/AppScreen';
import AppText from '@components/AppText';
import ButtonPrimary from '@components/Buttons/buttonPrimary';
import BackButton from '@components/BackButton';
import {useRoute} from '@react-navigation/native';
import colors from '@theme/colors';
import {px} from '@helpers/responsiveness';

const ConfirmBillPayment = () => {
  const {top, bottom} = useSafeAreaInsets();

  const {params} = useRoute();

  console.log(params);

  return (
    <>
      <AppScreen
        contentContainerStyle={[
          styles.container,
          {
            paddingTop: top,
            paddingBottom: bottom,
          },
        ]}>
        <View style={styles.header}>
          <BackButton />
          <AppText style={styles.headerTitle}>Confirm Transaction</AppText>
          <View style={styles.right} />
        </View>
        <View style={styles.formContainer}>
          <View>
            <AppText
              style={{
                color: colors.ORANGE_02,
                fontWeight: '600',
                fontSize: px(20),
                textAlign: 'center',
                paddingVertical: 10,
              }}>
              {params?.data?.type} Purchase of #1,000
            </AppText>
          </View>
          <View
            style={{
              gap: 20,
            }}>
            {Object.keys(params?.data?.info).map((key, i) => {
              return (
                <View
                  key={i}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <AppText
                    style={{
                      color: colors.GREY_04,
                    }}>
                    {key}
                  </AppText>
                  <AppText>{params?.data?.info[key]}</AppText>
                </View>
              );
            })}
          </View>
          <View />
          <ButtonPrimary title="Confirm" />
        </View>
      </AppScreen>
    </>
  );
};

export default ConfirmBillPayment;
