import React, {
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import {BookingResponseData} from 'types/index';
import useInitailizeNewFlight from '@hooks/useInitializeNewFlight';
import useSubmitNewFlightData from '@hooks/useSubmitNewFlightData';

export type TripsContextV = {
  booking: boolean;
  initializingNewFlight: boolean;
  bookingResponse: BookingResponseData | null;
  bookingURL: string | null;
  setBooking: React.Dispatch<React.SetStateAction<boolean>>;
  setBookingResponse: React.Dispatch<
    React.SetStateAction<BookingResponseData | null>
  >;
};

export const TripsContext = React.createContext<TripsContextV>({
  booking: false,
  bookingResponse: null,
  bookingURL: '',
  initializingNewFlight: false,
  setBooking() {
    // do nothinh
  },
  setBookingResponse() {
    // do nothinh
  },
});

export const useTrips = () => {
  const context = useContext(TripsContext);

  return context;
};

const TripsContextProvider: FC<PropsWithChildren> = ({children}) => {
  const [booking, setBooking] = useState(false);

  const [bookingURL, setBookingURL] = useState<string | null>(null);

  const [bookingResponse, setBookingResponse] =
    useState<BookingResponseData | null>(null);

  const {initializingNewFlight, reinitializeFlight} = useInitailizeNewFlight({
    onSuccess(data) {
      console.log('Initialized-', data);

      if (data.data) {
        setBookingURL(data?.data.url);
      }
    },
  });

  const {submitNewFlightData} = useSubmitNewFlightData({
    onSuccess(data) {
      console.log('Submitted-', data);
    },
    onError(error) {
      console.log('Submit Error- ', error);
    },
  });

  useEffect(() => {
    if (bookingResponse) {
      submitNewFlightData({
        widget_data: bookingResponse,
        origin: 'mobile',
      });
    }
  }, [bookingResponse, submitNewFlightData]);

  useEffect(() => {
    if (booking) {
      reinitializeFlight();
    }

    return () => {};
  }, [booking, reinitializeFlight]);

  return (
    <TripsContext.Provider
      value={{
        booking,
        setBooking,
        bookingResponse,
        bookingURL,
        setBookingResponse,
        initializingNewFlight,
      }}>
      {children}
    </TripsContext.Provider>
  );
};

export default TripsContextProvider;
