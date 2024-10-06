import {APIError, APIResponse, API_URL, postFormData} from '@api/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MutationOptions, useMutation} from 'react-query';

function useCompanyProfileUpdate<T>(
  options?: MutationOptions<APIResponse<T>, APIError, Record<any, any>>,
) {
  const {
    isLoading: updatingCompanyProfile,
    isError: isCompanyProfileUpdateError,
    error: companyProfileUpdateError,
    mutate: updateCompanyProfile,
  } = useMutation(async (variables: Record<any, any>) => {
    const url = `${API_URL}/company_profile_update`;
    const formData = new FormData();
    formData.append('business_name', variables.business_name);
    formData.append('business_address', variables.business_address);
    formData.append('business_email', variables.business_email);
    formData.append('country_of_origin', variables.country_of_origin);
    formData.append('port_of_origin', variables.port_of_origin);
    formData.append(
      'certificate_of_incoporation',
      variables.certificate_of_incoporation,
    );
    formData.append('memart', variables.memart);
    formData.append('acfta_certificate', variables.acfta_certificate);

    const headers = {
      accept: 'application/json',
      Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
    };

    const postOptions = {
      method: 'POST',
      headers: headers,
      body: formData,
    };

    return await postFormData(url, formData, postOptions);
  }, options);

  return {
    updateCompanyProfile,
    isCompanyProfileUpdateError,
    companyProfileUpdateError,
    updatingCompanyProfile,
  };
}

export default useCompanyProfileUpdate;
