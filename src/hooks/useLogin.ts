import {APIError, APIResponse, API_URL, post} from '@api/index';
import {MutationOptions, useMutation} from 'react-query';
import {User} from 'types/index';

function useLogin<T = {token: string; user: User}>(
  options?: MutationOptions<APIResponse<T>, APIError, Record<any, any>>,
) {
  const {isLoading, isError, mutate, error} = useMutation<
    APIResponse<T>,
    APIError,
    Record<any, any>
  >((variables: Record<any, any>) => {
    return post(API_URL + '/auth/user/login', variables);
  }, options);

  return {
    login: mutate,
    isError,
    error,
    isLoading,
  };
}

export default useLogin;
