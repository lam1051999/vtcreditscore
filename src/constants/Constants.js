import {Dimensions} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SIGNIN_IMAGE_WIDTH = SCREEN_WIDTH - 60;
export const SIGNIN_IMAGE_HEIGHT = (SIGNIN_IMAGE_WIDTH * 274) / 318;
export const SIGN_IN_LAYOUT_ITEMS_HEIGHT = {
  WELCOME_TEXT_FONTSIZE: 30,
  TEXT_INPUT_HEIGHT: 45,
  BUTTON_HEIGHT: 50,
};
//30 = paddingTop,
//10 = marginBottom + 10 = marginTop + 20 = extraHeight of welcomeText,
//10 = marginBottom
export const SIGN_IN_LAYOUT_HEIGHT =
  SIGNIN_IMAGE_HEIGHT +
  30 +
  SIGN_IN_LAYOUT_ITEMS_HEIGHT.WELCOME_TEXT_FONTSIZE +
  +20 +
  20 +
  (SIGN_IN_LAYOUT_ITEMS_HEIGHT.TEXT_INPUT_HEIGHT + 10) * 2 +
  SIGN_IN_LAYOUT_ITEMS_HEIGHT.BUTTON_HEIGHT;
export const SPLASH_SCREEN_IMAGE_WIDTH = 250;
export const SPLASH_SCREEN_IMAGE_HEIGHT =
  (SPLASH_SCREEN_IMAGE_WIDTH / 7.4) * 6.819;
export const BOTTOMTAB_HEIGHT = 50;
export const BARCHART_HEIGHT = 220;
export const BARCHART_WIDTH = SCREEN_WIDTH * 1.5;
export const CUSTOMERITEM_IMAGE_WIDTH = 30;
export const CUSTOMERITEM_IMAGE_HEIGHT = CUSTOMERITEM_IMAGE_WIDTH * 1.2;
export const CUSTOMER_IMAGE_WIDTH = 50;
export const CUSTOMER_IMAGE_HEIGHT = CUSTOMER_IMAGE_WIDTH * 1.2;
export const FAKE_DATA = [
  {
    id: 1,
    icon: require('../assets/male1.png'),
    backgroundColorIcon: '#FFC542',
    name: 'Alice Smith',
    phone: '0962 007 024',
    age: 21,
    address: 'CT1 The Pride, Tố Hữu, La Khê, Hà Đông, Hà Nội',
    credit_scores: [
      {
        id: 1,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 1',
        value: 50,
        color: '#FFC542',
      },
      {
        id: 2,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 2',
        value: 10,
        color: '#FF575F',
      },
      {
        id: 3,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 3',
        value: 20,
        color: '#3DD598',
      },
    ],
    telephone_charges: {
      //telephone_charges detail goes here
    },
    transaction_information: {
      //transaction_information detail goes here
    },
  },
  {
    id: 2,
    icon: require('../assets/male2.png'),
    backgroundColorIcon: '#3ED598',
    name: 'Alice Smith',
    phone: '0962 007 024',
    age: 21,
    address: 'CT1 The Pride, Tố Hữu, La Khê, Hà Đông, Hà Nội',
    credit_scores: [
      {
        id: 1,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 1',
        value: 30,
        color: '#FFC542',
      },
      {
        id: 2,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 2',
        value: 10,
        color: '#FF575F',
      },
      {
        id: 3,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 3',
        value: 20,
        color: '#3DD598',
      },
    ],
    telephone_charges: {
      //telephone_charges detail goes here
    },
    transaction_information: {
      //transaction_information detail goes here
    },
  },
  {
    id: 3,
    icon: require('../assets/female1.png'),
    backgroundColorIcon: '#FF565E',
    name: 'Alice Smith',
    phone: '0962 007 024',
    age: 21,
    address: 'CT1 The Pride, Tố Hữu, La Khê, Hà Đông, Hà Nội',
    credit_scores: [
      {
        id: 1,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 1',
        value: 60,
        color: '#FFC542',
      },
      {
        id: 2,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 2',
        value: 10,
        color: '#FF575F',
      },
      {
        id: 3,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 3',
        value: 20,
        color: '#3DD598',
      },
    ],
    telephone_charges: {
      //telephone_charges detail goes here
    },
    transaction_information: {
      //transaction_information detail goes here
    },
  },
  {
    id: 4,
    icon: require('../assets/female2.png'),
    backgroundColorIcon: '#FFC542',
    name: 'Alice Smith',
    phone: '0962 007 024',
    age: 21,
    address: 'CT1 The Pride, Tố Hữu, La Khê, Hà Đông, Hà Nội',
    credit_scores: [
      {
        id: 1,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 1',
        value: 20,
        color: '#FFC542',
      },
      {
        id: 2,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 2',
        value: 10,
        color: '#FF575F',
      },
      {
        id: 3,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 3',
        value: 20,
        color: '#3DD598',
      },
    ],
    telephone_charges: {
      //telephone_charges detail goes here
    },
    transaction_information: {
      //transaction_information detail goes here
    },
  },
  {
    id: 5,
    icon: require('../assets/male1.png'),
    backgroundColorIcon: '#FFC542',
    name: 'Alice Smith',
    phone: '0962 007 024',
    age: 21,
    address: 'CT1 The Pride, Tố Hữu, La Khê, Hà Đông, Hà Nội',
    credit_scores: [
      {
        id: 1,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 1',
        value: 50,
        color: '#FFC542',
      },
      {
        id: 2,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 2',
        value: 10,
        color: '#FF575F',
      },
      {
        id: 3,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 3',
        value: 20,
        color: '#3DD598',
      },
    ],
    telephone_charges: {
      //telephone_charges detail goes here
    },
    transaction_information: {
      //transaction_information detail goes here
    },
  },
  {
    id: 6,
    icon: require('../assets/male2.png'),
    backgroundColorIcon: '#3ED598',
    name: 'Alice Smith',
    phone: '0962 007 024',
    age: 21,
    address: 'CT1 The Pride, Tố Hữu, La Khê, Hà Đông, Hà Nội',
    credit_scores: [
      {
        id: 1,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 1',
        value: 30,
        color: '#FFC542',
      },
      {
        id: 2,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 2',
        value: 10,
        color: '#FF575F',
      },
      {
        id: 3,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 3',
        value: 20,
        color: '#3DD598',
      },
    ],
    telephone_charges: {
      //telephone_charges detail goes here
    },
    transaction_information: {
      //transaction_information detail goes here
    },
  },
  {
    id: 7,
    icon: require('../assets/female1.png'),
    backgroundColorIcon: '#FF565E',
    name: 'Alice Smith',
    phone: '0962 007 024',
    age: 21,
    address: 'CT1 The Pride, Tố Hữu, La Khê, Hà Đông, Hà Nội',
    credit_scores: [
      {
        id: 1,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 1',
        value: 60,
        color: '#FFC542',
      },
      {
        id: 2,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 2',
        value: 10,
        color: '#FF575F',
      },
      {
        id: 3,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 3',
        value: 20,
        color: '#3DD598',
      },
    ],
    telephone_charges: {
      //telephone_charges detail goes here
    },
    transaction_information: {
      //transaction_information detail goes here
    },
  },
  {
    id: 8,
    icon: require('../assets/female2.png'),
    backgroundColorIcon: '#FFC542',
    name: 'Alice Smith',
    phone: '0962 007 024',
    age: 21,
    address: 'CT1 The Pride, Tố Hữu, La Khê, Hà Đông, Hà Nội',
    credit_scores: [
      {
        id: 1,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 1',
        value: 20,
        color: '#FFC542',
      },
      {
        id: 2,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 2',
        value: 10,
        color: '#FF575F',
      },
      {
        id: 3,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 3',
        value: 20,
        color: '#3DD598',
      },
    ],
    telephone_charges: {
      //telephone_charges detail goes here
    },
    transaction_information: {
      //transaction_information detail goes here
    },
  },
  {
    id: 9,
    icon: require('../assets/male1.png'),
    backgroundColorIcon: '#FFC542',
    name: 'Alice Smith',
    phone: '0962 007 024',
    age: 21,
    address: 'CT1 The Pride, Tố Hữu, La Khê, Hà Đông, Hà Nội',
    credit_scores: [
      {
        id: 1,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 1',
        value: 50,
        color: '#FFC542',
      },
      {
        id: 2,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 2',
        value: 10,
        color: '#FF575F',
      },
      {
        id: 3,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 3',
        value: 20,
        color: '#3DD598',
      },
    ],
    telephone_charges: {
      //telephone_charges detail goes here
    },
    transaction_information: {
      //transaction_information detail goes here
    },
  },
  {
    id: 10,
    icon: require('../assets/male2.png'),
    backgroundColorIcon: '#3ED598',
    name: 'Alice Smith',
    phone: '0962 007 024',
    age: 21,
    address: 'CT1 The Pride, Tố Hữu, La Khê, Hà Đông, Hà Nội',
    credit_scores: [
      {
        id: 1,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 1',
        value: 30,
        color: '#FFC542',
      },
      {
        id: 2,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 2',
        value: 10,
        color: '#FF575F',
      },
      {
        id: 3,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 3',
        value: 20,
        color: '#3DD598',
      },
    ],
    telephone_charges: {
      //telephone_charges detail goes here
    },
    transaction_information: {
      //transaction_information detail goes here
    },
  },
  {
    id: 11,
    icon: require('../assets/female1.png'),
    backgroundColorIcon: '#FF565E',
    name: 'Alice Smith',
    phone: '0962 007 024',
    age: 21,
    address: 'CT1 The Pride, Tố Hữu, La Khê, Hà Đông, Hà Nội',
    credit_scores: [
      {
        id: 1,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 1',
        value: 60,
        color: '#FFC542',
      },
      {
        id: 2,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 2',
        value: 10,
        color: '#FF575F',
      },
      {
        id: 3,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 3',
        value: 20,
        color: '#3DD598',
      },
    ],
    telephone_charges: {
      //telephone_charges detail goes here
    },
    transaction_information: {
      //transaction_information detail goes here
    },
  },
  {
    id: 12,
    icon: require('../assets/female2.png'),
    backgroundColorIcon: '#FFC542',
    name: 'Alice Smith',
    phone: '0962 007 024',
    age: 21,
    address: 'CT1 The Pride, Tố Hữu, La Khê, Hà Đông, Hà Nội',
    credit_scores: [
      {
        id: 1,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 1',
        value: 20,
        color: '#FFC542',
      },
      {
        id: 2,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 2',
        value: 10,
        color: '#FF575F',
      },
      {
        id: 3,
        legendFontColor: '#96A7AF',
        legendFontSize: 15,
        name: 'value 3',
        value: 20,
        color: '#3DD598',
      },
    ],
    telephone_charges: {
      //telephone_charges detail goes here
    },
    transaction_information: {
      //transaction_information detail goes here
    },
  },
];
