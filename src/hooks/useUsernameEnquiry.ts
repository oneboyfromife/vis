import {APIError, APIResponse, API_URL, get} from '@api/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {QueryObserverOptions, useQuery} from 'react-query';
import {UsernameEnquiryData} from 'types/index';

function useUsernameEnquiry(
  username: string,
  options?: QueryObserverOptions<APIResponse<UsernameEnquiryData>, APIError>,
) {
  const {
    isLoading: fetchingUsername,
    isError: isEnquiryError,
    data: usernameEnquiryData,
    refetch: checkUsername,
    error: enquiryError,
  } = useQuery<APIResponse<UsernameEnquiryData>, APIError>(
    `check-${username}`,
    async () =>
      await get(API_URL + `/username_check/${username}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
        },
      }),
    {
      enabled: false,
      retry: false,
      ...options,
    },
  );

  return {
    fetchingUsername,
    enquiryError,
    isEnquiryError,
    checkUsername,
    usernameEnquiryData,
  };
}

export default useUsernameEnquiry;
