import {screenOptions} from '@constants/screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import PersonalInfo from '@screens/PersonalInfo';
import ChangeEmailAddress from '@screens/ChangeEmailAddress';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';
import ValidateOTP from '@screens/ValidateOTP';
import ConfirmPassword from '@screens/ConfirmPassword';
import ChangePhoneNumber from '@screens/ChangePhoneNumber';
import ChangeAddress from '@screens/ChangeAddress';

const PersonalInfoStack = createNativeStackNavigator();

const PersonalInfoNavigator = () => {
  return (
    <PersonalInfoStack.Navigator screenOptions={screenOptions}>
      <PersonalInfoStack.Screen
        name={NAVIGATION_ROUTES.PERSONAL_INFO}
        component={PersonalInfo}
      />
      <PersonalInfoStack.Screen
        name={NAVIGATION_ROUTES.CHANGE_EMAIL_ADDRESS}
        component={ChangeEmailAddress}
      />
      <PersonalInfoStack.Screen
        name={NAVIGATION_ROUTES.CHANGE_PHONE_NUMBER}
        component={ChangePhoneNumber}
      />
      <PersonalInfoStack.Screen
        name={NAVIGATION_ROUTES.CHANGE_ADDRESS}
        component={ChangeAddress}
      />
      <PersonalInfoStack.Screen
        name={NAVIGATION_ROUTES.OTP_SCREEN}
        component={ValidateOTP}
      />
      <PersonalInfoStack.Screen
        name={NAVIGATION_ROUTES.CONFIRM_PASSWORD}
        component={ConfirmPassword}
      />
    </PersonalInfoStack.Navigator>
  );
};

export default PersonalInfoNavigator;
