import {Dimensions} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SIGNIN_IMAGE_WIDTH = SCREEN_WIDTH - 120;
export const SIGNIN_IMAGE_HEIGHT = (SIGNIN_IMAGE_WIDTH * 274) / 318;
export const SIGN_IN_LAYOUT_ITEMS_HEIGHT = {
  WELCOME_TEXT_FONTSIZE: 30,
  TEXT_INPUT_HEIGHT: 45,
  BUTTON_HEIGHT: 50,
};
// 10 = paddingVertical, 3*10 = marginVertical + space convert from fontSize to height, 10 = marginBottom
export const SIGN_IN_LAYOUT_HEIGHT =
  SIGNIN_IMAGE_HEIGHT +
  10 +
  SIGN_IN_LAYOUT_ITEMS_HEIGHT.WELCOME_TEXT_FONTSIZE +
  10 * 3 +
  (SIGN_IN_LAYOUT_ITEMS_HEIGHT.TEXT_INPUT_HEIGHT + 10) * 2 +
  SIGN_IN_LAYOUT_ITEMS_HEIGHT.BUTTON_HEIGHT;
