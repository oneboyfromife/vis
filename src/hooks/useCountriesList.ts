import {API_URL, get} from '@api/index';
import {useState} from 'react';
import {useQuery} from 'react-query';
import {APIResponse, Country} from 'types/index';

function useCountriesList() {
  const [countries, setCountries] = useState<Country[]>([]);

  const {isLoading, isError} = useQuery<APIResponse>(
    'countries',
    () => get(API_URL + '/country_list'),
    {
      onSuccess(data) {
        setCountries(data.data);
      },
    },
  );

  return {
    countries,
    isLoading,
    isError,
  };
}

export default useCountriesList;
