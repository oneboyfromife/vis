import {APIError, APIResponse, API_URL, get} from '@api/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {QueryObserverOptions, useQuery} from 'react-query';
import {DashboardData} from 'types/index';

function useDashboard(
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
      await get(API_URL + '/dashboard', {
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

export default useDashboard;
