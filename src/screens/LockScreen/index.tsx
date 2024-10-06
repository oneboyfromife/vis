/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useState} from 'react';
import {Modal, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import AppText from '@components/AppText';
import {px} from '@helpers/responsiveness';
import colors from '@theme/colors';
import VisaroLogoAvatar from '@assets/svgs/visaroLogoAvatar';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HEIGHT, WIDTH} from '@constants/screen';
import {Icon} from '@components/Icon';
import {StackActions} from '@react-navigation/native';
import {useAuth} from 'src/context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TouchID from 'react-native-touch-id';
import {navigationRef} from '@helpers/navigation';

const TEST_PIN = '123456';

const BUTTONS = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [
    <AppText
      style={{
        fontSize: px(20),
        fontWeight: '600',
      }}>
      <Icon name="user-focus" size={24} weight="bold" />
    </AppText>,
    0,
    <AppText
      style={{
        fontSize: px(20),
        fontWeight: '600',
      }}>
      <Icon name="arrow-u-up-left" weight="bold" />
    </AppText>,
  ],
];

const LockScreen = () => {
  const {bottom} = useSafeAreaInsets();

  const [biometryType, setBiometryType] = useState<string | null>(null);

  useEffect(() => {
    async () => {
      const biometric = await AsyncStorage.getItem('biometric');
      if (!biometric) {
        TouchID.isSupported({})
          .then(type => {
            console.log(type);

            // Success code
            if (type === 'FaceID') {
              setBiometryType('FaceID');
            } else {
              setBiometryType('TouchID');
            }
          })
          .catch(error => {
            // Failure code
            console.log(error);
          });
      }
    };
  }, []);

  const {user} = useAuth();

  const [pin, setPin] = useState<number[]>([]);

  const [dismissTo, setDismisTo] = useState<string | null>(
    NAVIGATION_ROUTES.AUTH,
  );

  const [visible, setVisible] = useState(true);

  const handleButtonPress = useCallback(
    (button: number | Element, i: number, j: number) => {
      if (!isNaN(button as number)) {
        setPin(prev => [...prev, parseInt(button.toString(), 10)]);
      } else {
        if (i === 3 && j === 0) {
          console.log('Face ID Clicked');
        }

        if (i === 3 && j === 2) {
          setPin(prev => [...prev.slice(0, prev.length - 1)]);
        }
      }
    },
    [],
  );

  useEffect(() => {
    if (pin.length === 6) {
      if (pin.join('').trim() === TEST_PIN) {
        setDismisTo(NAVIGATION_ROUTES.APP);
        setVisible(false);
      } else {
        setPin([]);
      }
    }
  }, [pin]);

  return (
    <>
      <Modal
        presentationStyle="pageSheet"
        visible={visible}
        onDismiss={() => {
          if (dismissTo) {
            navigationRef.dispatch(StackActions.replace(dismissTo));
          }
        }}>
        <View
          style={{
            flexDirection: 'column',
            gap: 20,
            alignItems: 'center',
            paddingTop: 5,
            paddingHorizontal: 20,
            flex: 1,
            paddingBottom: bottom + 10,
          }}>
          <View
            style={{
              borderBottomColor: colors.GREY_03,
              alignSelf: 'stretch',
              borderBottomWidth: 1,
              alignItems: 'center',
            }}>
            <VisaroLogoAvatar />
          </View>
          <View
            style={{
              paddingVertical: 10,
            }}>
            <FastImage
              source={{
                uri: user?.profile_pics,
              }}
              style={styles.avatar}
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              gap: 5,
            }}>
            <AppText style={{}}>
              <AppText
                style={{
                  fontSize: px(22),
                }}>
                Welcome back,{' '}
              </AppText>
              <AppText
                style={{
                  fontSize: px(22),
                  fontWeight: 'bold',
                }}>
                {user?.first_name}
              </AppText>
            </AppText>
            <AppText
              style={{
                opacity: 0.8,
                textAlign: 'center',
              }}>
              Please enter your 6 digit pin to access your visaro account
            </AppText>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 20,
              padding: 15,
            }}>
            {new Array(6).fill(0).map((_, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={{
                    width: 20,
                    borderRadius: 35,
                    backgroundColor:
                      pin.length > i ? colors.BLUE_02 : colors.GREY_01,
                    // marginBottom: heightPercentageToDP(2),

                    padding: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    aspectRatio: 1,
                  }}
                />
              );
            })}
          </View>
          <View style={{}}>
            <AppText
              style={{
                opacity: 0.8,
                color: colors.ORANGE_01,
              }}>
              Contact Support
            </AppText>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              gap: 20,
              alignSelf: 'stretch',
              padding: 15,
            }}>
            {BUTTONS.map((row, i) => {
              return (
                <View
                  key={i}
                  style={{
                    flexDirection: 'row',
                    gap: 10,
                    justifyContent: 'space-evenly',
                  }}>
                  {row.map((button, j) => {
                    return (
                      <View
                        key={j}
                        style={{
                          flex: 1,
                          alignItems: 'center',
                        }}>
                        <TouchableOpacity
                          onPress={() => handleButtonPress(button, i, j)}
                          style={{
                            width: WIDTH * 0.13,
                            height: HEIGHT * 0.07,
                            borderRadius: 100,
                            backgroundColor: colors.GREY_05,
                            padding: 0,
                            alignItems: 'center',
                            justifyContent: 'center',
                            aspectRatio: 1,
                          }}>
                          <AppText
                            style={{
                              fontSize: px(20),
                              fontWeight: '600',
                            }}>
                            {button}
                          </AppText>
                        </TouchableOpacity>
                      </View>
                    );
                  })}
                </View>
              );
            })}
          </View>
          {/* <View
            style={{
              flex: 1,
              flexDirection: 'column',
              gap: 20,
              alignSelf: 'stretch',
              padding: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                gap: 10,
                justifyContent: 'space-evenly',
              }}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    width: WIDTH * 0.13,
                    height: HEIGHT * 0.07,
                    borderRadius: 100,
                    backgroundColor: colors.GREY_05,
                    // marginBottom: heightPercentageToDP(2),

                    padding: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    aspectRatio: 1,
                  }}>
                  <AppText
                    style={{
                      fontSize: px(20),
                      fontWeight: '600',
                    }}>
                    1
                  </AppText>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    width: WIDTH * 0.13,
                    height: HEIGHT * 0.07,
                    borderRadius: 100,
                    backgroundColor: colors.GREY_05,
                    // marginBottom: heightPercentageToDP(2),

                    padding: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    aspectRatio: 1,
                  }}>
                  <AppText
                    style={{
                      fontSize: px(20),
                      fontWeight: '600',
                    }}>
                    2
                  </AppText>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    width: WIDTH * 0.13,
                    height: HEIGHT * 0.07,
                    borderRadius: 100,
                    backgroundColor: colors.GREY_05,
                    // marginBottom: heightPercentageToDP(2),

                    padding: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    aspectRatio: 1,
                  }}>
                  <AppText
                    style={{
                      fontSize: px(20),
                      fontWeight: '600',
                    }}>
                    3
                  </AppText>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                gap: 10,
                justifyContent: 'space-evenly',
              }}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    width: WIDTH * 0.13,
                    height: HEIGHT * 0.07,
                    borderRadius: 100,
                    backgroundColor: colors.GREY_05,
                    // marginBottom: heightPercentageToDP(2),

                    padding: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    aspectRatio: 1,
                  }}>
                  <AppText
                    style={{
                      fontSize: px(20),
                      fontWeight: '600',
                    }}>
                    4
                  </AppText>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    width: WIDTH * 0.13,
                    height: HEIGHT * 0.07,
                    borderRadius: 100,
                    backgroundColor: colors.GREY_05,
                    // marginBottom: heightPercentageToDP(2),

                    padding: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    aspectRatio: 1,
                  }}>
                  <AppText
                    style={{
                      fontSize: px(20),
                      fontWeight: '600',
                    }}>
                    5
                  </AppText>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    width: WIDTH * 0.13,
                    height: HEIGHT * 0.07,
                    borderRadius: 100,
                    backgroundColor: colors.GREY_05,
                    // marginBottom: heightPercentageToDP(2),

                    padding: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    aspectRatio: 1,
                  }}>
                  <AppText
                    style={{
                      fontSize: px(20),
                      fontWeight: '600',
                    }}>
                    6
                  </AppText>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                gap: 10,
                justifyContent: 'space-evenly',
              }}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    width: WIDTH * 0.13,
                    height: HEIGHT * 0.07,
                    borderRadius: 100,
                    backgroundColor: colors.GREY_05,
                    // marginBottom: heightPercentageToDP(2),

                    padding: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    aspectRatio: 1,
                  }}>
                  <AppText
                    style={{
                      fontSize: px(20),
                      fontWeight: '600',
                    }}>
                    7
                  </AppText>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    width: WIDTH * 0.13,
                    height: HEIGHT * 0.07,
                    borderRadius: 100,
                    backgroundColor: colors.GREY_05,
                    // marginBottom: heightPercentageToDP(2),

                    padding: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    aspectRatio: 1,
                  }}>
                  <AppText
                    style={{
                      fontSize: px(20),
                      fontWeight: '600',
                    }}>
                    8
                  </AppText>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    width: WIDTH * 0.13,
                    height: HEIGHT * 0.07,
                    borderRadius: 100,
                    backgroundColor: colors.GREY_05,
                    // marginBottom: heightPercentageToDP(2),

                    padding: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    aspectRatio: 1,
                  }}>
                  <AppText
                    style={{
                      fontSize: px(20),
                      fontWeight: '600',
                    }}>
                    9
                  </AppText>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                gap: 10,
                justifyContent: 'space-evenly',
              }}>
              <View
                style={{
                  flex: 1,
                }}
              />
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    width: WIDTH * 0.13,
                    height: HEIGHT * 0.07,
                    borderRadius: 100,
                    backgroundColor: colors.GREY_05,
                    // marginBottom: heightPercentageToDP(2),

                    padding: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    aspectRatio: 1,
                  }}>
                  <AppText
                    style={{
                      fontSize: px(20),
                      fontWeight: '600',
                    }}>
                    0
                  </AppText>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    width: WIDTH * 0.13,
                    height: HEIGHT * 0.07,
                    borderRadius: 100,
                    backgroundColor: colors.GREY_05,
                    // marginBottom: heightPercentageToDP(2),

                    padding: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    aspectRatio: 1,
                  }}>
                  <AppText
                    style={{
                      fontSize: px(20),
                      fontWeight: '600',
                    }}>
                    <Icon name="arrow-u-up-left" weight="bold" />
                  </AppText>
                </TouchableOpacity>
              </View>
            </View>
          </View> */}
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <AppText>Not {user?.first_name}? </AppText>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setDismisTo(NAVIGATION_ROUTES.AUTH);
                setVisible(false);
              }}>
              <AppText
                style={{
                  textDecorationLine: 'underline',
                }}>
                Log in to your account
              </AppText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default LockScreen;
