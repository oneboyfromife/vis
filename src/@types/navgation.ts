import NAVIGATION_ROUTES from '@navigation/routes.navigation';
import {BVNData, OTP_TYPES} from '.';
import {RouteProp} from '@react-navigation/native';

export type TNavigationRoutesKeys = keyof typeof NAVIGATION_ROUTES;

export type TNavigationRoutesValues =
  (typeof NAVIGATION_ROUTES)[TNavigationRoutesKeys];

export type JumpableScreen<
  T extends Record<any, any>,
  D extends Record<any, any> = {},
> = {
  jumpTo?: TNavigationRoutesValues;
  data: D;
} & T;

export type AuthStackParamList = Record<
  string,
  {
    type: OTP_TYPES;
    autoSendOTP: boolean;
    email: string;
    phone: string;
    code: string;
    password: string;
    redirect: TNavigationRoutesValues;
    resultTo: TNavigationRoutesValues;
  }
>;

export type AuthScreenProps = RouteProp<AuthStackParamList>;

export type TransferStackParamList = {
  [NAVIGATION_ROUTES.AMOUNT]: JumpableScreen<{}>;
};

export type TransferScreenProps = RouteProp<TransferStackParamList>;

export type AviationStackParamList = {
  [NAVIGATION_ROUTES.MAKE_FLIGHT_PAYMENT]: JumpableScreen<{}>;
};

export type AviationScreenProps = RouteProp<AviationStackParamList>;

export type SignUpStackParamList = {
  [NAVIGATION_ROUTES.COMPLETE_PERSONAL_PROFILE]: {
    bvnData: BVNData;
  };
};

export type SignUpScreenProps = RouteProp<SignUpStackParamList>;
