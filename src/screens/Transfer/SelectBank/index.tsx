import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Image, Pressable, View} from 'react-native';
import styles from './styles';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AppScreen from '@components/AppScreen';
import AppText from '@components/AppText';
import ButtonPrimary from '@components/Buttons/buttonPrimary';
import {navigate} from '@helpers/navigation';
import TextInput from '@components/TextInput';
import BackButton from '@components/BackButton';
import BankListModal, {BankListModalRef} from '@components/BankListModal';
import {Formik} from 'formik';
import {useSendContext} from 'src/context/SendContext';
import {Bank as TBank, BeneficiaryEnquiryData} from 'types/index';
import useBeneficiaryEnquiry from '@hooks/useBeneficiaryEnquiry';
import * as yup from 'yup';
import {Icon} from '@components/Icon';

const SCHEMA = yup.object().shape({
  bank: yup.object().required("Please kindly select recipient's bank"),
  accountNumber: yup
    .string()
    .trim()
    .min(10, 'Invalid Account Number')
    .required("Please kindly enter recipient's account number"),
});

const SelectBank = () => {
  const {top, bottom} = useSafeAreaInsets();

  const {setTransfer, transfer} = useSendContext();

  const modalRef = useRef<BankListModalRef | null>(null);

  const [beneficiary, setBeneficiary] = useState<{
    accountNumber: string;
    bank: TBank;
  } | null>(null);

  const [foundUser, setFoundUser] = useState<BeneficiaryEnquiryData | null>(
    null,
  );

  const {checkBeneficiary, fetchingBeneficiary, isEnquiryError, enquiryError} =
    useBeneficiaryEnquiry(
      beneficiary || {
        accountNumber: '',
        bank: {
          bank_code: '',
          bank_name: '',
          display_img: '',
        },
      },
      {
        onSuccess(data) {
          if (data.data) {
            setFoundUser(data.data);
          }
        },
      },
    );

  useEffect(() => {
    if (beneficiary) {
      checkBeneficiary();
    }
  }, [beneficiary, checkBeneficiary]);

  const handleSend = useCallback(() => {
    if (foundUser && beneficiary) {
      setTransfer({
        accountNumber: beneficiary.accountNumber,
        bank: {
          ...beneficiary.bank,
        },
        transferType: 'inter',
        recipientName: foundUser.full_name,
      });
      navigate(NAVIGATION_ROUTES.AMOUNT);
    }
  }, [foundUser, beneficiary, setTransfer]);

  return (
    <Formik
      initialValues={{
        bank: transfer?.bank,
        accountNumber: transfer?.accountNumber || '',
      }}
      validationSchema={SCHEMA}
      onSubmit={({accountNumber, bank}) => {
        setBeneficiary({
          accountNumber,
          bank: {
            bank_code: bank?.bank_code || '',
            bank_name: bank?.bank_name || '',
            display_img: bank?.display_img || '',
          },
        });
      }}>
      {({
        values,
        handleSubmit,
        isValid,
        setFieldValue,
        errors,
        touched,
        handleBlur,
        handleChange,
      }) => {
        return (
          <>
            <AppScreen
              contentContainerStyle={[
                styles.container,
                {
                  paddingTop: top,
                  paddingBottom: bottom,
                },
              ]}>
              <View style={styles.header}>
                <BackButton />
                <AppText style={styles.headerTitle}>Select Bank</AppText>
                <View style={styles.right} />
              </View>
              <View style={styles.formContainer}>
                <AppText style={styles.writeUp}>
                  Please fill in the following details to make transfer to other
                  banks
                </AppText>
                <View style={styles.inputs}>
                  <Pressable
                    onPress={() => modalRef.current?.open()}
                    style={styles.bankInput}>
                    {values.bank ? (
                      <View style={styles.bank}>
                        <Image
                          style={styles.bankLogo}
                          source={{
                            uri: values.bank.display_img,
                          }}
                        />
                        <AppText>{values.bank.bank_name}</AppText>
                      </View>
                    ) : (
                      <AppText>Select Bank</AppText>
                    )}
                    <Icon name="caret-down" />
                  </Pressable>
                  <TextInput
                    value={values.accountNumber}
                    onBlur={handleBlur('accountNumber')}
                    onChangeText={handleChange('accountNumber')}
                    placeholder="Enter Account Number"
                    error={
                      touched.accountNumber ? errors.accountNumber : undefined
                    }
                  />
                </View>
                {foundUser && (
                  <View style={styles.card}>
                    <View style={styles.cardIcon}>
                      <Icon name="user" />
                    </View>
                    <View style={styles.cardContent}>
                      <AppText style={styles.title}>
                        {foundUser.full_name}
                      </AppText>
                      <AppText style={styles.subTitle}>Bank Account</AppText>
                    </View>
                  </View>
                )}
                <View>
                  {isEnquiryError && (
                    <AppText style={styles.errorText}>
                      {enquiryError?.message}
                    </AppText>
                  )}
                </View>
                <ButtonPrimary
                  disabled={!isValid || fetchingBeneficiary}
                  onPress={() => (foundUser ? handleSend() : handleSubmit())}
                  title={
                    foundUser
                      ? 'Proceed to Send'
                      : fetchingBeneficiary
                      ? 'Checking.....'
                      : 'Confirm'
                  }
                />
              </View>
            </AppScreen>
            <BankListModal
              ref={modalRef}
              selected={values.bank?.bank_code}
              onSelect={bank => {
                setFieldValue('bank', bank);
              }}
            />
          </>
        );
      }}
    </Formik>
  );
};

export default SelectBank;
