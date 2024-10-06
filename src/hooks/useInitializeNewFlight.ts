import {APIError, APIResponse, API_URL, get} from '@api/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {QueryObserverOptions, useQuery} from 'react-query';

function useInitailizeNewFlight<
  T = {
    url: string;
  },
>(options?: QueryObserverOptions<APIResponse<T>, APIError>) {
  const {
    isLoading: initializingNewFlight,
    isError: isInitializeError,
    data: newFlightData,
    refetch: reinitializeFlight,
  } = useQuery<APIResponse<T>, APIError>(
    'new-flight-init',
    async () =>
      await get(API_URL + '/aviation/widget/initialize', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
        },
      }),
    {enabled: false, ...options},
  );

  return {
    initializingNewFlight,
    isInitializeError,
    newFlightData,
    reinitializeFlight,
  };
}

export default useInitailizeNewFlight;
