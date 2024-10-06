import {APIError, APIResponse, API_URL, post} from '@api/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MutationOptions, useMutation} from 'react-query';
import {TransferData, VisaroTransferPayload} from 'types/index';

function useVisaroTransfer(
  options?: MutationOptions<
    APIResponse<TransferData>,
    APIError,
    VisaroTransferPayload
  >,
) {
  const {
    isLoading: transfering,
    isError: isTransferError,
    error: transferError,
    mutate: transfer,
    data: transferData,
  } = useMutation(async variables => {
    return await post(API_URL + '/transfer_to_visaro', variables, {
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

export default useVisaroTransfer;
