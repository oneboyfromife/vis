import {APIError, APIResponse, API_URL, post} from '@api/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MutationOptions, useMutation} from 'react-query';

function useCreatePin<T>(
  options?: MutationOptions<
    APIResponse<T>,
    APIError,
    {pin: string; pin_confirmation: string}
  >,
) {
  const {
    mutate: createPin,
    isLoading: creatingPin,
    isError: isCreatePinError,
    error: createPinError,
  } = useMutation(
    async variables =>
      await post(API_URL + '/create_transaction_pin', variables, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
        },
      }),
    options,
  );

  return {
    createPin,
    creatingPin,
    isCreatePinError,
    createPinError,
  };
}

export default useCreatePin;
