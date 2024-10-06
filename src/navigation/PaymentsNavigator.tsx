import React from 'react';
import NAVIGATION_ROUTES from './routes.navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenOptions} from '@constants/screen';
import TransferNavigator from './TransferNavigator';
import Payments from '@screens/Payments';
import BuyAirtime from '@screens/PayBills/BuyAirtime';
import BuyData from '@screens/PayBills/BuyData';
import ConfirmBillPayment from '@screens/PayBills/ConfirmBillPayment';

const PaymentsStack = createNativeStackNavigator();

function PaymentsNavigator() {
  return (
    <PaymentsStack.Navigator screenOptions={screenOptions}>
      <PaymentsStack.Screen
        name={NAVIGATION_ROUTES.PAYMENTS}
        component={Payments}
      />
      <PaymentsStack.Screen
        name={NAVIGATION_ROUTES.TRANSFER_FLOW}
        component={TransferNavigator}
      />
      <PaymentsStack.Screen
        name={NAVIGATION_ROUTES.BUY_AIRTIME}
        component={BuyAirtime}
      />
      <PaymentsStack.Screen
        name={NAVIGATION_ROUTES.BUY_DATA}
        component={BuyData}
      />
      <PaymentsStack.Screen
        name={NAVIGATION_ROUTES.CONFIRM_BILL_PAYMENT}
        component={ConfirmBillPayment}
      />
    </PaymentsStack.Navigator>
  );
}

export default PaymentsNavigator;
