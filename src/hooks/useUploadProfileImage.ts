import {APIError, APIResponse, API_URL, postFormData} from '@api/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MutationOptions, useMutation} from 'react-query';

function useUploadProfileImageImage<T>(
  options?: MutationOptions<APIResponse<T>, APIError, Record<any, any>>,
) {
  const {
    isLoading: updatingProfileImage,
    isError: isProfileImageUpdateError,
    error: profileImageUpdateError,
    mutate: updateProfileImage,
  } = useMutation(async (variables: Record<any, any>) => {
    const url = `${API_URL}/account/user/account/update`;
    const formData = new FormData();

    console.log(variables);

    formData.append('photo', variables.photo); // Replace with your actual file data if you need to upload an image

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
    updateProfileImage,
    isProfileImageUpdateError,
    profileImageUpdateError,
    updatingProfileImage,
  };
}

export default useUploadProfileImageImage;
