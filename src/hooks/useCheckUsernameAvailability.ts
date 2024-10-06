import {APIError, APIResponse, API_URL, post} from '@api/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MutationOptions, useMutation} from 'react-query';

function useCheckUsernameAvailability(
  options?: MutationOptions<APIResponse<any>, APIError, {username: string}>,
) {
  const {
    isLoading: checkingUsername,
    isError: isCheckUsernameError,
    error: checkingUsernameError,
    data: checkUsernameData,
    mutate: checkUsername,
  } = useMutation<APIResponse<any>, APIError, {username: string}>(
    'check-username',
    async variables =>
      await post(API_URL + '/onboarding/users/onboarding/username', variables, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
        },
      }),
    {
      ...options,
    },
  );

  return {
    checkingUsername,
    isCheckUsernameError,
    checkingUsernameError,
    checkUsernameData,
    checkUsername,
  };
}

export default useCheckUsernameAvailability;
