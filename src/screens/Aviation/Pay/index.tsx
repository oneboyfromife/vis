import React, {useMemo, useState} from 'react';
import {Keyboard, Modal, Pressable, View} from 'react-native';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AppScreen from '@components/AppScreen';
import AppText from '@components/AppText';
import ButtonPrimary from '@components/Buttons/buttonPrimary';
import TextInput from '@components/TextInput';
import BackButton from '@components/BackButton';
import {Formik} from 'formik';
import * as yup from 'yup';
import CheckBox from '@components/CheckBox';
import {px} from '@helpers/responsiveness';
import {Icon} from '@components/Icon';
import PinInput from '@components/PinInput';
import {WIDTH} from '@constants/screen';
import FastImage from 'react-native-fast-image';
import moment from 'moment';
import colors from '@theme/colors';

const SCHEMA = yup.object().shape({});

const Pay = () => {
  const {top, bottom} = useSafeAreaInsets();

  const [confirming, setConfirming] = useState(false);

  const [pin, setPin] = useState('');

  const isValidPin = useMemo(() => {
    return (
      pin.length === 4 &&
      pin.split('').every(v => v !== '' && !isNaN(Number(v)))
    );
  }, [pin]);

  return (
    <>
      <Formik
        validationSchema={SCHEMA}
        initialValues={{}}
        onSubmit={() => {
          setConfirming(true);
        }}>
        {({handleSubmit}) => {
          return (
            <AppScreen
              contentContainerStyle={[
                styles.container,
                {
                  paddingBottom: bottom,
                },
              ]}
              header={
                <View style={[styles.header, {paddingTop: top}]}>
                  <BackButton />
                  <AppText style={styles.headerTitle}>Repayment Plan</AppText>
                  <View style={styles.right} />
                </View>
              }>
              <View style={[styles.formContainer]}>
                <AppText style={styles.writeUp}>
                  Select a repayment plan before you proceed
                </AppText>
                <View style={[styles.inputs]}>
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      gap: 2,
                    }}>
                    <AppText
                      style={{
                        fontSize: px(14),
                      }}>
                      Total Price
                    </AppText>
                    <AppText
                      style={{
                        fontSize: px(28),
                        fontWeight: '600',
                      }}>
                      NGN 50,600
                    </AppText>
                  </View>
                  <TextInput placeholder="Repayment Plan" />
                  <AppText
                    style={[
                      styles.orangeText,
                      {
                        fontWeight: '500',
                      },
                    ]}>
                    Next due payment is NGN 570 on 02-11-2023
                  </AppText>
                </View>
                <View style={styles.termsContainer}>
                  <CheckBox />
                  <AppText style={styles.terms}>
                    By clicking ‘Continue’ , you agree to
                    <AppText style={styles.orangeText}>
                      Terms and Condition
                    </AppText>{' '}
                    &{' '}
                    <AppText style={styles.orangeText}>Privacy Policy</AppText>
                  </AppText>
                </View>
                <View style={styles.termsContainer}>
                  <CheckBox />
                  <AppText style={styles.terms}>
                    Enable auto debit from your card.
                  </AppText>
                </View>
                <ButtonPrimary
                  // disabled={!isValid || !dirty}
                  onPress={() => handleSubmit()}
                  title="Continue"
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
                Enter your pin to confirm
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
                <View
                  style={{
                    gap: 5,
                    alignItems: 'center',
                  }}>
                  <AppText
                    style={{
                      fontWeight: '600',
                    }}>
                    {moment().format('LT')}
                  </AppText>
                  <AppText>LAG</AppText>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    gap: 10,
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      borderTopWidth: 1,
                      borderColor: colors.GREY_04,
                      flex: 1,
                      height: 0,
                    }}
                  />
                  <FastImage
                    source={{
                      uri: 'https://nigerialogos.com/logos/aero_contractors/aero_contractors.png',
                    }}
                    style={{
                      width: 40,
                      aspectRatio: 1,
                    }}
                  />
                  <View
                    style={{
                      borderTopWidth: 1,
                      borderColor: colors.GREY_04,
                      flex: 1,
                      height: 0,
                    }}
                  />
                </View>
                <View
                  style={{
                    gap: 5,
                    alignItems: 'center',
                  }}>
                  <AppText
                    style={{
                      fontWeight: '600',
                    }}>
                    {moment().format('LT')}
                  </AppText>
                  <AppText>ABJ</AppText>
                </View>
              </View>
              <AppText style={styles.confirmText}>
                You're about to book a flight ticket from{' '}
                <AppText style={styles.confirmTextBold}>LAG (MMIA)</AppText> to{' '}
                <AppText style={styles.confirmTextBold}>ABJ (NAIA)</AppText>
              </AppText>
              <PinInput onChangeText={value => setPin(value)} />

              <ButtonPrimary
                disabled={!isValidPin}
                onPress={() => {
                  setConfirming(false);
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

export default Pay;
