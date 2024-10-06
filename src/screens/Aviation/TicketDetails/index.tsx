import AppScreen from '@components/AppScreen';
import React from 'react';
import {Pressable, View} from 'react-native';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AppText from '@components/AppText';
import {Icon} from '@components/Icon';
import ButtonPrimary from '@components/Buttons/buttonPrimary';
import moment from 'moment';
import {navigationRef} from '@helpers/navigation';
import {formatAsMoney} from '@helpers/numbers';
import FastImage from 'react-native-fast-image';

const dummyData = {
  TripsType: 'domestic',
  TripsMode: 'flight',
  Hash: 'eb3f9a2b61d8d69adc85ebeca4ce3fadf0c65a1c1f4c3f7d1a0108e8351f1e57e890004941c146566863ecec52b9e042135b4c333246028045a853dfd5c76b1a',
  PassengerDetails: {
    SelectedFlights: [
      {
        ReferenceNumber: null,
        RecommendationID: 0,
        CombinationID: 0,
        GdsId: 93,
        AgentId: 138,
        FlightRouteIndex: 0,
      },
    ],
    SessionId: 'c9989d7dca7640c7bf7ddb2bdbba888f',
    AmountPaid: null,
    BillingAddress: {
      ContactName: 'Abidemi Harry',
      ContactEmail: 'opeabidemi@gmail.com',
      ContactMobileNo: '+23499900000',
      AddressLine1: '9,Nice street',
      AddressLine2: null,
      City: 'Lagos State',
      CountryCode: 'ng',
    },
    PaymentType: null,
    TicketType: null,
    AirTravellers: [
      {
        PassengerTypeCode: 'ADT',
        NamePrefix: 'Mr',
        FirstName: 'Abidemi',
        MiddleName: null,
        Gender: 0,
        LastName: 'Harry',
        Email: 'opeabidemi@gmail.com',
        Telephone: '+23499900000',
        NumberOfBaggages: 0,
        NumberOfBaggages1: 0,
        HandLuggages: 0,
        HandLuggages1: 0,
        AmountPaid: null,
        FrequentFlyerNumber: null,
        FrequentFlyerAirline: null,
        BirthDate: '1960-05-18T00:00:00+00:00',
        Address: {
          ContactName: 'Abidemi',
          ContactEmail: 'opeabidemi@gmail.com',
          ContactMobileNo: null,
          AddressLine1: '9,Nice street',
          AddressLine2: null,
          City: 'Lagos State',
          CountryCode: 'ng',
        },
        Documents: [
          {
            DocType: 'DOCS',
            InnerDocType: 'Passport',
            DocID: '',
            IssueCountryCode: '',
            IssueLocation: '',
            BirthCountryCode: 'ng',
            EffectiveDate: null,
            ExpiryDate: null,
            BirthDate: '1960-05-18T00:00:00',
          },
        ],
        BirthDateString: '18 May 1960',
        GenderName: 'Male',
      },
    ],
    PaymentTexts: [],
    PromoCode: null,
    CloseSessionAfterBooking: false,
  },
  TicketingDetails: [{Price: 50645, ConfirmationCode: '37592|IZDNVB'}],
};

const TicketDetails = () => {
  const {top} = useSafeAreaInsets();
  return (
    <AppScreen>
      <View
        style={[
          styles.headerContainer,
          {
            paddingTop: top,
          },
        ]}>
        <View style={styles.header}>
          <Pressable
            onPress={() => navigationRef.goBack()}
            style={styles.backButtonContainer}>
            <Icon name="arrow-left" color="white" />
          </Pressable>
          <AppText style={styles.headerTitle}>EF12H63</AppText>
          <View style={styles.right} />
        </View>
      </View>
      <View style={[styles.container]}>
        <View style={styles.airlineImageContainer}>
          <FastImage
            style={styles.airlineImage}
            resizeMode="contain"
            source={{
              uri: 'https://nigerialogos.com/logos/arik_air/arik_air.png',
            }}
          />
        </View>
        <View style={styles.details}>
          <View style={styles.detail}>
            <AppText style={styles.title}>
              Swap Green Africa Ticket ID: EF12H63
            </AppText>
          </View>
          <Pressable onPress={() => navigationRef.goBack()}>
            <AppText style={styles.changeButton}>Change Ticket</AppText>
          </Pressable>
        </View>
        <View style={styles.details}>
          <View style={styles.detail}>
            <AppText>Price</AppText>
            <AppText style={styles.price}>
              NGN {formatAsMoney(dummyData.TicketingDetails[0].Price)}
            </AppText>
          </View>
        </View>
        <View style={styles.details}>
          <View style={styles.detail}>
            <AppText>Type</AppText>
            <AppText>{dummyData.TripsType.toUpperCase()}</AppText>
          </View>
          <View style={styles.detail}>
            <AppText>Depature</AppText>
            <AppText>Lagos</AppText>
          </View>
          <View style={styles.detail}>
            <AppText>Arrival</AppText>
            <AppText>Abuja</AppText>
          </View>
          <View style={styles.detail}>
            <AppText>Traveller</AppText>
            <AppText>
              {dummyData.PassengerDetails.AirTravellers.length} Persons
            </AppText>
          </View>
          <View style={styles.detail}>
            <AppText>Date</AppText>
            <AppText>{moment().format('ll')}</AppText>
          </View>
        </View>
        <View style={styles.section}>
          <ButtonPrimary title="Continue" />
        </View>
      </View>
    </AppScreen>
  );
};

export default TicketDetails;
