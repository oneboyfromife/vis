import {screenOptions} from '@constants/screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Compliance from '@screens/Compliance';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';
import UpdateKYC from '@screens/UpdateKYC';

const ComplianceStack = createNativeStackNavigator();

const ComplianceNavigator = () => {
  return (
    <ComplianceStack.Navigator screenOptions={screenOptions}>
      <ComplianceStack.Screen
        name={NAVIGATION_ROUTES.COMPLIANCE}
        component={Compliance}
      />
      <ComplianceStack.Screen
        name={NAVIGATION_ROUTES.UPDATE_KYC}
        component={UpdateKYC}
      />
    </ComplianceStack.Navigator>
  );
};

export default ComplianceNavigator;
