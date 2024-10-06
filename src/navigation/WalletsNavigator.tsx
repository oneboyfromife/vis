import React from 'react';
import NAVIGATION_ROUTES from './routes.navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenOptions} from '@constants/screen';
import TripsContextProvider from 'src/context/TripsContext';
import Wallets from '@screens/Wallets';

const WalletsStack = createNativeStackNavigator();

function WalletsNavigator() {
  return (
    <TripsContextProvider>
      <WalletsStack.Navigator screenOptions={screenOptions}>
        <WalletsStack.Screen
          name={NAVIGATION_ROUTES.WALLETS}
          component={Wallets}
        />
      </WalletsStack.Navigator>
    </TripsContextProvider>
  );
}

export default WalletsNavigator;
