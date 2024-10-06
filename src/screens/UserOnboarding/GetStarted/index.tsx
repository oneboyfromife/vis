import React from 'react';
import {Keyboard, View} from 'react-native';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TextInput from '@components/TextInput';
import AppText from '@components/AppText';
import ButtonPrimary from '@components/Buttons/buttonPrimary';
import AppLogo from '@assets/svgs/visaroLogo';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AppScreen from '@components/AppScreen';
import {navigate} from '@helpers/navigation';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';
import * as yup from 'yup';
import {Formik} from 'formik';
import useRegister from '@hooks/useRegister';
import {px} from '@helpers/responsiveness';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
});

export default () => {
  const {top, bottom} = useSafeAreaInsets();

  const {register, registerError, registering, isRegisterError} = useRegister();

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={schema}
      onSubmit={(values, {resetForm}) => {
        Keyboard.dismiss();

        register(values, {
          async onSuccess() {
            navigate(NAVIGATION_ROUTES.VALIDATE_EMAIL_OTP, {
              email: values.email,
              redirect: NAVIGATION_ROUTES.CREATE_PASSWORD,
            });
            resetForm();
          },
        });
      }}>
      {({
        isValid,
        dirty,
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => {
        return (
          <AppScreen
            loading={registering}
            contentContainerStyle={[
              styles.container,
              {
                paddingTop: top,
                paddingBottom: bottom,
              },
            ]}>
            <View style={styles.logoContainer}>
              <AppLogo />
            </View>
            <View
              style={{alignItems: 'flex-start', gap: 5, paddingVertical: 20}}>
              <AppText
                style={{
                  fontSize: px(28),
                  fontWeight: '600',
                }}>
                Sign Up
              </AppText>
              <AppText
                style={{
                  opacity: 0.8,
                }}>
                Enter your email to sign up on visaro
              </AppText>
            </View>
            <View style={styles.formContainer}>
              <TextInput
                onBlur={handleBlur('email')}
                onChangeText={handleChange('email')}
                value={values.email}
                placeholder="Email Address"
                error={touched.email ? errors.email : undefined}
              />
              <AppText style={styles.terms}>
                By Signing in you are accepting our{' '}
                <AppText style={styles.orangeText}>Terms and Condition</AppText>{' '}
                & <AppText style={styles.orangeText}>Privacy Policy</AppText>
              </AppText>
              {isRegisterError && (
                <AppText style={styles.errorText}>
                  {registerError?.message}
                </AppText>
              )}
              <View />
              <ButtonPrimary
                disabled={!isValid || !dirty}
                onPress={() => handleSubmit()}
                title={registering ? 'Loading' : 'Sign Up'}
              />
            </View>
            <View style={styles.signInWriteUpContainer}>
              <AppText style={styles.signInWriteUp}>
                Already Have An Account?{' '}
              </AppText>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigate(NAVIGATION_ROUTES.LOGIN)}>
                <AppText style={styles.orangeText}>Log In</AppText>
              </TouchableOpacity>
            </View>
          </AppScreen>
        );
      }}
    </Formik>
  );
};
