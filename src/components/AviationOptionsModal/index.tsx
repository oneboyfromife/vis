import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import AppText from '@components/AppText';
import {Modal, Pressable, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Icon} from '@components/Icon';
import colors from '@theme/colors';
import {px} from '@helpers/responsiveness';
import {navigate} from '@helpers/navigation';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';
import {useTrips} from 'src/context/TripsContext';
import NewTicketModal from '@components/NewTicketModal';

export type AviationModalRef = {
  closeModal: () => void;
  openModal: () => void;
};

const AviationModal = forwardRef<AviationModalRef, {}>((props, ref) => {
  const snapPoints = useMemo(() => ['30%'], []);

  const {bottom} = useSafeAreaInsets();

  const sheetRef = useRef<BottomSheet | null>(null);

  const [isVisible, setIsVisible] = useState(false);

  const {bookingResponse, setBooking} = useTrips();

  useEffect(() => {
    if (bookingResponse) {
      navigate(NAVIGATION_ROUTES.AVIATION_FLOW, {
        jumpTo: NAVIGATION_ROUTES.MAKE_FLIGHT_PAYMENT,
      });
    }
  }, [bookingResponse]);

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
    <Modal visible={isVisible} transparent>
      <View style={[styles.modalContainer]}>
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          enableDynamicSizing
          enablePanDownToClose
          backdropComponent={renderBackdrop}
          onClose={() => {
            setIsVisible(false);
          }}
          {...props}>
          <BottomSheetView
            style={[
              styles.sheet,
              {
                paddingBottom: bottom + 10,
              },
            ]}>
            <View style={styles.sheetHeader}>
              <Pressable
                onPress={() => {
                  sheetRef?.current?.close();
                }}
                style={styles.closeButton}>
                <Icon name="x" weight="bold" />
              </Pressable>
              <AppText style={styles.sheetHeaderTitle}>Aviation Sector</AppText>
              <View style={styles.closeButton} />
            </View>
            <View style={styles.optionsList}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setBooking(true)}
                style={styles.option}>
                <View
                  style={[
                    styles.optionIcon,
                    {
                      backgroundColor: colors.GREEN_01,
                    },
                  ]}>
                  <Icon name="plus" weight="bold" />
                </View>
                <View>
                  <AppText style={styles.optionTitle}>New Flight</AppText>
                  <AppText
                    style={{
                      fontSize: px(16),
                    }}>
                    Book upcoming flights
                  </AppText>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  navigate(NAVIGATION_ROUTES.AVIATION_FLOW, {
                    jumpTo: NAVIGATION_ROUTES.SWAP_TICKETS,
                  });
                  sheetRef.current?.close();
                }}
                style={styles.option}>
                <View
                  style={[
                    styles.optionIcon,
                    {
                      backgroundColor: colors.ORANGE_01,
                    },
                  ]}>
                  <Icon name="arrows-left-right" color="white" weight="bold" />
                </View>
                <View>
                  <AppText style={styles.optionTitle}>Swap Tickets</AppText>
                  <AppText
                    style={{
                      fontSize: px(16),
                    }}>
                    Change existing tickets
                  </AppText>
                </View>
              </TouchableOpacity>
            </View>
          </BottomSheetView>
        </BottomSheet>
      </View>
      <NewTicketModal
        onDone={() => {
          navigate(NAVIGATION_ROUTES.AVIATION_FLOW, {
            jumpTo: NAVIGATION_ROUTES.FLIGHT_DETAILS,
          });
          sheetRef.current?.close();
        }}
      />
    </Modal>
  );
});

export default AviationModal;
