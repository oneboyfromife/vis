import {APIError, APIResponse, API_URL, post} from '@api/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MutationOptions, useMutation} from 'react-query';
import {User} from 'types/index';

function useUpdateAccount(
  options?: MutationOptions<APIResponse<User>, APIError, Record<any, any>>,
) {
  const {
    mutate: updateAccount,
    isLoading: updatingAccount,
    isError: isUpdatingAccountError,
    error: updateAccountError,
  } = useMutation(async variables => {
    const token = await AsyncStorage.getItem('token');

    return await post(API_URL + '/account/user/account/update', variables, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  }, options);

  return {
    updateAccount,
    updatingAccount,
    isUpdatingAccountError,
    updateAccountError,
  };
}

export default useUpdateAccount;
