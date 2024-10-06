import AppScreen from '@components/AppScreen';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import styles from './styles';
import BackButton from '@components/BackButton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AppText from '@components/AppText';
import ButtonPrimary from '@components/Buttons/buttonPrimary';
import moment from 'moment';
import {formatAsMoney} from '@helpers/numbers';
import colors from '@theme/colors';
import FastImage from 'react-native-fast-image';
import {navigate} from '@helpers/navigation';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';
import {useTrips} from 'src/context/TripsContext';

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

const FlightDetails = () => {
  const {top, bottom} = useSafeAreaInsets();

  const {bookingResponse} = useTrips();

  return (
    <AppScreen
      contentContainerStyle={[
        styles.container,
        {
          paddingBottom: bottom,
        },
      ]}
      header={
        <View style={[styles.header, {paddingTop: top}]}>
          <BackButton />
          <AppText style={styles.headerTitle}>Flight Details</AppText>
          <View style={styles.right} />
        </View>
      }>
      <View style={styles.formContainer}>
        <View style={styles.section}>
          <View style={styles.card}>
            <View
              style={{
                gap: 5,
                alignItems: 'center',
              }}>
              <AppText
                style={{
                  fontWeight: '600',
                }}>
                {moment().format('LT')}
              </AppText>
              <AppText>LAG</AppText>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderTopWidth: 1,
                  borderColor: colors.GREY_04,
                  flex: 1,
                  height: 0,
                }}
              />
              <FastImage
                source={{
                  uri: 'https://nigerialogos.com/logos/aero_contractors/aero_contractors.png',
                }}
                style={{
                  width: 40,
                  aspectRatio: 1,
                }}
              />
              <View
                style={{
                  borderTopWidth: 1,
                  borderColor: colors.GREY_04,
                  flex: 1,
                  height: 0,
                }}
              />
            </View>
            <View
              style={{
                gap: 5,
                alignItems: 'center',
              }}>
              <AppText
                style={{
                  fontWeight: '600',
                }}>
                {moment().format('LT')}
              </AppText>
              <AppText>ABJ</AppText>
            </View>
          </View>
        </View>
        <View style={styles.details}>
          <View style={styles.detail}>
            <AppText
              style={{
                color: colors.ORANGE_01,
              }}>
              Departure
            </AppText>
            <AppText
              style={{
                textAlign: 'right',
                color: colors.ORANGE_01,
              }}>
              Arrival
            </AppText>
          </View>
          <View style={styles.detail}>
            <View>
              <AppText
                style={{
                  fontWeight: '600',
                }}>
                MMIA
              </AppText>
              <AppText>LAG</AppText>
            </View>
            <View>
              <AppText
                style={{
                  fontWeight: '600',
                }}>
                NAIA
              </AppText>
              <AppText
                style={{
                  textAlign: 'right',
                }}>
                ABJ
              </AppText>
            </View>
          </View>
          <View style={styles.detail}>
            <View>
              <AppText
                style={{
                  fontWeight: '600',
                }}>
                {moment().format('LT')}
              </AppText>
              <AppText>{moment().format('ll')}</AppText>
            </View>
            <View>
              <AppText
                style={{
                  fontWeight: '600',
                  textAlign: 'right',
                }}>
                {moment().format('LT')}
              </AppText>
              <AppText
                style={{
                  textAlign: 'right',
                }}>
                {moment().format('ll')}
              </AppText>
            </View>
          </View>
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
            <AppText>Domestic</AppText>
          </View>
          <View style={styles.detail}>
            <AppText>Cabin</AppText>
            <AppText>Economy</AppText>
          </View>
          <View style={styles.detail}>
            <AppText>Passengers</AppText>
            <AppText>1 Adult, 2 Children</AppText>
          </View>
          <View style={styles.detail}>
            <AppText>Duration</AppText>
            <AppText>24 Hours</AppText>
          </View>
        </View>
        <View style={styles.section}>
          <ButtonPrimary
            title="Pay"
            onPress={() => navigate(NAVIGATION_ROUTES.PAY_FLIGHT)}
          />
        </View>
      </View>
    </AppScreen>
  );
};

export default FlightDetails;
