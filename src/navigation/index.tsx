import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NAVIGATION_ROUTES from './routes.navigation';
import AppNavigator from './AppNavigator';
import {screenOptions} from '@constants/screen';
import AuthContext from 'src/context/AuthContext';
import LockScreen from '@screens/LockScreen';
import OnBoarding from '@screens/OnBoarding';
import Login from '@screens/Login';
import UserOnboadingFlow from './Flows/OnboadingFlow';
import ResetPassword from '@screens/ResetPassword';

const RootStack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <AuthContext>
      <RootStack.Navigator
        initialRouteName={NAVIGATION_ROUTES.APP}
        screenOptions={screenOptions}>
        <RootStack.Screen
          name={NAVIGATION_ROUTES.ONBOARDING}
          component={OnBoarding}
        />
        <RootStack.Screen name={NAVIGATION_ROUTES.LOGIN} component={Login} />
        <RootStack.Screen
          name={NAVIGATION_ROUTES.FORGOT_PASSWORD}
          component={ResetPassword}
        />
        <RootStack.Screen
          name={NAVIGATION_ROUTES.USER_ONBOARDING_FLOW}
          component={UserOnboadingFlow}
        />
        <RootStack.Screen
          name={NAVIGATION_ROUTES.LOCK_SCREEN}
          component={LockScreen}
        />
        <RootStack.Screen
          name={NAVIGATION_ROUTES.APP}
          component={AppNavigator}
        />
      </RootStack.Navigator>
    </AuthContext>
  );
}

export default RootNavigator;
