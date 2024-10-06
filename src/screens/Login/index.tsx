import React from 'react';
import {Keyboard, Pressable, View} from 'react-native';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TextInput from '@components/TextInput';
import AppText from '@components/AppText';
import {navigate} from '@helpers/navigation';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';
import {EInputTypes} from 'types/enums';
import ButtonPrimary from '@components/Buttons/buttonPrimary';
import AppLogo from '@assets/svgs/visaroLogo';
import * as yup from 'yup';
import {Formik} from 'formik';
import useLogin from '@hooks/useLogin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppScreen from '@components/AppScreen';
import {px} from '@helpers/responsiveness';
import BackButton from '@components/BackButton';
import ButtonSecondary from '@components/Buttons/buttonSecondary';
import {useAuth} from 'src/context/AuthContext';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 8 characters long')
    .required('Password is required'),
});

export default () => {
  const {top, bottom} = useSafeAreaInsets();

  const {login, isLoading, isError, error} = useLogin();

  const {setUser} = useAuth();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={(values, {resetForm}) => {
        Keyboard.dismiss();
        login(values, {
          async onSuccess(data) {
            if (data?.data) {
              await AsyncStorage.setItem('token', data.data?.token);
              setUser(data.data.user);
            }
            navigate(NAVIGATION_ROUTES.APP);
            resetForm();
          },
        });
      }}>
      {({
        handleBlur,
        handleChange,
        values,
        handleSubmit,
        isValid,
        dirty,
        errors,
        touched,
      }) => {
        return (
          <AppScreen
            loading={isLoading}
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
            </View>
            <View style={styles.formContainer}>
              <View style={{alignItems: 'center', gap: 5, paddingVertical: 10}}>
                <AppText
                  style={{
                    fontSize: px(22),
                    textAlign: 'center',
                    fontWeight: '600',
                  }}>
                  Welcome back
                </AppText>
                <AppText
                  style={{
                    opacity: 0.8,
                    textAlign: 'center',
                  }}>
                  Please enter your login details to access your Visaro account
                </AppText>
              </View>
              <TextInput
                onBlur={handleBlur('email')}
                onChangeText={handleChange('email')}
                value={values.email}
                placeholder="Email Address"
                error={touched.email ? errors.email : undefined}
              />
              <TextInput
                onBlur={handleBlur('password')}
                onChangeText={handleChange('password')}
                value={values.password}
                placeholder="Password"
                inputType={EInputTypes.PASSWORD}
                error={touched.password ? errors.password : undefined}
              />
              {isError && (
                <AppText style={styles.errorText}>{error?.message}</AppText>
              )}
              <Pressable
                onPress={() => navigate(NAVIGATION_ROUTES.FORGOT_PASSWORD)}>
                <AppText style={styles.orangeText}>
                  I forgot my password
                </AppText>
              </Pressable>
              <View />
              <ButtonPrimary
                disabled={!isValid || !dirty}
                title={isLoading ? 'Loading...' : 'Login'}
                onPress={() => handleSubmit()}
              />
              <View style={{flex: 1}} />
              <ButtonSecondary
                disabled={!isValid || !dirty}
                title="Sign Up"
                onPress={() => navigate(NAVIGATION_ROUTES.SIGN_UP_FLOW)}
              />
            </View>
          </AppScreen>
        );
      }}
    </Formik>
  );
};
