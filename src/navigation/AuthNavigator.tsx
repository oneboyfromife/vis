import React from 'react';
import NAVIGATION_ROUTES from './routes.navigation';
import OnBoarding from '@screens/OnBoarding';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenOptions} from '@constants/screen';
import Login from '@screens/Login';
import UserOnboadingFlow from './Flows/OnboadingFlow';

const AuthStack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={screenOptions}>
      <AuthStack.Screen
        name={NAVIGATION_ROUTES.ONBOARDING}
        component={OnBoarding}
      />
      <AuthStack.Screen name={NAVIGATION_ROUTES.LOGIN} component={Login} />
      <AuthStack.Screen
        name={NAVIGATION_ROUTES.USER_ONBOARDING_FLOW}
        component={UserOnboadingFlow}
      />
    </AuthStack.Navigator>
  );
}

export default AuthNavigator;
