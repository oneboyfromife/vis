import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TextInput from '@components/TextInput';
import AppText from '@components/AppText';
import ButtonPrimary from '@components/Buttons/buttonPrimary';
import AppLogo from '@assets/svgs/visaroLogo';
import AppScreen from '@components/AppScreen';
import BackButton from '@components/BackButton';
import {EInputTypes} from 'types/enums';
import {navigate} from '@helpers/navigation';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';
import {Formik} from 'formik';
import {Country} from 'types/index';
import * as yup from 'yup';
import CountryListModal, {
  CountryListModalRef,
} from '@components/CountryListModal';
import useGetEmailOTP from '@hooks/useGetEmailOtp';

const phoneSchema = yup.object().shape({
  phone: yup.string().required('Phone number is required'),
});

const emailSchema = yup.object().shape({
  email: yup.string().email().required('Email address is required'),
});

export default () => {
  const {top, bottom} = useSafeAreaInsets();

  const countryModalRef = useRef<CountryListModalRef | null>(null);

  const [selectedOptType] = useState<'email' | 'phone'>('email');

  const {
    getOTP: getEmailOtp,
    getError: getEmailOtpError,
    gettingOTP,
    isGetEmailError: isGetEmailOtpError,
  } = useGetEmailOTP();

  // const {
  //   getError: getPhoneOtpError,
  //   getOTP: getPhoneOTP,
  //   gettingPhoneOTP,
  //   isGetError: isGetPhoneError,
  // } = useGetPhoneOTP();

  return (
    <Formik
      initialValues={
        {
          email: '',
          phone: '',
          phone_code: '+234',
          country: null,
        } as {
          phone: string;
          email: string;
          phone_code: string;
          country: Country | null;
        }
      }
      validationSchema={selectedOptType === 'email' ? emailSchema : phoneSchema}
      onSubmit={values => {
        if (selectedOptType === 'email') {
          getEmailOtp(
            {
              email: values.email,
            },
            {
              onSuccess() {
                navigate(NAVIGATION_ROUTES.VALIDATE_EMAIL_OTP, {
                  email: values.email,
                  redirect: NAVIGATION_ROUTES.CREATE_NEW_PASSWORD,
                });
              },
            },
          );
        } else {
          // getPhoneOTP(
          //   {
          //     phone: values.phone,
          //   },
          //   {
          //     onSuccess() {
          //       navigate(NAVIGATION_ROUTES.VALIDATE_PHONE_OTP, {
          //         phone: values.phone,
          //         redirect: NAVIGATION_ROUTES.CREATE_NEW_PASSWORD,
          //       });
          //     },
          //   },
          // );
        }
      }}>
      {({
        isValid,
        dirty,
        values,
        handleBlur,
        handleChange,
        handleSubmit,
        errors,
        touched,
        setFieldValue,
      }) => {
        return (
          <AppScreen
            loading={gettingOTP}
            contentContainerStyle={[
              styles.container,
              {
                paddingTop: top,
                paddingBottom: bottom,
              },
            ]}>
            <View>
              <BackButton />
            </View>
            <View style={styles.logoContainer}>
              <AppLogo />
              <AppText style={styles.writeUpHeading}>
                Reset your Password
              </AppText>
              <AppText style={styles.writeUp}>
                Enter your email you use for Visaro, and we’ll help you create a
                new password
              </AppText>
            </View>
            <View style={styles.formContainer}>
              {
                selectedOptType === 'email' && (
                  <TextInput
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    placeholder="Email Address"
                    inputType={EInputTypes.EMAIL}
                    error={touched.email ? errors.email : undefined}
                  />
                )
                // : (
                //   <PhoneNumberInput
                //     onCountryCodePress={() => countryModalRef.current?.open()}
                //     country={values.country}
                //     value={values.phone}
                //     onBlur={handleBlur('phone')}
                //     onChangeText={handleChange('phone')}
                //     placeholder="Phone Number"
                //     error={touched.phone ? errors.phone : undefined}
                //   />
                // )
              }
              <View />
              <ButtonPrimary
                disabled={!isValid || !dirty}
                title={`Confirm ${
                  selectedOptType === 'email' ? 'Email Address' : 'Phone Number'
                }`}
                onPress={() => handleSubmit()}
              />
              {/* <ButtonSecondary
                onPress={() =>
                  setSelectedOtpType(prev =>
                    prev === 'email' ? 'phone' : 'email',
                  )
                }
                title={`Use ${
                  selectedOptType !== 'email' ? 'Email Address' : 'Phone Number'
                }`}
              /> */}
              {isGetEmailOtpError && (
                <AppText style={styles.errorText}>
                  {getEmailOtpError?.message}
                </AppText>
              )}
            </View>
            <CountryListModal
              ref={countryModalRef}
              selected={values.country?.code}
              onSelect={country => {
                setFieldValue('phone_code', country.phone_code);
              }}
            />
          </AppScreen>
        );
      }}
    </Formik>
  );
};
