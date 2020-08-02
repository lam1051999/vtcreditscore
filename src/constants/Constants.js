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
