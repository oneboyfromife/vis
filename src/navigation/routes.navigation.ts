const NAVIGATION_ROUTES = {
  //Navigators
  AUTH: '/auth',
  APP: '/app',

  LOCK_SCREEN: '/lock-screen',

  // Auth
  ONBOARDING: '/onboaring',

  // onboarding-flow
  USER_ONBOARDING_FLOW: '/user-onboarding-flow',
  GET_STARTED: '/get-started',
  VALIDATE_EMAIL_OTP: '/validate-email-otp',
  VALIDATE_PHONE_OTP: '/validate-phone-otp',
  CREATE_PASSWORD: '/create-password',
  COMPLETE_PROFILE: '/complete-profile',
  CHOOSE_USERNAME: '/choose-username',

  LOGIN: '/login',
  SIGN_UP_FLOW: '/sign-up-flow',
  FORGOT_PASSWORD: '/forgot-password',
  OTP_SCREEN: '/validate-otp',
  CREATE_NEW_PASSWORD: '/create-new-password',

  // Sign Up Flow
  SELECT_ACCOUNT: '/select-account',
  SIGN_UP: '/sign-up',
  BVN_SCREEN: '/bvn-screen',
  SELECT_BUSINESS_TYPE: '/select-business-type',
  COMPLETE_PERSONAL_PROFILE: '/complete-personal-profile',
  UPLOAD_PROFILE_IMAGE: '/upload-profile-image',

  //PERSONAL
  PERSONAL: '/personal',
  SCAN_QR: '/scan-qr',

  HOME_SCREEN: '/home',
  PAYMENTS_FLOW: '/payments-flow',
  WALLETS_FLOW: '/wallets-flow',
  ACCOUNT_FLOW: '/account-flow',
  ACCOUNT: '/account',

  // payments routes
  PAYMENTS: '/payments',
  TRANSFER_FLOW: '/transfer-flow',
  AVIATION_FLOW: '/aviation-flow',

  // wallets routes
  WALLETS: '/wallets',

  // pay bills
  BUY_AIRTIME: '/buy-airtime',
  BUY_DATA: '/buy-data',
  BUY_ELECTRICITY: '/buy-electricity',
  CONFIRM_BILL_PAYMENT: '/confirm-bill-payment',

  // transfer routes
  TRANSFER_TYPE: '/transfer-type',
  SELECT_BANK: '/select-bank',
  SEARCH_USER: '/search-user',
  AMOUNT: '/amount',
  CONFIRM: '/confirm',

  // aviation routes
  FLIGHT_DETAILS: '/flight-details',
  PAY_FLIGHT: '/pay-flight',
  TICKET_DETAILS: '/ticket-details',
  SWAP_TICKETS: '/swap-tickets',
  SWAP_TICKET_DETAILS: '/swap-ticket-details',
  MAKE_FLIGHT_PAYMENT: '/make-flight-payment',

  // gateway routes
  GATEWAY: '/gateway',
  SELECT_PAYMENT_MODE: '/select-payment-mode',
  PAY_VISARO_CREDIT: '/pay-visaro-credit',
  SETUP_VISARO_CREDIT: '/setup-visaro-credit',
  CONFIRM_PAY_WITH_VISARO_CREDIT: '/confirm-pay-with-visaro-credit',
  CONFIRM_PAYMENT_DETAILS: '/confirm-payment-details',
  CONFIRM_BILLING_DETAILS: '/confirm-billing-details',
  PAY_IN_3: '/pay-in-3',
  SETUP_PAY_IN_3: '/setup-pay-in-3',

  // account routes

  PERSONAL_INFO_FLOW: '/personal-info-flow',
  COMPLIANCE_FLOW: '/compliance-flow',
  LOGIN_AND_SECURITY: '/login-and-security',
  NOTIFICATIONS_PREFERENCE: '/notification-preference',
  CONTACT_US: '/contact-us',
  CLOSE_YOUR_ACCOUNT: '/close-your-account',
  HELP_FLOW: '/help-flow',
  LEGAL: '/legal',

  //help flow
  HELP: '/help',
  TOPIC_DETAILS: '/topic-details',

  // personal info routes
  PERSONAL_INFO: '/personal-info',
  CHANGE_EMAIL_ADDRESS: '/change-email-address',
  CHANGE_PHONE_NUMBER: '/change-phone-number',
  CHANGE_ADDRESS: '/change-address',
  CONFIRM_PASSWORD: '/confirm-password',

  // compliance flow
  COMPLIANCE: '/compliance',
  UPDATE_KYC: '/update-kyc',

  // merchants flow
  MERCHANTS_FLOW: '/merchants-flow',
  MERCHANTS: '/merchants',
  MERCHANTS_INFO: '/merchants-info',
  MERCHANTS_STUDENT_LIST: '/merchants-students-list',
  MERCHANTS_STUDENT_INFO: '/merchants-students-info',
} as const;

export default NAVIGATION_ROUTES;
