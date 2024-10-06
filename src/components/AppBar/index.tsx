import React, {forwardRef, useImperativeHandle, useMemo, useState} from 'react';
import AppText from '../AppText';
import {TouchableOpacity} from 'react-native';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';
import colors from '@theme/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import styles from './styles';
import {navigate} from '@helpers/navigation';
import {Icon} from '@components/Icon';
import Animated, {
  Easing,
  SlideInDown,
  SlideInUp,
} from 'react-native-reanimated';

const tabs = [
  {
    name: 'Home',
    route: NAVIGATION_ROUTES.HOME_SCREEN,
    icon: 'house',
  },
  {
    name: 'Payments',
    route: NAVIGATION_ROUTES.PAYMENTS_FLOW,
    icon: 'currency-ngn',
  },
  {
    name: 'Wallet',
    route: NAVIGATION_ROUTES.WALLETS_FLOW,
    icon: 'stack',
  },
  {
    name: 'You',
    route: NAVIGATION_ROUTES.ACCOUNT_FLOW,
    icon: 'user',
  },
];

const AppBar = forwardRef<
  {
    width: number;
    height: number;
  },
  BottomTabBarProps
>(({state}, ref) => {
  const {bottom} = useSafeAreaInsets();

  const [dimen, setDimen] = useState({
    width: 0,
    height: 0,
  });

  useImperativeHandle(
    ref,
    () => {
      return {
        ...dimen,
      };
    },
    [dimen],
  );

  const activeRoute = useMemo(() => {
    return state?.routes[state?.index];
  }, [state]);

  return (
    <Animated.View
      entering={SlideInUp.duration(500).easing(Easing.ease)}
      exiting={SlideInDown.duration(500).easing(Easing.ease)}
      onLayout={e => {
        setDimen({
          width: e.nativeEvent.layout.width,
          height: e.nativeEvent.layout.height,
        });
      }}
      style={[
        styles.tabBarContainer,
        {
          paddingBottom: bottom - 25,
        },
      ]}>
      {tabs.map((tab, key) => {
        return (
          <TouchableOpacity
            onPress={() => navigate(tab.route)}
            key={key}
            style={styles.tabBarItem}
            activeOpacity={0.8}>
            <Icon
              name={tab.icon}
              // active={activeRoute.name === tab.route}
              // stroke={
              //   activeRoute.name === tab.route ? colors.BLUE_01 : colors.GREY_04
              // }
              size={24}
              weight={activeRoute.name === tab.route ? 'fill' : 'regular'}
            />
            <AppText
              style={{
                ...styles.tabBarItemText,
                color:
                  activeRoute.name === tab.route
                    ? colors.BLUE_01
                    : colors.GREY_04,
              }}>
              {tab.name}
            </AppText>
          </TouchableOpacity>
        );
      })}
    </Animated.View>
  );
});

export default AppBar;
