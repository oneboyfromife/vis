import AppScreen from '@components/AppScreen';
import useResendOTP from '@hooks/useResendEmailOtp';
import {useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AuthScreenProps} from 'types/index';
import styles from './styles';
import AppLogo from '@assets/svgs/visaroLogo';
import AppText from '@components/AppText';
import {View} from 'react-native';
import ButtonPrimary from '@components/Buttons/buttonPrimary';
import {TouchableOpacity} from 'react-native-gesture-handler';
import OTPInput from '@components/OtpInput';
import {navigate} from '@helpers/navigation';
import BackButton from '@components/BackButton';
import useValidateEmailOTP from '@hooks/useValidateEmailOtp';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default () => {
  const {
    params: {email, redirect},
  } = useRoute<AuthScreenProps>();

  const [otp, setOTP] = useState('');

  const isValid = useMemo(() => {
    return (
      otp.length === 4 &&
      otp.split('').every(v => v !== '' && !isNaN(Number(v)))
    );
  }, [otp]);

  const {validateOTP, validatingOTP, isOTPError, otpError} =
    useValidateEmailOTP({
      async onSuccess(data) {
        if (data.data?.token) {
          await AsyncStorage.setItem('token', data?.data?.token);
          navigate(redirect && redirect);
        }
      },
    });

  const {isResendError, resendingOTP, resendError, resendOTP} = useResendOTP();

  const isError = useMemo(
    () => isOTPError || isResendError,
    [isOTPError, isResendError],
  );

  const error = useMemo(() => otpError || resendError, [otpError, resendError]);

  const isLoading = useMemo(
    () => validatingOTP || resendingOTP,
    [validatingOTP, resendingOTP],
  );

  const handleResend = useCallback(() => {
    resendOTP(
      {email},
      {
        onSuccess() {
          setTimer(60);
          setResendEnabled(false);
        },
      },
    );
  }, [resendOTP, email]);

  const handleSubmit = () => {
    validateOTP({
      email,
      code: otp,
    });
  };

  const [timer, setTimer] = useState(60);
  const [resendEnabled, setResendEnabled] = useState(false);

  useEffect(() => {
    let interval: any;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setResendEnabled(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const {top, bottom} = useSafeAreaInsets();
  return (
    <AppScreen
      contentContainerStyle={[
        styles.container,
        {
          paddingTop: top,
          paddingBottom: bottom,
        },
      ]}
      loading={isLoading}>
      <View>
        <BackButton />
      </View>
      <View style={styles.logoContainer}>
        <AppLogo />
        <View
          style={{
            alignItems: 'flex-start',
            gap: 5,
            paddingVertical: 20,
            paddingBottom: 10,
          }}>
          <AppText style={styles.writeUpHeading}>OTP Code</AppText>
          <AppText style={styles.writeUp}>
            We sent your One Time Verification Password to your email{' '}
            {email && email}.
          </AppText>
        </View>
      </View>
      <View style={styles.formContainer}>
        <OTPInput onChangeText={value => setOTP(value)} />
        {isError && (
          <AppText style={styles.errorText}>{error?.message}</AppText>
        )}
        <TouchableOpacity onPress={handleResend} activeOpacity={0.8}>
          <AppText
            style={{
              textAlign: 'center',
            }}>
            {resendEnabled ? (
              <AppText style={styles.orangeText}>Resend</AppText>
            ) : (
              `Resend Code in ${timer}s`
            )}
          </AppText>
        </TouchableOpacity>
        <View />
        <ButtonPrimary
          disabled={!isValid}
          onPress={handleSubmit}
          title="Confirm"
        />
      </View>
    </AppScreen>
  );
};
