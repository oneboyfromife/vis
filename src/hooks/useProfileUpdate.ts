import {APIError, APIResponse, API_URL, postFormData} from '@api/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MutationOptions, useMutation} from 'react-query';

function useProfileUpdate<T>(
  options?: MutationOptions<APIResponse<T>, APIError, Record<any, any>>,
) {
  const {
    isLoading: updatingProfile,
    isError: isProfileUpdateError,
    error: profileUpdateError,
    mutate: updateProfile,
  } = useMutation(async (variables: Record<any, any>) => {
    const url = `${API_URL}/profile_update`;
    const formData = new FormData();
    formData.append('account_type', variables.account_type);
    formData.append('phone_1', variables.phone_1);
    formData.append('phone_2', variables.phone_2);
    formData.append('profile_pics', variables.profile_pics); // Replace with your actual file data if you need to upload an image

    const headers = {
      accept: 'application/json',
      Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
    };

    const postOptions = {
      headers: headers,
    };

    return await postFormData(url, formData, postOptions);
  }, options);

  return {
    updateProfile,
    isProfileUpdateError,
    profileUpdateError,
    updatingProfile,
  };
}

export default useProfileUpdate;
