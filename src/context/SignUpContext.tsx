import React, {FC, PropsWithChildren, createContext, useState} from 'react';

export const SignUpContext = createContext<{
  accountType: 'personal' | 'business';
  businessType: 'sole' | 'corporation';
  setAccountType: React.Dispatch<React.SetStateAction<'personal' | 'business'>>;
  setBusinessType: React.Dispatch<React.SetStateAction<'sole' | 'corporation'>>;
}>({
  businessType: 'sole',
  accountType: 'personal',
  setAccountType: () => {
    // do nothing
  },
  setBusinessType: () => {
    // do nothing
  },
});

const SignUpContextProvider: FC<PropsWithChildren> = ({children}) => {
  const [accountType, setAccountType] = useState<'personal' | 'business'>(
    'personal',
  );

  const [businessType, setBusinessType] = useState<'sole' | 'corporation'>(
    'sole',
  );
  return (
    <SignUpContext.Provider
      value={{
        accountType,
        setAccountType,
        businessType,
        setBusinessType,
      }}>
      {children}
    </SignUpContext.Provider>
  );
};

export default SignUpContextProvider;
