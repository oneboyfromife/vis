import {APIError, APIResponse, API_URL, get} from '@api/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {QueryObserverOptions, useQuery} from 'react-query';
import {Bank, BeneficiaryEnquiryData} from 'types/index';

function useBeneficiaryEnquiry(
  beneficiary: {
    accountNumber: string;
    bank: Bank;
  },
  options?: QueryObserverOptions<APIResponse<BeneficiaryEnquiryData>, APIError>,
) {
  const {
    isLoading: fetchingBeneficiary,
    isError: isEnquiryError,
    data: beneficiaryEnquiryData,
    refetch: checkBeneficiary,
    error: enquiryError,
  } = useQuery<APIResponse<BeneficiaryEnquiryData>, APIError>(
    `check-${beneficiary.accountNumber}-${beneficiary.bank.bank_code}`,
    async () =>
      get(
        API_URL +
          `/beneficial_enquiry?account_no=${beneficiary.accountNumber}&bank_code=${beneficiary.bank.bank_code}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
          },
        },
      ),
    {
      enabled: false,
      retry: false,
      ...options,
    },
  );

  return {
    fetchingBeneficiary,
    enquiryError,
    isEnquiryError,
    checkBeneficiary,
    beneficiaryEnquiryData,
  };
}

export default useBeneficiaryEnquiry;
