import {APIError, APIResponse, API_URL, post} from '@api/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MutationOptions, useMutation} from 'react-query';

function useInitializeBVNTransaction<
  T extends {
    authorization_url: string;
    reference: string;
    access_code: string;
  },
>(options?: MutationOptions<APIResponse<T>, APIError, Record<any, any>>) {
  const {
    isLoading: initiatingTransaction,
    isError: isTransactionError,
    error: transactionError,
    mutate: initiateTransaction,
  } = useMutation(async (variables: Record<any, any>) => {
    return await post(API_URL + '/initialize_transaction', variables, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
      },
    });
  }, options);

  return {
    initiateTransaction,
    isTransactionError,
    transactionError,
    initiatingTransaction,
  };
}

export default useInitializeBVNTransaction;
