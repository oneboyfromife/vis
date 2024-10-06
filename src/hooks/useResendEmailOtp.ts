import {APIError, APIResponse, API_URL, post} from '@api/index';
import {MutationOptions, useMutation} from 'react-query';

function useResendOTP(
  options?: MutationOptions<APIResponse<any>, APIError, {email: string}>,
) {
  const {
    isLoading: resendingOTP,
    isError: isResendError,
    error: resendError,
    mutate: resendOTP,
  } = useMutation<APIResponse<any>, APIError, {email: string}>(
    'resend_otp',
    async variables =>
      await post(API_URL + '/onboarding/users/onboarding/email', variables),
    {
      ...options,
    },
  );

  return {
    resendOTP,
    resendingOTP,
    isResendError,
    resendError,
  };
}

export default useResendOTP;
