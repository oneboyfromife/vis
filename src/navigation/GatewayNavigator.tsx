import React from 'react';
import NAVIGATION_ROUTES from './routes.navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScanQR from '@screens/ScanQR';
import {screenOptions} from '@constants/screen';
import SelectPaymentMode from '@screens/SelectPaymentMode';
import ConfirmPaymentDetails from '@screens/ConfirmPaymentDetails';
import ConfirmBillingDetails from '@screens/ConfirmBillingDetails';
import VisaroCredit from '@screens/VisaroCredit';
import SetupVisaroCredit from '@screens/SetupVisaroCredit';
import ConfirmPayWithVisaroCredit from '@screens/ConfirmPayWithVisaroCredit';

const GatewayStack = createNativeStackNavigator();

function GatewayNavigator() {
  return (
    <GatewayStack.Navigator
      screenOptions={{
        ...screenOptions,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}>
      <GatewayStack.Screen
        name={NAVIGATION_ROUTES.SCAN_QR}
        component={ScanQR}
      />
    </GatewayStack.Navigator>
  );
}

export default GatewayNavigator;
