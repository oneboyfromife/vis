import {APIError, APIResponse, API_URL, post} from '@api/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MutationOptions, useMutation} from 'react-query';

function useResetPassword<T>(
  options?: MutationOptions<
    APIResponse<T>,
    APIError,
    {password: string; code: string; email: string}
  >,
) {
  const {
    mutate: resetPassword,
    isLoading: resettingPassword,
    isError: isResetPasswordError,
    error: resetPasswordError,
  } = useMutation(
    async variables =>
      await post(API_URL + '/auth/user/reset-password', variables, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
        },
      }),
    options,
  );

  return {
    resetPassword,
    resettingPassword,
    isResetPasswordError,
    resetPasswordError,
  };
}

export default useResetPassword;
