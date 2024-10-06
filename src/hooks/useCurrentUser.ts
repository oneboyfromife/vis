import {APIError, APIResponse, API_URL, get} from '@api/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {QueryObserverOptions, useQuery} from 'react-query';
import {DashboardData} from 'types/index';

function useCurrentUser(
  options?: QueryObserverOptions<APIResponse<DashboardData>, APIError>,
) {
  const {
    isLoading: fetchingDashboard,
    isError: isDashboardError,
    data: dashboardData,
    refetch: refreshDashboard,
  } = useQuery<APIResponse<DashboardData>, APIError>(
    'dashboard',
    async () =>
      await get(API_URL + '/account/user/account/profile', {
        byPassStatus: true,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
        },
      }),
    options,
  );

  return {
    fetchingDashboard,
    isDashboardError,
    dashboardData,
    refreshDashboard,
  };
}

export default useCurrentUser;
