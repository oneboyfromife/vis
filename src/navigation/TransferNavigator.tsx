import React from 'react';
import NAVIGATION_ROUTES from './routes.navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenOptions} from '@constants/screen';
import TransferType from '@screens/Transfer/TransferType';
import SelectBank from '@screens/Transfer/SelectBank';
import SearchUser from '@screens/Transfer/SearchUser';
import Amount from '@screens/Transfer/Amount';
import Confirm from '@screens/Transfer/Confirm';
import {useRoute} from '@react-navigation/native';
import {TransferScreenProps} from 'types/index';
import SendContextProvider, {Transfer} from 'src/context/SendContext';

const TransferStack = createNativeStackNavigator();

function TransferNavigator() {
  const {params} = useRoute<TransferScreenProps>();

  return (
    <SendContextProvider
      defaultContextValue={params?.data as Partial<Transfer>}>
      <TransferStack.Navigator
        initialRouteName={params?.jumpTo}
        screenOptions={screenOptions}>
        <TransferStack.Screen
          name={NAVIGATION_ROUTES.TRANSFER_TYPE}
          component={TransferType}
        />
        <TransferStack.Screen
          name={NAVIGATION_ROUTES.SELECT_BANK}
          component={SelectBank}
        />
        <TransferStack.Screen
          name={NAVIGATION_ROUTES.SEARCH_USER}
          component={SearchUser}
        />
        <TransferStack.Screen
          name={NAVIGATION_ROUTES.AMOUNT}
          component={Amount}
        />
        <TransferStack.Screen
          name={NAVIGATION_ROUTES.CONFIRM}
          component={Confirm}
        />
      </TransferStack.Navigator>
    </SendContextProvider>
  );
}

export default TransferNavigator;
