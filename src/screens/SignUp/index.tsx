import React from 'react';
import {Keyboard, View} from 'react-native';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TextInput from '@components/TextInput';
import AppText from '@components/AppText';
// import {EInputTypes} from 'types/enums';
import ButtonPrimary from '@components/Buttons/buttonPrimary';
import AppLogo from '@assets/svgs/visaroLogo';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AppScreen from '@components/AppScreen';
import {navigate} from '@helpers/navigation';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';
import * as yup from 'yup';
import {Formik} from 'formik';
import useRegister from '@hooks/useRegister';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import RadioButton from '@components/RadioButton';
// import {calculateMatchPercentage, getValidationColor} from '@helpers/index';
// import {passwordValidationData} from '@constants/content';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  // password: yup
  //   .string()
  //   .min(8, 'Password must be at least 8 characters')
  //   .required('Password is required'
  //   .matches(/^(?=.*[A-Z])(?=.*[!@#$%&*?]).*$/, 'Password strength is low'),
});

export default () => {
  const {top, bottom} = useSafeAreaInsets();

  const {register, registerError, registering, isRegisterError} = useRegister();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phoneNumber: '',
        dateOfBirth: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={(values, {resetForm}) => {
        Keyboard.dismiss();

        register(values, {
          async onSuccess() {
            navigate(NAVIGATION_ROUTES.OTP_SCREEN, {
              email: values.email,
              redirect: NAVIGATION_ROUTES.CREATE_PASSWORD,
              resultTo: NAVIGATION_ROUTES.SIGN_UP_FLOW,
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
              <AppText style={styles.writeUp}>
                Enter the following details to continue with Visaro
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
              {/* <TextInput
                onBlur={handleBlur('password')}
                onChangeText={handleChange('password')}
                value={values.password}
                placeholder="Password"
                inputType={EInputTypes.PASSWORD}
                error={touched.password ? errors.password : undefined}
              />
              <View style={styles.strengthContainer}>
                <AppText style={styles.strength}>Password Strength</AppText>
                <View style={styles.progressContainer}>
                  <View
                    style={{
                      ...styles.progressBar,
                      backgroundColor: getValidationColor(
                        calculateMatchPercentage(values.password),
                      ),
                      width: `${calculateMatchPercentage(values.password)}%`,
                    }}
                  />
                </View>

                <View>
                  {passwordValidationData.map(({test, text}) => (
                    <View key={text} style={styles.validationContainer}>
                      <RadioButton selected={test(values.password)} />
                      <AppText>{text}</AppText>
                    </View>
                  ))}
                </View>
              </View> */}
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
