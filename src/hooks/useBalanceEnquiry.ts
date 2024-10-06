import {APIError, APIResponse, API_URL, get} from '@api/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {QueryObserverOptions, useQuery} from 'react-query';
import {Wallet} from 'types/index';

function useBalanceEnquiry(
  options?: QueryObserverOptions<
    APIResponse<{
      wallet: Wallet;
    }>,
    APIError
  >,
) {
  const {
    isLoading: fetchingBalance,
    isError: isEnquiryError,
    data: balanceEnquiryData,
    refetch: fetchBalance,
    error: enquiryError,
  } = useQuery<
    APIResponse<{
      wallet: Wallet;
    }>,
    APIError
  >(
    'balance-enquiry',
    async () =>
      await get(API_URL + '/balance_enquiry', {
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
    fetchBalance,
    enquiryError,
    isEnquiryError,
    fetchingBalance,
    balanceEnquiryData,
  };
}

export default useBalanceEnquiry;
