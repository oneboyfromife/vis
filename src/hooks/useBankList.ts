import {APIError, APIResponse, API_URL, get} from '@api/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {QueryObserverOptions, useQuery} from 'react-query';
import {Bank} from 'types/index';

function useBankList(
  options?: QueryObserverOptions<APIResponse<Bank[]>, APIError>,
) {
  const {
    data: bankListData,
    isError,
    error,
    isLoading,
  } = useQuery<APIResponse<Bank[]>, APIError>(
    'bank_list',
    async () =>
      await get(API_URL + '/get_bank_list', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
        },
      }),
    options,
  );

  return {
    bankListData,
    isError,
    error,
    isLoading,
  };
}

export default useBankList;
