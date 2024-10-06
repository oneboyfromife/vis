import {screenOptions} from '@constants/screen';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChooseUsername from '@screens/UserOnboarding/ChooseUsername';
import CompleteProfile from '@screens/UserOnboarding/CompleteProfile';
import CreatePassword from '@screens/UserOnboarding/CreatePassword';
import GetStarted from '@screens/UserOnboarding/GetStarted';
import UploadProfileImage from '@screens/UserOnboarding/UploadProfileImage';
import ValidateEmailOTP from '@screens/UserOnboarding/ValidateEmailOTP';
import ValidatePhoneOTP from '@screens/UserOnboarding/ValidatePhoneOTP';
import React from 'react';

const UserOnboadingNavigator = createNativeStackNavigator();

const UserOnboadingFlow = () => {
  return (
    <UserOnboadingNavigator.Navigator screenOptions={screenOptions}>
      <UserOnboadingNavigator.Screen
        name="get-started"
        component={GetStarted}
      />
      <UserOnboadingNavigator.Screen
        name={NAVIGATION_ROUTES.CHOOSE_USERNAME}
        component={ChooseUsername}
      />
      <UserOnboadingNavigator.Screen
        name={NAVIGATION_ROUTES.VALIDATE_EMAIL_OTP}
        component={ValidateEmailOTP}
      />
      <UserOnboadingNavigator.Screen
        name={NAVIGATION_ROUTES.CREATE_PASSWORD}
        component={CreatePassword}
      />
      <UserOnboadingNavigator.Screen
        name={NAVIGATION_ROUTES.COMPLETE_PROFILE}
        component={CompleteProfile}
      />
      <UserOnboadingNavigator.Screen
        name={NAVIGATION_ROUTES.VALIDATE_PHONE_OTP}
        component={ValidatePhoneOTP}
      />
      <UserOnboadingNavigator.Screen
        name={NAVIGATION_ROUTES.UPLOAD_PROFILE_IMAGE}
        component={UploadProfileImage}
      />
    </UserOnboadingNavigator.Navigator>
  );
};

export default UserOnboadingFlow;
