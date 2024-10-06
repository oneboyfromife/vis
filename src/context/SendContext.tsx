import React, {useCallback} from 'react';
import {APIError, APIResponse} from '@api/index';
import useBankTransfer from '@hooks/useBankTransfer';
import useVisaroTransfer from '@hooks/useVisaroTransfer';
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';
import {Bank, TransferData, TransferType} from 'types/index';
import {useQueryClient} from 'react-query';

export type Transfer = {
  bank?: Bank;
  recipientName?: string;
  accountNumber?: string;
  amount?: string;
  transactionPin?: string;
  transferType?: TransferType;
  naration?: string;
  username?: string;
};

interface SendContextProps {
  transfer: Transfer | null;
  setTransfer: React.Dispatch<React.SetStateAction<Transfer | null>>;
  makeTransfer: () => void;
  transfering: boolean;
  transferError: APIError | null;
  isTransferError: boolean;
  transferData: APIResponse<TransferData> | undefined;
}

const SendContext = createContext<SendContextProps | undefined>(undefined);

export function useSendContext() {
  const context = useContext(SendContext);
  if (!context) {
    throw new Error('useSendContext must be used within a SendProvider');
  }
  return context;
}

const SendContextProvider: FC<
  PropsWithChildren<{
    defaultContextValue?: Partial<Transfer>;
  }>
> = ({children, defaultContextValue}) => {
  const [transfer, setTransfer] = useState<Transfer | null>(
    defaultContextValue
      ? {
          ...defaultContextValue,
        }
      : null,
  );

  const {transfer: bankTransferMutation, ...bank} = useBankTransfer();

  const queryClient = useQueryClient();

  const {transfer: visaroTransferMutation, ...visaro} = useVisaroTransfer({
    onSettled() {
      queryClient.invalidateQueries(['balance-enquiry', 'dashboard']);
    },
  });

  const makeTransfer = useCallback(() => {
    if (
      transfer &&
      transfer?.transferType &&
      transfer.amount &&
      transfer.transactionPin
    ) {
      const commonProps = {
        amount: transfer?.amount,
        naration: transfer?.naration || '',
        transaction_pin: transfer?.transactionPin,
      };

      if (transfer.transferType === 'inter') {
        if (transfer.accountNumber && transfer.bank) {
          bankTransferMutation({
            ...commonProps,
            to_account_no: transfer?.accountNumber,
            to_bank_code: transfer.bank?.bank_code,
          });
        }
      } else if (transfer?.transferType === 'intra') {
        if (transfer?.username) {
          visaroTransferMutation({
            ...commonProps,
            username: transfer?.username!!,
          });
        }
      }
    }
  }, [bankTransferMutation, transfer, visaroTransferMutation]);

  const transferProcessDetails = useMemo(() => {
    if (transfer?.transferType === 'inter') {
      return bank;
    }

    return visaro;
  }, [transfer, visaro, bank]);

  return (
    <SendContext.Provider
      value={{
        makeTransfer,
        transfer,
        setTransfer,
        ...transferProcessDetails,
      }}>
      {children}
    </SendContext.Provider>
  );
};

export default SendContextProvider;
