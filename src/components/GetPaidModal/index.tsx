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
import AppText from '@components/AppText';
import {Modal, Pressable} from 'react-native';
import {View} from 'react-native';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Icon} from '@components/Icon';
import ButtonPrimary from '@components/Buttons/buttonPrimary';
import FastImage from 'react-native-fast-image';
import {ModalRef} from 'types/components';

const GetPaidModal = forwardRef<ModalRef, {handleSecondaryButton: () => void}>(
  ({handleSecondaryButton, ...props}, ref) => {
    const snapPoints = useMemo(() => ['62.5%'], []);

    const {bottom} = useSafeAreaInsets();

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

    return (
      <>
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
                    paddingBottom: bottom + 10,
                  },
                ]}>
                <View style={styles.sheetHeader}>
                  <View style={styles.flexContainer}>
                    <Pressable
                      onPress={() => {
                        sheetRef?.current?.close();
                      }}
                      style={styles.closeButton}>
                      <Icon name="x" weight="bold" />
                    </Pressable>
                  </View>
                  <AppText style={styles.sheetHeaderTitle}>Get Paid</AppText>
                  <View style={[styles.flexContainer]} />
                </View>
                <View style={styles.optionsList}>
                  <View>
                    <FastImage
                      style={styles.qrImage}
                      source={require('@assets/images/QRCODE.png')}
                    />
                  </View>
                </View>
                <ButtonPrimary
                  onPress={() => {
                    handleSecondaryButton();
                  }}
                  title="Scan QR Code"
                />
              </View>
            </BottomSheet>
          </View>
        </Modal>
      </>
    );
  },
);

export default GetPaidModal;
