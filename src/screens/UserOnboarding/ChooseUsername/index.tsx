import React, {useState} from 'react';
import {ActivityIndicator, Keyboard, View} from 'react-native';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AppText from '@components/AppText';
import ButtonPrimary from '@components/Buttons/buttonPrimary';
import AppLogo from '@assets/svgs/visaroLogo';
import AppScreen from '@components/AppScreen';
import * as yup from 'yup';
import {Formik} from 'formik';
import {px} from '@helpers/responsiveness';
import BackButton from '@components/BackButton';
import UsernameInput from '@components/UsernameInput';
import {Icon} from '@components/Icon';
import colors from '@theme/colors';
import useCheckUsernameAvailability from '@hooks/useCheckUsernameAvailability';
import useUpdateAccount from '@hooks/useUpdateAccount';
import SuccessCheck from '@assets/svgs/successCheck';
import {navigate} from '@helpers/navigation';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';
import {useAuth} from 'src/context/AuthContext';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
});

export default () => {
  const {top, bottom} = useSafeAreaInsets();

  const [completed, setCompleted] = useState(false);

  const {setUser} = useAuth();
  const {
    checkUsername,
    checkingUsername,
    checkingUsernameError,
    isCheckUsernameError,
    checkUsernameData,
  } = useCheckUsernameAvailability();

  const {
    updateAccount,
    updateAccountError,
    isUpdatingAccountError,
    updatingAccount,
  } = useUpdateAccount({
    onSuccess(data) {
      if (data?.data) {
        setUser(data.data);
      }

      setCompleted(true);
    },
  });

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
              Congratulation! Continue With Visaro. You’re all set!
            </AppText>
          </View>
          <ButtonPrimary
            onPress={() => navigate(NAVIGATION_ROUTES.APP)}
            title="Continue"
          />
        </View>
      )}
      <Formik
        initialValues={{
          username: '',
        }}
        validationSchema={schema}
        onSubmit={(values, {resetForm}) => {
          updateAccount(values, {
            onSuccess() {
              resetForm();
              Keyboard.dismiss();
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
              loading={updatingAccount}
              contentContainerStyle={[
                styles.container,
                {
                  paddingTop: top,
                  paddingBottom: bottom,
                },
              ]}>
              <BackButton />
              <View style={styles.logoContainer}>
                <AppLogo />
              </View>
              <View style={{alignItems: 'center', gap: 5, paddingVertical: 20}}>
                <AppText
                  style={{
                    fontSize: px(28),
                    fontWeight: '600',
                    textAlign: 'center',
                  }}>
                  Choose a username
                </AppText>
                <AppText
                  style={{
                    opacity: 0.8,
                    textAlign: 'center',
                  }}>
                  Enter a unique username that will be associated with your
                  visaro account
                </AppText>
              </View>
              <View style={styles.formContainer}>
                <UsernameInput
                  onBlur={handleBlur('username')}
                  onChangeText={text => {
                    checkUsername({username: text});
                    handleChange('username')(text);
                  }}
                  value={values.username}
                  placeholder="Username"
                  error={
                    isCheckUsernameError
                      ? checkingUsernameError?.message
                      : touched.username
                      ? errors.username
                      : undefined
                  }
                  success={
                    checkUsernameData?.status
                      ? checkUsernameData?.message
                      : undefined
                  }>
                  {checkUsernameData?.status && (
                    <Icon
                      name="check"
                      weight="bold"
                      size={24}
                      color={colors.GREEN_02}
                    />
                  )}
                  {checkingUsername && (
                    <ActivityIndicator color={colors.GREY_04} />
                  )}
                </UsernameInput>
                {isUpdatingAccountError && (
                  <AppText style={styles.errorText}>
                    {updateAccountError?.message}
                  </AppText>
                )}

                <View />
                <ButtonPrimary
                  disabled={!isValid || !dirty || !checkUsernameData?.status}
                  onPress={() => handleSubmit()}
                  title={updatingAccount ? 'Saving' : 'Choose Username'}
                />
              </View>
            </AppScreen>
          );
        }}
      </Formik>
    </>
  );
};
