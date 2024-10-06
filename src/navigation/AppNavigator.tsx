/* eslint-disable react/no-unstable-nested-components */
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import NAVIGATION_ROUTES from './routes.navigation';
import Home from '@screens/Home';
import AppBar from '@components/AppBar';
import {screenOptions} from '@constants/screen';
import PaymentsNavigator from './PaymentsNavigator';
import SelectPaymentMode from '@screens/SelectPaymentMode';
import ConfirmPaymentDetails from '@screens/ConfirmPaymentDetails';
import ConfirmBillingDetails from '@screens/ConfirmBillingDetails';
import VisaroCredit from '@screens/VisaroCredit';
import SetupVisaroCredit from '@screens/SetupVisaroCredit';
import ConfirmPayWithVisaroCredit from '@screens/ConfirmPayWithVisaroCredit';
import AccountNavigator from './AccountNavigator';
import WalletsNavigator from './WalletsNavigator';
import TripsContextProvider from 'src/context/TripsContext';
import AviationNavigator from './AviationNavigator';
import MerchantsNavigator from './Flows/MerchantsFlow';

const AppStack = createBottomTabNavigator();

function AppNavigator() {
  return (
    <TripsContextProvider>
      <AppStack.Navigator
        screenOptions={
          {
            ...screenOptions,
          } as BottomTabNavigationOptions
        }
        tabBar={props => <AppBar {...props} />}>
        <AppStack.Screen
          name={NAVIGATION_ROUTES.HOME_SCREEN}
          component={Home}
        />
        <AppStack.Screen
          name={NAVIGATION_ROUTES.PAYMENTS_FLOW}
          component={PaymentsNavigator}
        />
        <AppStack.Screen
          name={NAVIGATION_ROUTES.WALLETS_FLOW}
          component={WalletsNavigator}
        />
        <AppStack.Screen
          name={NAVIGATION_ROUTES.ACCOUNT_FLOW}
          component={AccountNavigator}
        />
        <AppStack.Screen
          name={NAVIGATION_ROUTES.SELECT_PAYMENT_MODE}
          component={SelectPaymentMode}
        />
        <AppStack.Screen
          name={NAVIGATION_ROUTES.CONFIRM_PAYMENT_DETAILS}
          component={ConfirmPaymentDetails}
        />
        <AppStack.Screen
          name={NAVIGATION_ROUTES.CONFIRM_BILLING_DETAILS}
          component={ConfirmBillingDetails}
        />
        <AppStack.Screen
          name={NAVIGATION_ROUTES.PAY_VISARO_CREDIT}
          component={VisaroCredit}
        />
        <AppStack.Screen
          name={NAVIGATION_ROUTES.SETUP_VISARO_CREDIT}
          component={SetupVisaroCredit}
        />
        <AppStack.Screen
          name={NAVIGATION_ROUTES.CONFIRM_PAY_WITH_VISARO_CREDIT}
          component={ConfirmPayWithVisaroCredit}
        />
        <AppStack.Screen
          name={NAVIGATION_ROUTES.AVIATION_FLOW}
          component={AviationNavigator}
        />
        <AppStack.Screen
          name={NAVIGATION_ROUTES.MERCHANTS_FLOW}
          component={MerchantsNavigator}
        />
      </AppStack.Navigator>
    </TripsContextProvider>
  );
}

export default AppNavigator;
