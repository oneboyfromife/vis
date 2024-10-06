import AppScreen from '@components/AppScreen';
import {Formik} from 'formik';
import React from 'react';
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
import {useRoute} from '@react-navigation/native';
import {SignUpScreenProps} from 'types/index';
import TextInput from '@components/TextInput';
import {navigate} from '@helpers/navigation';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';

const schema = yup.object().shape({
  phoneNumber: yup.string().required('Phone number is required'),

  legalFirstName: yup.string().required('Legal first name is required'),
  legalLastName: yup.string().required('Legal last name is required'),

  dateOfBirth: yup.date().required('Date of Birth is required'),
  address: yup.string().required('Address is required'),
});

export default () => {
  const {top, bottom} = useSafeAreaInsets();

  const {
    params: {bvnData},
  } = useRoute<SignUpScreenProps>();

  return (
    <Formik
      initialTouched={{
        legalFirstName: true,
        legalLastName: true,
        phoneNumber: true,
        address: true,
        dateOfBirth: true,
      }}
      initialValues={{
        legalFirstName: bvnData?.first_name,
        legalLastName: bvnData?.last_name,
        phoneNumber: bvnData?.phone_1 || bvnData?.phone_2,
        dateOfBirth: '1990-01-01',
        address: bvnData?.address
          ? `${bvnData?.address || ''}, ${
              bvnData.state_of_residence?.description || ''
            }`
          : '',
      }}
      validationSchema={schema}
      onSubmit={values => {
        navigate(NAVIGATION_ROUTES.UPLOAD_PROFILE_IMAGE, {
          bvnData: {
            account_type: 1,
            phone_1: values.phoneNumber,
            phone_2: bvnData?.phone_2,
            profile_pics: '',
          },
        });
      }}>
      {({
        isValid,
        values,
        handleBlur,
        handleChange,
        handleSubmit,
        errors,
        touched,
      }) => {
        return (
          <AppScreen
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
            <ProfileProgress data={personalProfileData} activeIndex={1} />
            <View style={styles.writeUpContainer}>
              <AppText style={styles.writeUpHeading}>Complete Profile</AppText>
              <AppText style={styles.writeUp}>
                Kindly Confirm the personal details generated from your BVN
              </AppText>
            </View>
            <View style={styles.formContainer}>
              <View />
              <TextInput
                value={values.legalFirstName}
                onChangeText={handleChange('legalFirstName')}
                onBlur={handleBlur('legalFirstName')}
                placeholder="Legal First Name"
                editable={false}
                error={
                  touched.legalFirstName ? errors.legalFirstName : undefined
                }
              />
              <TextInput
                value={values.legalLastName}
                onChangeText={handleChange('legalLastName')}
                onBlur={handleBlur('legalLastName')}
                placeholder="Legal Last Name"
                editable={false}
                error={touched.legalLastName ? errors.legalLastName : undefined}
              />
              <TextInput
                value={values.phoneNumber}
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
                placeholder="Phone Number"
                inputMode="tel"
                error={touched.phoneNumber ? errors.phoneNumber : undefined}
              />
              <TextInput
                value={values.address}
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                placeholder="Address"
                editable={false}
                error={touched.address ? errors.address : undefined}
              />
              <TextInput
                value={values.dateOfBirth}
                onChangeText={handleChange('dateOfBirth')}
                onBlur={handleBlur('dateOfBirth')}
                placeholder="Date of Birth"
                editable={false}
                error={touched.dateOfBirth ? errors.dateOfBirth : undefined}
              />
              <View />
              <ButtonPrimary
                disabled={!isValid}
                title="Confirm"
                onPress={() => handleSubmit()}
              />
            </View>
          </AppScreen>
        );
      }}
    </Formik>
  );
};
