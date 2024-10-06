import {APIError, APIResponse, API_URL, post} from '@api/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MutationOptions, useMutation} from 'react-query';

function useValidateEmailOTP(
  options?: MutationOptions<
    APIResponse<{token: string}>,
    APIError,
    Record<any, any>
  >,
) {
  const {
    isLoading: validatingOTP,
    isError: isOTPError,
    error: otpError,
    mutate: validateOTP,
  } = useMutation(async (variables: Record<any, any>) => {
    return await post(
      API_URL + '/onboarding/users/onboarding/verifications/verify-email-otp',
      variables,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
        },
      },
    );
  }, options);

  return {
    validateOTP,
    isOTPError,
    otpError,
    validatingOTP,
  };
}

export default useValidateEmailOTP;
