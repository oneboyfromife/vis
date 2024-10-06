import React, {useState} from 'react';
import {Keyboard, View} from 'react-native';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TextInput from '@components/TextInput';
import AppText from '@components/AppText';
import ButtonPrimary from '@components/Buttons/buttonPrimary';
import AppLogo from '@assets/svgs/visaroLogo';
import AppScreen from '@components/AppScreen';
import BackButton from '@components/BackButton';
import {EInputTypes} from 'types/enums';
import RadioButton from '@components/RadioButton';
import {passwordValidationData} from '@constants/content';
import {
  calculateMatchPercentage,
  getValidationColor,
  navigate,
} from '@helpers/index';
import {Formik} from 'formik';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';
import useResetPassword from '@hooks/useResetPassword';
import {useRoute} from '@react-navigation/native';
import {AuthScreenProps} from 'types/index';
import SuccessCheck from '@assets/svgs/successCheck';

export default () => {
  const {top, bottom} = useSafeAreaInsets();

  const [completed, setCompleted] = useState(false);

  const {resetPassword} = useResetPassword({
    onSuccess() {
      setCompleted(true);
    },
  });

  const {params} = useRoute<AuthScreenProps>();

  return (
    <>
      {completed && (
        <View
          style={[
            styles.successContainer,
            {
              paddingBottom: bottom,
              paddingTop: top,
            },
          ]}>
          <View style={styles.successContent}>
            <SuccessCheck
              style={{
                transform: [
                  {
                    scale: 1.5,
                  },
                ],
              }}
            />
            <AppText style={styles.successContainerText}>
              You’re all set!
            </AppText>
          </View>
          <ButtonPrimary
            onPress={() => navigate(NAVIGATION_ROUTES.LOGIN)}
            title="Login Now"
          />
        </View>
      )}
      <Formik
        initialValues={{
          password: '',
          confirmPassword: '',
        }}
        onSubmit={(values, {setFieldError}) => {
          Keyboard.dismiss();
          if (values.password !== values.confirmPassword) {
            setFieldError('confirmPassword', "Passwords don't match");
          } else {
            resetPassword({
              code: params?.code,
              password: values.password,
              email: params?.email,
            });
          }
        }}>
        {({
          values,
          handleBlur,
          handleChange,
          handleSubmit,
          errors,
          isValid,
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
              <View>
                <BackButton />
              </View>
              <View style={styles.logoContainer}>
                <AppLogo />
                <AppText style={styles.writeUpHeading}>
                  Set Account Password
                </AppText>
                <AppText style={styles.writeUp}>
                  You can now set up a new password. Enter the following to
                  continue.
                </AppText>
              </View>
              <View style={styles.formContainer}>
                <TextInput
                  placeholder="Password"
                  inputType={EInputTypes.PASSWORD}
                  value={values.password}
                  onBlur={handleBlur('password')}
                  onChangeText={handleChange('password')}
                  error={errors.password}
                />
                <TextInput
                  placeholder="Confirm Password"
                  inputType={EInputTypes.PASSWORD}
                  value={values.confirmPassword}
                  onBlur={handleBlur('confirmPassword')}
                  onChangeText={handleChange('confirmPassword')}
                  error={errors.confirmPassword}
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
                </View>
                <ButtonPrimary
                  title="Confirm"
                  disabled={
                    !(
                      isValid &&
                      calculateMatchPercentage(values.password) === 100
                    )
                  }
                  onPress={() => handleSubmit()}
                />
              </View>
            </AppScreen>
          );
        }}
      </Formik>
    </>
  );
};
