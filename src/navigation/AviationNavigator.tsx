import React from 'react';
import NAVIGATION_ROUTES from './routes.navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenOptions} from '@constants/screen';
import {useRoute} from '@react-navigation/native';
import {AviationScreenProps} from 'types/index';
import SwapTickets from '@screens/Aviation/SwapTickets';
import FlightDetails from '@screens/Aviation/FlightDetails';
import TicketDetails from '@screens/Aviation/TicketDetails';
import SwapTicketsDetails from '@screens/Aviation/SwapTicketsDetails';
import Pay from '@screens/Aviation/Pay';

const AviationStack = createNativeStackNavigator();

function AviationNavigator() {
  const {params} = useRoute<AviationScreenProps>();

  return (
    <AviationStack.Navigator
      initialRouteName={params?.jumpTo}
      screenOptions={screenOptions}>
      <AviationStack.Screen
        name={NAVIGATION_ROUTES.SWAP_TICKETS}
        component={SwapTickets}
      />
      <AviationStack.Screen
        name={NAVIGATION_ROUTES.PAY_FLIGHT}
        component={Pay}
      />
      <AviationStack.Screen
        name={NAVIGATION_ROUTES.FLIGHT_DETAILS}
        component={FlightDetails}
      />
      <AviationStack.Screen
        name={NAVIGATION_ROUTES.TICKET_DETAILS}
        component={TicketDetails}
      />
      <AviationStack.Screen
        name={NAVIGATION_ROUTES.SWAP_TICKET_DETAILS}
        component={SwapTicketsDetails}
      />
    </AviationStack.Navigator>
  );
}

export default AviationNavigator;
