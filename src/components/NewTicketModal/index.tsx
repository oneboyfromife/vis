import Spinner from '@components/AppLoader/spiner';
import AppText from '@components/AppText';
import {Icon} from '@components/Icon';
import React, {FC} from 'react';
import {View} from 'react-native';
import {Modal, Pressable} from 'react-native';
import WebView from 'react-native-webview';
import styles from './styles';
import {BookingResponseData} from 'types/index';
import {useTrips} from 'src/context/TripsContext';

const NewTicketModal: FC<{
  onDone?: () => void;
}> = ({onDone}) => {
  const {bookingURL, booking, setBooking, setBookingResponse} = useTrips();
  return (
    <Modal
      animationType="slide"
      presentationStyle="formSheet"
      visible={booking}
      style={styles.modal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <View style={styles.modalHeadingWriteContainer}>
            <AppText style={styles.modalWriteUpHeading}>New Flight</AppText>
            <AppText style={styles.modalWriteUp}>Book upcoming flights</AppText>
          </View>
          <Pressable
            onPress={() => setBooking(false)}
            style={styles.closeButton}>
            <Icon name="x" weight="bold" />
          </Pressable>
        </View>
        <>
          {!bookingURL ? (
            <View style={styles.loader}>
              <Spinner />
            </View>
          ) : (
            <WebView
              injectedJavaScript={`
                var meta = document.createElement('meta');
                meta.setAttribute('name', 'viewport');
                meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
                document.getElementsByTagName('head')[0].appendChild(meta);
              `}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              useWebView2
              onMessage={message => {
                console.log(message.nativeEvent.data);
                setBookingResponse(
                  JSON.parse(message.nativeEvent.data) as BookingResponseData,
                );
                setBooking(false);
                onDone && onDone();
              }}
              style={[styles.webViewContainer]}
              source={{uri: bookingURL}}
              startInLoadingState123456789
              renderLoading={() => (
                <View style={styles.loader}>
                  <Spinner />
                </View>
              )}
            />
          )}
        </>
      </View>
    </Modal>
  );
};

export default NewTicketModal;
