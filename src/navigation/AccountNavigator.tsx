import {screenOptions} from '@constants/screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import NAVIGATION_ROUTES from './routes.navigation';
import Account from '@screens/Account';
import PersonalInfoNavigator from './Flows/PersonalInfoFlow';
import ContactUs from '@screens/ContactUs';
import CloseYourAccount from '@screens/CloseYourAccount';
import LoginAndSecurity from '@screens/LoginAndSecurity';
import NotificationPreference from '@screens/NotificationPreference';
import ComplianceNavigator from './Flows/ComplianceFlow';

const AccountStack = createNativeStackNavigator();

const AccountNavigator = () => {
  return (
    <AccountStack.Navigator screenOptions={screenOptions}>
      <AccountStack.Screen
        name={NAVIGATION_ROUTES.ACCOUNT}
        component={Account}
      />
      <AccountStack.Screen
        name={NAVIGATION_ROUTES.PERSONAL_INFO_FLOW}
        component={PersonalInfoNavigator}
      />
      <AccountStack.Screen
        name={NAVIGATION_ROUTES.COMPLIANCE_FLOW}
        component={ComplianceNavigator}
      />
      <AccountStack.Screen
        name={NAVIGATION_ROUTES.CONTACT_US}
        component={ContactUs}
      />
      <AccountStack.Screen
        name={NAVIGATION_ROUTES.CLOSE_YOUR_ACCOUNT}
        component={CloseYourAccount}
      />
      <AccountStack.Screen
        name={NAVIGATION_ROUTES.LOGIN_AND_SECURITY}
        component={LoginAndSecurity}
      />
      <AccountStack.Screen
        name={NAVIGATION_ROUTES.NOTIFICATIONS_PREFERENCE}
        component={NotificationPreference}
      />
    </AccountStack.Navigator>
  );
};

export default AccountNavigator;
