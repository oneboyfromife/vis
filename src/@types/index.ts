export * from './navgation';

export type TProgressData = {
  key: string;
  iconName: string;
};

export interface BVNData {
  first_name: string;
  middle_name: string;
  last_name: string;
  phone_1: string;
  phone_2: string;
  address: string;
  state_of_residence: StateOfResidence;
  lga_of_residence: LgaOfResidence;
}

export interface StateOfResidence {
  id: number;
  description: string;
}

export interface LgaOfResidence {
  id: number;
  description: string;
}

export type Country = {
  id: number;
  country_key: string;
  public_id: string;
  name: string;
  capital: string;
  flag: string;
  flag_icon: string;
  continent: string;
  phone_code: string;
  code: string;
  longitude: any;
  latitude: any;
  sub_region: any;
  timezones: any;
  meta: any;
  active: number;
  created_at: string;
  updated_at: string;
  deleted_at: any;
};

export type APIResponse<T = any> = {
  message: string;
  success: boolean;
  errors?: Record<string, any>;
  data?: T;
  [key: string]: any;
};

export type Region = {
  id: string;
  description: string;
};

export interface User {
  code: string;
  email: string;
  firstname: string;
  id: string;
  lastname: string;
  phone_number: string;
  photo: string;
  public_id: string;
  qrcode: string;
  status: string;
  account_type: AccountType;
  first_name: string;
  middle_name: string;
  last_name: string;
  phone_1: string;
  phone_2: string;
  address: string;
  state_of_residence: StateOfResidence;
  lga_of_residence: LgaOfResidence;
  profile_pics: string;
  wallet: Wallet;
  active: number;
  created_at: string;
  deleted_at: any;
  email_verified_at: string;
  hint_answer: any;
  hint_question: any;
  meta: any;
  middlename: string;
  phone: string;
  phone_code: string;
  phone_verified_at: string;
  updated_at: string;
  username: string;
}

export interface AccountType {
  id: number;
  description: string;
}
export interface Wallet {
  visaro_balance: string;
  visaro_credit: string;
  status: string;
}

export interface DashboardData {
  onboarding: Onboarding;
  wallet: Wallet;
  bnpl_services: BnplService[];
  activities_log: ActivitiesLog[];
  registered_hospital: RegisteredHospital[];
}

export interface BnplService {
  bnpl_service_name: string;
  thumbnails: string;
  display_img: string;
}

export interface ActivitiesLog {
  activity_description: string;
  created_at: string;
}

export interface RegisteredHospital {
  hospital_name: string;
  thumbnail: string;
  display_img: string;
}

export interface Onboarding {
  bvn_verification: boolean;
  profile_picture_upload: boolean;
  account_type: string;
  setup_trans_pin: boolean;
  phone_no_verification: boolean;
}

export type UsernameEnquiryData = {
  full_name: string;
};

export type BeneficiaryEnquiryData = {
  full_name: string;
};

export enum OTP_TYPES {
  LoginVerification = '1',
  ForgotPasswordVerification = '2',
  PhoneNumberVerification = '3',
  TransactionPin = '4',
}

export interface Bank {
  bank_code: string;
  bank_name: string;
  display_img: string;
}

export interface Network {
  network_code: string;
  network_name: string;
  logo: string;
}

export type TransferType = 'inter' | 'intra';

export interface TransferPayload {
  amount: string;
  transaction_pin: string;
  naration: string;
}

export interface VisaroTransferPayload extends TransferPayload {
  username: string;
}

export interface BankTransferPayload extends TransferPayload {
  to_bank_code?: string;
  to_account_no: string;
}

export interface TransferData {
  trans_id: string;
  session_id: string;
  reference: string;
}

export interface BookingResponseData {
  TripsType: string;
  TripsMode: string;
  Hash: string;
  PassengerDetails: PassengerDetails;
  TicketingDetails: TicketingDetail[];
}

export interface PassengerDetails {
  SelectedFlights: SelectedFlight[];
  SessionId: string;
  AmountPaid: any;
  BillingAddress: BillingAddress;
  PaymentType: any;
  TicketType: any;
  AirTravellers: AirTraveller[];
  PaymentTexts: any[];
  PromoCode: any;
  CloseSessionAfterBooking: boolean;
}

export interface SelectedFlight {
  ReferenceNumber: any;
  RecommendationID: number;
  CombinationID: number;
  GdsId: number;
  AgentId: number;
  FlightRouteIndex: number;
}

export interface BillingAddress {
  ContactName: string;
  ContactEmail: string;
  ContactMobileNo: string;
  AddressLine1: string;
  AddressLine2: any;
  City: string;
  CountryCode: string;
}

export interface AirTraveller {
  PassengerTypeCode: string;
  NamePrefix: string;
  FirstName: string;
  MiddleName: any;
  Gender: number;
  LastName: string;
  Email: string;
  Telephone: string;
  NumberOfBaggages: number;
  NumberOfBaggages1: number;
  HandLuggages: number;
  HandLuggages1: number;
  AmountPaid: any;
  FrequentFlyerNumber: any;
  FrequentFlyerAirline: any;
  BirthDate: string;
  Address: Address;
  Documents: Document[];
  BirthDateString: string;
  GenderName: string;
}

export interface Address {
  ContactName: string;
  ContactEmail: string;
  ContactMobileNo: any;
  AddressLine1: string;
  AddressLine2: any;
  City: string;
  CountryCode: string;
}

export interface Document {
  DocType: string;
  InnerDocType: string;
  DocID: string;
  IssueCountryCode: string;
  IssueLocation: string;
  BirthCountryCode: string;
  EffectiveDate: any;
  ExpiryDate: any;
  BirthDate: string;
}

export interface TicketingDetail {
  Price: number;
  ConfirmationCode: string;
}
