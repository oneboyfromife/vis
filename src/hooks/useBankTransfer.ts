import {APIError, APIResponse, API_URL, post} from '@api/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MutationOptions, useMutation} from 'react-query';
import {BankTransferPayload, TransferData} from 'types/index';

function useBankTransfer(
  options?: MutationOptions<
    APIResponse<TransferData>,
    APIError,
    BankTransferPayload
  >,
) {
  const {
    isLoading: transfering,
    isError: isTransferError,
    error: transferError,
    mutate: transfer,
    data: transferData,
  } = useMutation(async variables => {
    return await post(API_URL + '/transfer', variables, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
      },
    });
  }, options);

  return {
    transfer,
    isTransferError,
    transferData,
    transferError,
    transfering,
  };
}

export default useBankTransfer;
