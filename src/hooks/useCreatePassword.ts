import {APIError, APIResponse, API_URL, post} from '@api/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MutationOptions, useMutation} from 'react-query';

function useCreatePassword<T>(
  options?: MutationOptions<APIResponse<T>, APIError, {password: string}>,
) {
  const {
    mutate: createPassword,
    isLoading: creatingPassword,
    isError: isCreatePasswordError,
    error: createPasswordError,
  } = useMutation(
    async variables =>
      await post(API_URL + '/account/user/account/update', variables, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
        },
      }),
    options,
  );

  return {
    createPassword,
    creatingPassword,
    isCreatePasswordError,
    createPasswordError,
  };
}

export default useCreatePassword;
