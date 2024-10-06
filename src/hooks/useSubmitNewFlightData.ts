import {APIError, APIResponse, API_URL, post} from '@api/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MutationOptions, useMutation} from 'react-query';
import {User} from 'types/index';

function useSubmitNewFlightData(
  options?: MutationOptions<APIResponse<User>, APIError, Record<any, any>>,
) {
  const {
    mutate: submitNewFlightData,
    isLoading: submitingNewFlightData,
    isError: isSubmitingNewFlightDataError,
    error: submitNewFlightDataError,
  } = useMutation(async variables => {
    const token = await AsyncStorage.getItem('token');

    return await post(
      API_URL + '/aviation/flights/bookings/submit',
      variables,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
  }, options);

  return {
    submitNewFlightData,
    submitingNewFlightData,
    isSubmitingNewFlightDataError,
    submitNewFlightDataError,
  };
}

export default useSubmitNewFlightData;
