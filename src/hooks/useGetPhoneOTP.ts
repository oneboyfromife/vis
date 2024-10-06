import {APIError, APIResponse, API_URL, get} from '@api/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {QueryObserverOptions, useQuery} from 'react-query';

function useGetPhoneOTP(
  options?: QueryObserverOptions<APIResponse<any>, APIError>,
) {
  const {
    isLoading: gettingPhoneOTP,
    isError: isGetError,
    error: getError,
    refetch: getOTP,
  } = useQuery<APIResponse<any>, APIError>(
    'get_otp',
    async () =>
      await get(
        API_URL + '/onboarding/users/onboarding/verifications/get-phone-otp',
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
          },
        },
      ),
    {
      enabled: false,
      ...options,
    },
  );

  return {
    getOTP,
    gettingPhoneOTP,
    isGetError,
    getError,
  };
}

export default useGetPhoneOTP;
