import AppScreen from '@components/AppScreen';
import useResendOTP from '@hooks/useResendEmailOtp';
import useValidateOTP from '@hooks/useValidateOtp';
import {useRoute} from '@react-navigation/native';
import React, {useCallback, useMemo, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AuthScreenProps, OTP_TYPES} from 'types/index';
import styles from './styles';
import AppLogo from '@assets/svgs/visaroLogo';
import AppText from '@components/AppText';
import {View} from 'react-native';
import ButtonPrimary from '@components/Buttons/buttonPrimary';
import {TouchableOpacity} from 'react-native-gesture-handler';
import OTPInput from '@components/OtpInput';
import {navigate} from '@helpers/navigation';
import BackButton from '@components/BackButton';

export default () => {
  const {
    params: {type, autoSendOTP, email, redirect, resultTo},
  } = useRoute<AuthScreenProps>();

  const [otp, setOTP] = useState('');

  const isValid = useMemo(() => {
    return (
      otp.length === 4 &&
      otp.split('').every(v => v !== '' && !isNaN(Number(v)))
    );
  }, [otp]);

  const {validateOTP, validatingOTP, isOTPError, otpError} = useValidateOTP({
    onSuccess() {
      navigate(redirect, {
        resultTo,
      });
    },
  });

  const {isResendError, resendingOTP, resendError, resendOTP} = useResendOTP(
    type || OTP_TYPES.LoginVerification,
    {
      enabled: autoSendOTP || false,
    },
  );

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
    resendOTP();
  }, [resendOTP]);

  const handleSubmit = () => {
    // validateOTP({
    //   otp_code: otp,
    // });
    navigate(redirect, {
      resultTo,
    });
  };

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
        <AppText style={styles.writeUpHeading}>Type in your code</AppText>
        <AppText style={styles.writeUp}>
          Please check your email.{' '}
          {email
            ? `We've sent a code to ${email}`
            : "We've sent a code to your email"}
        </AppText>
      </View>
      <View style={styles.formContainer}>
        <OTPInput onChangeText={value => setOTP(value)} />
        {isError && (
          <AppText style={styles.errorText}>{error?.message}</AppText>
        )}
        <TouchableOpacity onPress={handleResend} activeOpacity={0.8}>
          <AppText style={styles.orangeText}>Resend</AppText>
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
