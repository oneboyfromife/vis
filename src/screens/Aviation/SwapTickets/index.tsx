import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AppScreen from '@components/AppScreen';
import AppText from '@components/AppText';
import ButtonPrimary from '@components/Buttons/buttonPrimary';
import TextInput from '@components/TextInput';
import BackButton from '@components/BackButton';
import {Formik} from 'formik';
import * as yup from 'yup';
import {navigate} from '@helpers/navigation';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';

const SCHEMA = yup.object().shape({
  ticketID: yup.string().required(),
});

const SwapTickets = () => {
  const {top, bottom} = useSafeAreaInsets();

  return (
    <Formik
      validationSchema={SCHEMA}
      initialValues={{
        ticketID: '',
      }}
      onSubmit={() => {
        navigate(NAVIGATION_ROUTES.SWAP_TICKET_DETAILS);
      }}>
      {({
        isValid,
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
        dirty,
      }) => {
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
                <AppText style={styles.headerTitle}>Swap Tickets</AppText>
                <View style={styles.right} />
              </View>
            }>
            <View style={styles.formContainer}>
              <AppText style={styles.writeUp}>
                Please fill in the following details to continue with swaping
                your tickets
              </AppText>
              <View style={styles.inputs}>
                <TextInput
                  value={values.ticketID}
                  error={touched.ticketID ? errors.ticketID : undefined}
                  onBlur={handleBlur('ticketID')}
                  onChangeText={handleChange('ticketID')}
                  placeholder="Previous ticket ID"
                />
              </View>

              <ButtonPrimary
                disabled={!isValid || !dirty}
                onPress={() => handleSubmit()}
                title="Validate Ticket"
              />
            </View>
          </AppScreen>
        );
      }}
    </Formik>
  );
};

export default SwapTickets;
