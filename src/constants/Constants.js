import {Dimensions} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
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
export const BASE_URL = 'https://vtproblem.herokuapp.com';
export const BACKGROUNDCOLOR_LIST = ['#FFC542', '#3ED598', '#FF565E'];
export const MALE_ICONS = [
  require('../assets/male1.png'),
  require('../assets/male2.png'),
];
export const FEMALE_ICONS = [
  require('../assets/female1.png'),
  require('../assets/female2.png'),
];
export const UNKNOWN_ICON = require('../assets/unknown.png');
