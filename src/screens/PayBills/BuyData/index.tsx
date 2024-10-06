import React, {useRef} from 'react';
import {Pressable, View} from 'react-native';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AppScreen from '@components/AppScreen';
import AppText from '@components/AppText';
import ButtonPrimary from '@components/Buttons/buttonPrimary';
import BackButton from '@components/BackButton';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Icon} from '@components/Icon';
import CountryListModal, {
  CountryListModalRef,
} from '@components/CountryListModal';
import {Country} from 'types/index';
import PhoneNumberInput from '@components/PhoneNumberInput';
import useBalanceEnquiry from '@hooks/useBalanceEnquiry';
import {px} from '@helpers/responsiveness';
import colors from '@theme/colors';
import {formatAsMoney} from '@helpers/numbers';
import {useRoute} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {navigate} from '@helpers/navigation';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';

const SCHEMA = yup.object().shape({
  network: yup.object().required("Please kindly select recipient's network"),
  phoneNumber: yup
    .string()
    .trim()
    .min(10, 'Invalid Account Number')
    .required("Please kindly enter recipient's account number"),
});

const BuyData = () => {
  const {top, bottom} = useSafeAreaInsets();

  const {balanceEnquiryData, fetchingBalance} = useBalanceEnquiry();

  const countryModalRef = useRef<CountryListModalRef | null>(null);

  const {params} = useRoute();

  return (
    <Formik
      initialValues={
        {
          network: params?.provider || null,
          country: null,
          plan: null,
          phoneNumber: '',
          amount: 0,
        } as {
          network: any;
          country: Country | null;
          phoneNumber: string;
          plan: any;
          amount: number;
        }
      }
      validationSchema={SCHEMA}
      onSubmit={({phoneNumber, network, amount, plan}) => {
        navigate(NAVIGATION_ROUTES.CONFIRM_BILL_PAYMENT, {
          data: {
            type: 'Data',
            info: {
              Amount: amount,
              Network: network.name,
              'Phone Number': phoneNumber,
              Plan: '200gb for 30days',
            },
            network,
            plan,
          },
        });
      }}>
      {({
        values,
        handleSubmit,
        isValid,
        errors,
        touched,
        setFieldValue,
        handleBlur,
        handleChange,
      }) => {
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
                <AppText style={styles.headerTitle}>Buy Data</AppText>
                <View style={styles.right} />
              </View>
              <View style={styles.formContainer}>
                <View style={styles.inputs}>
                  <Pressable style={styles.selectInput}>
                    {values.network ? (
                      <View style={styles.select}>
                        <View style={styles.selectLogoContainer}>
                          <FastImage
                            source={{
                              uri: values.network.logoURI,
                            }}
                            style={styles.selectLogo}
                            resizeMode="contain"
                          />
                        </View>
                        <AppText>{values.network.name}</AppText>
                      </View>
                    ) : (
                      <AppText style={styles.selectPlaceholder}>
                        Select Network
                      </AppText>
                    )}
                    <Icon name="caret-down" />
                  </Pressable>
                  <PhoneNumberInput
                    onCountryCodePress={() => countryModalRef.current?.open()}
                    country={values.country}
                    value={values.phoneNumber}
                    onBlur={handleBlur('phoneNumber')}
                    onChangeText={handleChange('phoneNumber')}
                    placeholder="Phone Number"
                    error={touched.phoneNumber ? errors.phoneNumber : undefined}
                  />
                  <Pressable style={styles.selectInput}>
                    {values.plan ? (
                      <View style={styles.select}>
                        <View style={styles.selectLogoContainer}>
                          <FastImage
                            source={{
                              uri: values.plan.logoURI,
                            }}
                            style={styles.selectLogo}
                            resizeMode="contain"
                          />
                        </View>
                        <AppText>{values.plan.name}</AppText>
                      </View>
                    ) : (
                      <AppText style={styles.selectPlaceholder}>
                        Select Plan
                      </AppText>
                    )}
                    <Icon name="caret-down" />
                  </Pressable>
                  <View>
                    <AppText
                      style={{
                        fontSize: px(16),
                      }}>
                      <AppText
                        style={{
                          color: colors.GREY_04,
                        }}>
                        Available Balance:{' '}
                      </AppText>
                      {fetchingBalance
                        ? 'Loading balance...'
                        : `₦ ${formatAsMoney(
                            balanceEnquiryData?.data?.wallet.visaro_balance ||
                              0,
                          )}`}
                    </AppText>
                  </View>
                </View>
                <View />
                <ButtonPrimary
                  disabled={!isValid}
                  onPress={() => handleSubmit()}
                  title="Continue"
                />
              </View>
            </AppScreen>
            <CountryListModal
              ref={countryModalRef}
              selected={values.country?.code}
              onSelect={country => {
                setFieldValue('country', country);
              }}
            />
          </>
        );
      }}
    </Formik>
  );
};

export default BuyData;
