import React, {useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AppScreen from '@components/AppScreen';
import AppText from '@components/AppText';
import ButtonPrimary from '@components/Buttons/buttonPrimary';
import {navigate} from '@helpers/navigation';
import TextInput from '@components/TextInput';
import BackButton from '@components/BackButton';
import {useSendContext} from 'src/context/SendContext';
import useUsernameEnquiry from '@hooks/useUsernameEnquiry';
import {UsernameEnquiryData} from 'types/index';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Icon} from '@components/Icon';

const SCHEMA = yup.object().shape({
  recipientTag: yup.string().email().required(),
});

const SearchUser = () => {
  const {top, bottom} = useSafeAreaInsets();

  const {setTransfer, transfer} = useSendContext();

  const [tag, setTag] = useState<string | null>(transfer?.username || null);

  const [foundUser, setFoundUser] = useState<UsernameEnquiryData | null>(null);

  const {checkUsername, isEnquiryError, enquiryError, fetchingUsername} =
    useUsernameEnquiry(tag || '', {
      onSuccess(data) {
        if (data.data) {
          setFoundUser(data.data);
        }
      },
    });

  useEffect(() => {
    if (tag && tag !== '') {
      checkUsername();
    }
  }, [tag, checkUsername]);

  const handleSend = useCallback(() => {
    if (foundUser && tag) {
      setTransfer({
        username: tag,
        transferType: 'intra',
        recipientName: foundUser.full_name,
      });
      navigate(NAVIGATION_ROUTES.AMOUNT);
    }
  }, [setTransfer, foundUser, tag]);

  return (
    <Formik
      validationSchema={SCHEMA}
      initialValues={{
        recipientTag: transfer?.username || '',
      }}
      onSubmit={values => {
        setTag(values.recipientTag);
      }}>
      {({isValid, handleSubmit, handleChange, handleBlur}) => {
        return (
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
              <AppText style={styles.headerTitle}>Transfer to Visaro</AppText>
              <View style={styles.right} />
            </View>
            <View style={styles.formContainer}>
              <AppText style={styles.writeUp}>
                Please fill in the following details to make transfer to other
                visaro users
              </AppText>
              <View style={styles.inputs}>
                <TextInput
                  onBlur={handleBlur('recipientTag')}
                  onChange={() => {
                    setTag(null);
                    setFoundUser(null);
                  }}
                  onChangeText={handleChange('recipientTag')}
                  placeholder="Enter visaro ID"
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
                    <AppText style={styles.subTitle}>Visaro User</AppText>
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
                disabled={!isValid || fetchingUsername}
                title={
                  foundUser
                    ? 'Proceed to Send'
                    : fetchingUsername
                    ? 'Checking.....'
                    : 'Confirm'
                }
                onPress={() => (foundUser ? handleSend() : handleSubmit())}
              />
            </View>
          </AppScreen>
        );
      }}
    </Formik>
  );
};

export default SearchUser;
