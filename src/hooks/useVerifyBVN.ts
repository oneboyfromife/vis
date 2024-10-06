import {MutationOptions, useMutation} from 'react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {APIError, APIResponse, API_URL, post} from '@api/index';

function useVerifyBVN<T>(
  options?: MutationOptions<APIResponse<T>, APIError, Record<any, any>>,
) {
  const {
    isLoading: verifyingBVN,
    isError: isVerifyingBVNError,
    error: verifyingBVNError,
    mutate: verifyBvn,
  } = useMutation(async (variables: Record<any, any>) => {
    return await post(API_URL + '/bvn_verification', variables, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
      },
    });
  }, options);

  return {
    verifyBvn,
    isVerifyingBVNError,
    verifyingBVNError,
    verifyingBVN,
  };
}

export default useVerifyBVN;
