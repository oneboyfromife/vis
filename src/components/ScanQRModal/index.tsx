import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import {Modal} from 'react-native';
import {View} from 'react-native';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ScanQR from '@screens/ScanQR';

export type ScanQRModalRef = {
  closeModal: () => void;
  openModal: () => void;
};

const ScanQRModal = forwardRef<ScanQRModalRef, {}>((props, ref) => {
  const snapPoints = useMemo(() => ['90%'], []);

  const sheetRef = useRef<BottomSheet | null>(null);

  const [isVisible, setIsVisible] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      closeModal: () => {
        setIsVisible(true);
      },
      openModal: () => {
        setIsVisible(true);
      },
    };
  });

  const renderBackdrop = useCallback(
    (_props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {..._props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    [],
  );

  const {bottom} = useSafeAreaInsets();

  return (
    <Modal visible={isVisible} transparent>
      <View style={[styles.modalContainer]}>
        <BottomSheet
          backdropComponent={renderBackdrop}
          ref={sheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose
          handleComponent={null}
          onClose={() => {
            setIsVisible(false);
          }}
          {...props}>
          <View
            style={[
              styles.sheet,
              {
                paddingBottom: bottom,
              },
            ]}>
            <ScanQR />
          </View>
        </BottomSheet>
      </View>
    </Modal>
  );
});

export default ScanQRModal;
