import {APIError, APIResponse, API_URL, post} from '@api/index';
import {MutationOptions, useMutation} from 'react-query';

function useRegister<T>(
  options?: MutationOptions<APIResponse<T>, APIError, Record<any, any>>,
) {
  const {
    isLoading: registering,
    isError: isRegisterError,
    error: registerError,
    mutate: register,
  } = useMutation((variables: Record<any, any>) => {
    return post(API_URL + '/onboarding/users/onboarding/email', variables);
  }, options);

  return {
    register,
    isRegisterError,
    registerError,
    registering,
  };
}

export default useRegister;
