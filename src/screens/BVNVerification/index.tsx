import AppScreen from '@components/AppScreen';
import BackButton from '@components/BackButton';
import React, {useMemo, useState} from 'react';
import {Modal, Pressable, View} from 'react-native';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AppLogo from '@assets/svgs/visaroLogo';
import AppText from '@components/AppText';
import TextInput from '@components/TextInput';
import ButtonPrimary from '@components/Buttons/buttonPrimary';
import ProfileProgress from '@components/ProfileProgress';
import {personalProfileData} from '@constants/content';
import useVerifyBVN from '@hooks/useVerifyBVN';
import * as yup from 'yup';
import useInitializeBVNTransaction from '@hooks/useInitiateBVNTransaction';
import {Formik} from 'formik';
import {navigate} from '@helpers/navigation';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';
import WebView from 'react-native-webview';
import Spinner from '@components/AppLoader/spiner';
import {Icon} from '@components/Icon';
import {HEIGHT, WIDTH} from '@constants/screen';
import {URLSearchParams} from 'react-native-url-polyfill';

const schema = yup.object().shape({
  bvn: yup.string().required('BVN is required').length(11, 'Must be 11 Digits'),
});

export default () => {
  const {top, bottom} = useSafeAreaInsets();

  const [trxRef, setTrxRef] = useState<string | null>(null);
  const [authorization_url, setAuthorizationUrl] = useState('');

  const {
    initiateTransaction,
    initiatingTransaction,
    isTransactionError,
    transactionError,
  } = useInitializeBVNTransaction();

  const {isVerifyingBVNError, verifyBvn, verifyingBVN, verifyingBVNError} =
    useVerifyBVN();

  const isLoading = useMemo(
    () => initiatingTransaction || verifyingBVN,
    [initiatingTransaction, verifyingBVN],
  );

  const isError = useMemo(
    () => isTransactionError || isVerifyingBVNError,
    [isTransactionError, isVerifyingBVNError],
  );

  const error = useMemo(
    () => transactionError || verifyingBVNError,
    [transactionError, verifyingBVNError],
  );

  return (
    <>
      <Formik
        initialValues={{
          bvn: '',
        }}
        validationSchema={schema}
        onSubmit={(values, {resetForm}) => {
          // if (trxRef) {
          //   verifyBvn(
          //     {
          //       bvn: values.bvn,
          //       payment_reference: trxRef,
          //     },
          //     {
          //       onSuccess(data) {
          //         navigate(NAVIGATION_ROUTES.COMPLETE_PERSONAL_PROFILE, {
          //           bvnData: data.data,
          //         });
          //         resetForm();
          //       },
          //     },
          //   );
          // } else {
          //   initiateTransaction(
          //     {
          //       transaction_type: ETransactionTypes.BVN,
          //       amount: 1000,
          //       callback_url:
          //         'http://localhost:3000' +
          //         '/sign-up/personal/bvn-verification',
          //     },
          //     {
          //       onSuccess(data) {
          //         if (data.data?.authorization_url) {
          //           //   window.location.href =
          //           //     data?.data?.authorization_url || "";
          //           setAuthorizationUrl(data?.data?.authorization_url || '');
          //         }
          //       },
          //     },
          //   );
          // }
          navigate(NAVIGATION_ROUTES.COMPLETE_PERSONAL_PROFILE, {
            bvnData: {
              first_name: 'Ope',
              last_name: 'Abidemi',
              address: 'Good Road Str',
              phone_1: '+2249022449670',
            },
          });
        }}>
        {({
          handleSubmit,
          isValid,
          dirty,
          handleBlur,
          handleChange,
          values,
          touched,
          errors,
        }) => {
          return (
            <AppScreen
              loading={isLoading}
              contentContainerStyle={[
                styles.container,
                {
                  paddingTop: top,
                  paddingBottom: bottom,
                },
              ]}>
              <View style={styles.logoContainer}>
                <BackButton />
                <AppLogo />
                <View style={styles.rightHeaderItem} />
              </View>
              <ProfileProgress data={personalProfileData} activeIndex={0} />
              <View style={styles.writeUpContainer}>
                <AppText style={styles.writeUpHeading}>
                  Complete Profile
                </AppText>
                <AppText style={styles.writeUp}>
                  Kindly provide us with your Bank Verification Number to
                  continue this process.
                </AppText>
              </View>
              <View style={styles.formContainer}>
                <View />
                <TextInput
                  value={values.bvn}
                  onChangeText={handleChange('bvn')}
                  onBlur={handleBlur('bvn')}
                  placeholder="Enter BVN"
                  inputMode="numeric"
                  error={touched.bvn ? errors.bvn : undefined}
                />
                {isError && (
                  <AppText style={styles.errorText}>{error?.message}</AppText>
                )}
                <View />
                <ButtonPrimary
                  disabled={!isValid || !dirty}
                  title={trxRef ? 'Next' : 'Pay'}
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
        visible={authorization_url?.length > 0}
        style={{
          width: WIDTH,
          height: HEIGHT * 0.4,
        }}>
        <View style={styles.modelContainer}>
          <View style={styles.modalHeader}>
            <View style={styles.modalHeadingWriteContainer}>
              <AppText style={styles.modalWriteUpHeading}>
                Verify Your BVN
              </AppText>
              <AppText style={styles.modalWriteUp}>
                Verifying your BVN requires you to pay a sum of NGN 100
              </AppText>
            </View>
            <Pressable
              onPress={() => setAuthorizationUrl('')}
              style={styles.closeButton}>
              <Icon name="x" weight="bold" />
            </Pressable>
          </View>
          <WebView
            onNavigationStateChange={navState => {
              // Check if the navigation state indicates a redirect
              if (navState.url !== authorization_url) {
                // You are now on the redirected page. You can access the URL or other data here.
                const redirectedUrl = navState.url;

                const search = new URL(redirectedUrl);

                const params = new URLSearchParams(search.search);

                setTrxRef(params.get('trxref'));

                setAuthorizationUrl('');

                // You can use the fetch API or other methods to retrieve data from the redirected URL.
                // For example:
              }
            }}
            style={[
              styles.webViewContainer,
              {
                height: HEIGHT * 0.4,
              },
            ]}
            source={{uri: authorization_url}}
            startInLoadingState123456789
            renderLoading={() => (
              <View style={styles.loader}>
                <Spinner />
              </View>
            )}
          />
        </View>
      </Modal>
    </>
  );
};
