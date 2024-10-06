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
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {ModalRef} from 'types/components';
import {Modal} from 'react-native';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import AppText from '@components/AppText';
import {px} from '@helpers/responsiveness';
import {TouchableOpacity} from 'react-native';
import {Icon} from '@components/Icon';
import ButtonPrimary from '@components/Buttons/buttonPrimary';
import colors from '@theme/colors';
import CircularProgress from 'react-native-circular-progress-indicator';

const CompleteSetupModal = forwardRef<ModalRef, {}>((props, ref) => {
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
          <BottomSheetView
            style={[
              styles.sheet,
              {
                paddingBottom: bottom,
                gap: 15,
              },
            ]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <TouchableOpacity
                onPress={() => {
                  sheetRef?.current?.close();
                }}
                style={styles.closeButton}>
                <Icon name="x" weight="bold" />
              </TouchableOpacity>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <CircularProgress
                value={2}
                radius={40}
                duration={2000}
                valueSuffix="/5"
                maxValue={5}
                progressValueColor={colors.ORANGE_01}
                activeStrokeColor={colors.ORANGE_01}
                inActiveStrokeColor={colors.ORANGE_01}
                inActiveStrokeOpacity={0.1}
                progressValueStyle={{
                  fontWeight: '400',
                }}
              />
            </View>
            <View
              style={{
                gap: 5,
              }}>
              <AppText
                style={{
                  fontWeight: '600',
                  fontSize: px(22),
                  textAlign: 'center',
                }}>
                Complete account setup
              </AppText>
              <AppText
                style={{
                  textAlign: 'center',
                  fontWeight: '600',
                }}>
                2 of 5 complete
              </AppText>
            </View>
            <AppText
              style={{
                textAlign: 'center',
                opacity: 0.8,
                fontSize: px(16),
              }}>
              Make it easier to pay, get paid, and shop with your account
            </AppText>
            <View
              style={{
                flex: 1,
                gap: 15,
              }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                  backgroundColor: '#FFFCF5',
                  padding: 15,
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    flex: 1,
                    gap: 4,
                  }}>
                  <AppText>Confirm phone number</AppText>
                  <AppText
                    style={{
                      fontSize: px(16),
                      opacity: 0.8,
                    }}>
                    Keep your account more secure
                  </AppText>
                </View>
                <Icon
                  name="check-circle"
                  weight="fill"
                  color={colors.GREEN_04}
                  size={28}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                  backgroundColor: '#FFFCF5',
                  padding: 15,
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    flex: 1,
                    gap: 4,
                  }}>
                  <AppText>Email Confirmed</AppText>
                  <AppText
                    style={{
                      fontSize: px(16),
                      opacity: 0.8,
                    }}>
                    Keep your account more secure
                  </AppText>
                </View>
                <Icon
                  name="check-circle"
                  weight="fill"
                  color={colors.GREEN_04}
                  size={28}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                  padding: 15,
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    flex: 1,
                    gap: 4,
                  }}>
                  <AppText>Verify your BVN</AppText>
                  <AppText
                    style={{
                      fontSize: px(16),
                      opacity: 0.8,
                    }}>
                    Keep your account more secure
                  </AppText>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                  padding: 15,
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    flex: 1,
                    gap: 4,
                  }}>
                  <AppText>Add Profile Picture</AppText>
                  <AppText
                    style={{
                      fontSize: px(16),
                      opacity: 0.8,
                    }}>
                    Keep your account more secure
                  </AppText>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                  padding: 15,
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    flex: 1,
                    gap: 4,
                  }}>
                  <AppText>Link your cards</AppText>
                  <AppText
                    style={{
                      fontSize: px(16),
                      opacity: 0.8,
                    }}>
                    Keep your account more secure
                  </AppText>
                </View>
              </TouchableOpacity>
            </View>
            <ButtonPrimary title="Complete" />
          </BottomSheetView>
        </BottomSheet>
      </View>
    </Modal>
  );
});
export default CompleteSetupModal;
