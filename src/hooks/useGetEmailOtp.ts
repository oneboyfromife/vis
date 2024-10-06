import {APIError, APIResponse, API_URL, post} from '@api/index';
import {MutationOptions, useMutation} from 'react-query';

function useGetEmailOTP(
  options?: MutationOptions<APIResponse<any>, APIError, {email: string}>,
) {
  const {
    isLoading: gettingOTP,
    isError: isGetEmailError,
    error: getError,
    mutate: getOTP,
  } = useMutation<APIResponse<any>, APIError, {email: string}>(
    'email-otp',
    async variables =>
      await post(API_URL + '/onboarding/users/onboarding/email', variables),
    {
      ...options,
    },
  );

  return {
    getOTP,
    gettingOTP,
    isGetEmailError,
    getError,
  };
}

export default useGetEmailOTP;
