import React, {useEffect} from 'react';
import AppText from '@components/AppText';
import {View} from 'react-native';
import styles from './styles';
import {Icon} from '@components/Icon';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import ButtonPrimary from '@components/Buttons/buttonPrimary';
import {navigate} from '@helpers/navigation';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';
import {useBottomSheet} from '@gorhom/bottom-sheet';
import {NativeViewGestureHandler} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';

const ScanQR = () => {
  const device = useCameraDevice('back');

  const {hasPermission, requestPermission} = useCameraPermission();

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      console.log(`Scanned ${codes.length} codes!`);
    },
  });

  const bottomSheet = useBottomSheet();

  return (
    <NativeViewGestureHandler disallowInterruption={true}>
      <View style={styles.container}>
        <View style={styles.sheetHeader}>
          <View style={styles.flexContainer}>
            <TouchableOpacity
              onPress={() => {
                bottomSheet?.close();
              }}
              style={styles.closeButton}>
              <Icon name="x" weight="bold" />
            </TouchableOpacity>
          </View>
          <AppText style={styles.sheetHeaderTitle}>Scan QR</AppText>
          <View style={[styles.flexContainer]} />
        </View>
        <View style={styles.semiContainer}>
          <View style={styles.scanner}>
            {device && (
              <Camera device={device} isActive codeScanner={codeScanner} />
            )}
          </View>
          <ButtonPrimary
            title="Proceed to Pay"
            onPress={() => {
              bottomSheet?.close();
              navigate(NAVIGATION_ROUTES.CONFIRM_PAYMENT_DETAILS);
            }}
          />
        </View>
      </View>
    </NativeViewGestureHandler>
  );
};

export default ScanQR;
