import AppScreen from '@components/AppScreen';
import {Formik} from 'formik';
import React, {useRef} from 'react';
import * as yup from 'yup';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ProfileProgress from '@components/ProfileProgress';
import BackButton from '@components/BackButton';
import AppLogo from '@assets/svgs/visaroLogo';
import {personalProfileData} from '@constants/content';
import AppText from '@components/AppText';
import ButtonPrimary from '@components/Buttons/buttonPrimary';
import {View} from 'react-native';
import {AuthScreenProps, Country} from 'types/index';
import TextInput from '@components/TextInput';
import {navigate} from '@helpers/navigation';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';
import PhoneNumberInput from '@components/PhoneNumberInput';
import CountryListModal, {
  CountryListModalRef,
} from '@components/CountryListModal';
import useUpdateAccount from '@hooks/useUpdateAccount';
import {useRoute} from '@react-navigation/native';
import useGetPhoneOTP from '@hooks/useGetPhoneOTP';

const schema = yup.object().shape({
  phone: yup.string().required('Phone number is required'),

  firstname: yup.string().required('First name is required'),
  lastname: yup.string().required('Last name is required'),
  middlename: yup.string().optional(),

  // dateOfBirth: yup.date().required('Date of Birth is required'),
  // address: yup.string().required('Address is required'),
});

export default () => {
  const {top, bottom} = useSafeAreaInsets();

  const {params} = useRoute<AuthScreenProps>();

  const countryModalRef = useRef<CountryListModalRef | null>(null);

  const {
    updateAccount,
    updatingAccount,
    updateAccountError,
    isUpdatingAccountError,
  } = useUpdateAccount();

  const {getError, getOTP, gettingPhoneOTP, isGetError} = useGetPhoneOTP();

  return (
    <Formik
      initialValues={
        {
          firstname: '',
          lastname: '',
          middlename: '',
          phone: '',
          phone_code: '+234',
          country: null,
        } as {
          firstname: string;
          lastname: string;
          middlename: string;
          phone: string;
          phone_code: string;
          country: Country | null;
        }
      }
      validationSchema={schema}
      onSubmit={values => {
        updateAccount(
          {
            firstname: values.firstname,
            lastname: values.lastname,
            middlename: values.middlename,
            phone_code: values.phone_code,
            phone: values.phone,
            password: params?.password,
          },
          {
            onError(error) {
              console.log(error);
            },
            onSuccess() {
              getOTP().then(() => {
                navigate(NAVIGATION_ROUTES.VALIDATE_PHONE_OTP, {
                  phone: values.phone,
                  redirect: NAVIGATION_ROUTES.UPLOAD_PROFILE_IMAGE,
                });
              });
            },
          },
        );
      }}>
      {({
        isValid,
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
            loading={updatingAccount || gettingPhoneOTP}
            contentContainerStyle={[
              styles.container,
              {
                paddingTop: top,
                paddingBottom: bottom,
              },
            ]}>
            <View style={styles.logoContainer}>
              <BackButton />
              <AppLogo />
              <View style={styles.rightHeaderItem} />
            </View>
            <ProfileProgress data={personalProfileData} activeIndex={0} />
            <View style={styles.writeUpContainer}>
              <AppText style={styles.writeUpHeading}>Complete Profile</AppText>
              <AppText style={styles.writeUp}>
                Kindly enter your personal details to create an account
              </AppText>
            </View>
            <View style={styles.formContainer}>
              <View />
              <TextInput
                value={values.firstname}
                onChangeText={handleChange('firstname')}
                onBlur={handleBlur('firstname')}
                placeholder="First Name"
                error={touched.firstname ? errors.firstname : undefined}
              />
              <TextInput
                value={values.lastname}
                onChangeText={handleChange('lastname')}
                onBlur={handleBlur('lastname')}
                placeholder="Surname"
                error={touched.lastname ? errors.lastname : undefined}
              />
              <TextInput
                value={values.middlename}
                onChangeText={handleChange('middlename')}
                onBlur={handleBlur('middlename')}
                placeholder="Other names"
                error={touched.middlename ? errors.middlename : undefined}
              />
              <PhoneNumberInput
                onCountryCodePress={() => countryModalRef.current?.open()}
                country={values.country}
                value={values.phone}
                onBlur={handleBlur('phone')}
                onChangeText={handleChange('phone')}
                placeholder="Phone Number"
                error={touched.phone ? errors.phone : undefined}
              />
              {isUpdatingAccountError && (
                <AppText style={styles.errorText}>
                  {updateAccountError?.message}
                </AppText>
              )}
              {isGetError && (
                <AppText style={styles.errorText}>{getError?.message}</AppText>
              )}
              <View />
              <ButtonPrimary
                disabled={!isValid}
                title="Confirm"
                onPress={() => handleSubmit()}
              />
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
