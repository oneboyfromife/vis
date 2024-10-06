import NAVIGATION_ROUTES from '@navigation/routes.navigation';
import {
  TNavigationRoutesValues,
  TProgressData,
  TransferType,
} from 'types/index';

export const onboardingItems = [
  {
    image: require('../assets/images/Onboarding/onboardingOne.png'),
    text: 'Feel secure while shopping globally.',
  },
  {
    image: require('../assets/images/Onboarding/onboardingTwo.png'),
    text: 'Buy now pay later with ease.',
  },
  {
    image: require('../assets/images/Onboarding/onboardingThree.png'),
    text: 'Protecting your data and privacy.',
  },
];

export const accountTypeData = [
  {
    title: 'Personal account',
    subtitle: 'Buy. Pay. Manage',
    iconName: 'user',
    type: 'personal',
    route: NAVIGATION_ROUTES.BVN_SCREEN,
  },
  {
    title: 'Business account',
    subtitle: 'Offer flexible payments to your customers now',
    iconName: 'briefcase',
    type: 'business',
    route: NAVIGATION_ROUTES.SELECT_BUSINESS_TYPE,
  },
];

export const paymentModeData = [
  {
    title: 'Visaro Credit',
    subtitle: 'Get more time to pay for this purchase',
    iconName: 'credit-card',
    type: 'personal',
    route: NAVIGATION_ROUTES.PAY_VISARO_CREDIT,
  },
  {
    title: 'Pay in 3',
    subtitle:
      'You’re pre-approved for 3 interest-free payments of N30,300.00. No late fees.',
    iconName: 'number-three',
    type: 'business',
    route: NAVIGATION_ROUTES.PAY_IN_3,
  },
];

export const transferTypeData: {
  title: string;
  subtitle: string;
  iconName: string;
  route: TNavigationRoutesValues;
  type: TransferType;
}[] = [
  {
    title: 'Other Banks',
    subtitle: 'Send money to other banks with Visaro',
    iconName: 'bank',
    route: NAVIGATION_ROUTES.SELECT_BANK,
    type: 'inter',
  },
  {
    title: 'To Visaro',
    subtitle: 'Use Visaro Unique ID to send money',
    iconName: 'user',
    route: NAVIGATION_ROUTES.SEARCH_USER,
    type: 'intra',
  },
];

export const personalProfileData: TProgressData[] = [
  {
    key: 'person',
    iconName: 'user',
  },
  {
    key: 'phone',
    iconName: 'phone',
  },
  {
    key: 'camera',
    iconName: 'camera',
  },
];

export const passwordValidationData = [
  {
    text: 'Minimum of 8 characters',
    test: (s: string) => s.length > 7,
    key: 'length',
  },
  {
    text: 'One UPPERCASE character',
    test: (s: string) => /[A-Z]/.test(s),
    key: 'case',
  },
  {
    text: 'One unique character (e.g: !@#$%&*?)',
    test: (s: string) => /[!@#$%&*?]/.test(s),
    key: 'strength',
  },
];
