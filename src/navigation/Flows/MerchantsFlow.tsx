import {screenOptions} from '@constants/screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Merchants from '@screens/Merchants';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';
import MerchantsInfo from '@screens/MerchantsInfo';
import MerchantsStudentsList from '@screens/MerchantsStudentsList';

const MerchantsStack = createNativeStackNavigator();

const MerchantsNavigator = () => {
  return (
    <MerchantsStack.Navigator screenOptions={screenOptions}>
      <MerchantsStack.Screen
        name={NAVIGATION_ROUTES.MERCHANTS}
        component={Merchants}
      />
      <MerchantsStack.Screen
        name={NAVIGATION_ROUTES.MERCHANTS_INFO}
        component={MerchantsInfo}
      />
      <MerchantsStack.Screen
        name={NAVIGATION_ROUTES.MERCHANTS_STUDENT_LIST}
        component={MerchantsStudentsList}
      />
    </MerchantsStack.Navigator>
  );
};

export default MerchantsNavigator;
