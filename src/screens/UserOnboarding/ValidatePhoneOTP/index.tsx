import AppScreen from '@components/AppScreen';
import {useRoute} from '@react-navigation/native';
import React, {useCallback, useMemo, useState} from 'react';
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
import useValidatePhoneOTP from '@hooks/useValidatePhoneOtp';
import useGetPhoneOTP from '@hooks/useGetPhoneOTP';

export default () => {
  const {
    params: {phone, redirect},
  } = useRoute<AuthScreenProps>();

  const [otp, setOTP] = useState('');

  const isValid = useMemo(() => {
    return (
      otp.length === 4 &&
      otp.split('').every(v => v !== '' && !isNaN(Number(v)))
    );
  }, [otp]);

  const {validateOTP, validatingOTP, isOTPError, otpError} =
    useValidatePhoneOTP({
      async onSuccess(data) {
        console.log('Verified-', data);
        navigate(redirect);
      },
    });

  const {getError, getOTP, gettingPhoneOTP, isGetError} = useGetPhoneOTP();

  const isError = useMemo(
    () => isOTPError || isGetError,
    [isOTPError, isGetError],
  );

  const error = useMemo(() => otpError || getError, [otpError, getError]);

  const isLoading = useMemo(
    () => validatingOTP || gettingPhoneOTP,
    [validatingOTP, gettingPhoneOTP],
  );

  const handleResend = useCallback(() => {
    getOTP();
  }, [getOTP]);

  const handleSubmit = () => {
    validateOTP({
      code: otp,
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
        <View
          style={{
            alignItems: 'flex-start',
            gap: 5,
            paddingVertical: 20,
            paddingBottom: 10,
          }}>
          <AppText style={styles.writeUpHeading}>OTP Code</AppText>
          <AppText style={styles.writeUp}>
            We sent your One Time Verification Password to your phone number{' '}
            {phone && phone}.
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
            Resend Code in 60s{' '}
            <AppText style={styles.orangeText}>Resend</AppText>
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
