import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Image, Keyboard, Modal, Pressable, View} from 'react-native';
import styles from './styles';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';
import BackButton from '@components/BackButton';
import AppScreen from '@components/AppScreen';
import {navigate, navigationRef} from '@helpers/navigation';
import TextInput from '@components/TextInput';
import ButtonPrimary from '@components/Buttons/buttonPrimary';
import AppText from '@components/AppText';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSendContext} from 'src/context/SendContext';
import * as yup from 'yup';
import {Formik} from 'formik';
import useBalanceEnquiry from '@hooks/useBalanceEnquiry';
import {Icon} from '@components/Icon';
import PinInput from '@components/PinInput';
import {WIDTH} from '@constants/screen';
import SuccessCheck from '@assets/svgs/successCheck';
import ButtonSecondary from '@components/Buttons/buttonSecondary';
import {StackActions} from '@react-navigation/native';
import {formatAsMoney} from '@helpers/numbers';

const schemaClamp = (max: number) => {
  return yup.object().shape({
    amount: yup
      .number()
      .min(50, "You can't send lower than ₦50")
      .max(max, 'Insufficient Balance'),
    naration: yup.string().required('Naration is required'),
  });
};

const Amount = () => {
  const {top, bottom} = useSafeAreaInsets();
  const [confirming, setConfirming] = useState(false);

  const {
    setTransfer,
    transfer,
    transferError,
    transfering,
    isTransferError,
    transferData,
    makeTransfer,
  } = useSendContext();

  const isVisaroTransfer = useMemo(
    () => transfer?.transferType === 'intra',
    [transfer],
  );

  const authorize = useCallback(() => {
    makeTransfer();
  }, [makeTransfer]);

  const [pin, setPin] = useState('');

  useEffect(() => {
    setTransfer(prev => ({
      ...prev,
      transactionPin: pin,
    }));
  }, [setTransfer, pin]);

  const isValidPin = useMemo(() => {
    return (
      pin.length === 4 &&
      pin.split('').every(v => v !== '' && !isNaN(Number(v)))
    );
  }, [pin]);

  const {balanceEnquiryData, enquiryError, isEnquiryError, fetchingBalance} =
    useBalanceEnquiry();

  return (
    <>
      {transferData?.data && (
        <View
          style={[
            styles.successContainer,
            {
              paddingBottom: bottom + 70,
              paddingTop: top,
            },
          ]}>
          <View style={styles.successContent}>
            <SuccessCheck
              style={{
                transform: [
                  {
                    scale: 1.5,
                  },
                ],
              }}
            />
            <View>
              <AppText style={styles.successText}>
                Transaction Successful
              </AppText>
              <AppText style={styles.successWriteUp}>
                You have successfully sent NGN {transfer?.amount} to{' '}
                {transfer?.recipientName}
              </AppText>
            </View>
          </View>
          <View style={styles.successOptions}>
            <ButtonSecondary
              style={styles.successOption}
              onPress={() => navigate(NAVIGATION_ROUTES.APP)}
              title="Share Receipt"
            />
            <ButtonPrimary
              style={styles.successOption}
              onPress={() =>
                navigationRef.dispatch(
                  StackActions.replace(NAVIGATION_ROUTES.APP),
                )
              }
              title="Back to Home"
            />
          </View>
        </View>
      )}
      <Formik
        validationSchema={schemaClamp(
          parseFloat(balanceEnquiryData?.data?.wallet.visaro_balance || '0'),
        )}
        validateOnChange
        initialValues={{
          amount: parseFloat(transfer?.amount || '0') || 0,
          naration: '',
        }}
        onSubmit={({amount, naration}) => {
          setTransfer(prev => ({
            ...prev,
            amount: amount.toString(),
            naration: naration,
          }));
          setConfirming(true);
        }}>
        {({
          isValid,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          touched,
          errors,
        }) => {
          return (
            <AppScreen
              loading={transfering}
              contentContainerStyle={[
                styles.container,
                {
                  paddingTop: top,
                  paddingBottom: bottom,
                },
              ]}>
              <View style={styles.header}>
                <BackButton />
                <AppText style={styles.headerTitle}>Amount</AppText>
                <View style={styles.right} />
              </View>
              <View style={styles.formContainer}>
                <AppText>You're transfering to:</AppText>

                {isVisaroTransfer ? (
                  <View style={styles.card}>
                    <View style={styles.cardIcon}>
                      <Icon name="user" />
                    </View>
                    <View style={styles.cardContent}>
                      <AppText style={styles.title}>
                        {transfer?.recipientName}
                      </AppText>
                      <AppText style={styles.subTitle}>Visaro User</AppText>
                    </View>
                  </View>
                ) : (
                  <View>
                    <View style={styles.card}>
                      <Image
                        source={{uri: transfer?.bank?.display_img || ''}}
                        resizeMode="cover"
                        style={styles.bankLogo}
                      />
                      <View style={styles.cardContent}>
                        <AppText style={styles.title}>
                          {transfer?.recipientName || 'Unknown'} (
                          {transfer?.accountNumber || 'No Account Number'})
                        </AppText>
                        <AppText style={styles.subTitle}>
                          Bank Account -{' '}
                          {transfer?.bank?.bank_name || 'Unknown Bank'}{' '}
                        </AppText>
                      </View>
                    </View>
                  </View>
                )}
                <View style={styles.inputs}>
                  <View>
                    <AppText>
                      Available Balance:{' '}
                      {fetchingBalance
                        ? 'Loading balance...'
                        : isEnquiryError
                        ? enquiryError?.message
                        : `₦ ${formatAsMoney(
                            balanceEnquiryData?.data?.wallet.visaro_balance ||
                              0,
                          )}`}
                    </AppText>
                  </View>
                  <TextInput
                    onBlur={handleBlur('amount')}
                    onChangeText={handleChange('amount')}
                    value={values.amount !== 0 ? values.amount.toString() : ''}
                    inputMode="numeric"
                    placeholder="Amount"
                    error={touched.amount ? errors.amount : undefined}
                  />
                  <TextInput
                    onBlur={handleBlur('naration')}
                    onChangeText={handleChange('naration')}
                    value={values.naration}
                    placeholder="Naration"
                    error={touched.naration ? errors.naration : undefined}
                  />
                </View>
                <View>
                  {isTransferError && (
                    <AppText style={styles.errorText}>
                      {transferError?.message}
                    </AppText>
                  )}
                </View>
                <ButtonPrimary
                  disabled={!isValid}
                  title="Confirm"
                  onPress={() => handleSubmit()}
                />
              </View>
            </AppScreen>
          );
        }}
      </Formik>
      <Modal
        animationType="slide"
        presentationStyle="formSheet"
        visible={confirming}
        style={{
          width: WIDTH,
        }}>
        <View style={styles.modelContainer}>
          <View style={styles.modalHeader}>
            <View style={styles.modalHeadingWriteContainer}>
              <AppText style={styles.modalWriteUpHeading}>Confirm</AppText>
              <AppText style={styles.modalWriteUp}>
                You're about to send NGN {transfer?.amount} to{' '}
                {transfer?.recipientName}
              </AppText>
            </View>
            <Pressable
              onPress={() => {
                setConfirming(false);
                Keyboard.dismiss();
              }}
              style={styles.closeButton}>
              <Icon name="x" weight="bold" />
            </Pressable>
          </View>
          <View>
            <View style={styles.confirmContainer}>
              {/* <View
					style={{
						backgroundColor: colors.GREY_01,
						height: heightPercentageToDP(10),
						borderRadius: 8,
						aspectRatio: 1,
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<BankSvg />
				</View> */}
              <View style={styles.card}>
                <View style={styles.cardIcon}>
                  <Icon name="user" />
                </View>
                <View style={styles.cardContent}>
                  <AppText style={styles.title}>
                    {transfer?.recipientName}
                  </AppText>
                  <AppText style={styles.subTitle}>Visaro User</AppText>
                </View>
              </View>
              <AppText style={styles.confirmText}>
                You are about to send{' '}
                <AppText style={styles.confirmTextBold}>
                  NGN {transfer?.amount}
                </AppText>{' '}
                to{' '}
                <AppText style={styles.confirmTextBold}>
                  {transfer?.recipientName}
                </AppText>{' '}
              </AppText>
              <PinInput onChangeText={value => setPin(value)} />

              <ButtonPrimary
                disabled={!isValidPin}
                onPress={() => {
                  setConfirming(false);
                  authorize();
                }}
                title="Confirm"
              />
              <Pressable
                onPress={() => {
                  setConfirming(false);
                  Keyboard.dismiss();
                }}>
                <AppText>Cancel</AppText>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Amount;
