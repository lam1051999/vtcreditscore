import {StyleSheet} from 'react-native';
import {
  SIGNIN_IMAGE_WIDTH,
  SIGNIN_IMAGE_HEIGHT,
  SCREEN_WIDTH,
  SIGN_IN_LAYOUT_ITEMS_HEIGHT,
} from '../../../constants/Constants';

export const SignInStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 30,
    paddingVertical: 10,
    alignItems: 'center',
  },
  image: {
    width: SIGNIN_IMAGE_WIDTH,
    height: SIGNIN_IMAGE_HEIGHT,
  },
  detailWrapper: {
    width: '100%',
  },
  welcomeText: {
    fontSize: SIGN_IN_LAYOUT_ITEMS_HEIGHT.WELCOME_TEXT_FONTSIZE,
    color: '#444242',
    fontFamily: 'Roboto-Bold',
    marginVertical: 10,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    height: SIGN_IN_LAYOUT_ITEMS_HEIGHT.TEXT_INPUT_HEIGHT,
  },
  textInputIconContainer: {
    backgroundColor: '#625B39',
    justifyContent: 'center',
    alignItems: 'center',
    width: SIGN_IN_LAYOUT_ITEMS_HEIGHT.TEXT_INPUT_HEIGHT,
    height: SIGN_IN_LAYOUT_ITEMS_HEIGHT.TEXT_INPUT_HEIGHT,
    borderRadius: 3,
    marginRight: 10,
  },
  textInput: {
    fontFamily: 'Roboto-Regular',
    fontSize: 17,
    //60 is horizontal padding, 55 is 45 iconContainer's width + 10 marginRight
    width: SCREEN_WIDTH - 60 - 55,
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
  },
  showHideIcon: {
    position: 'absolute',
    right: 0,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: SIGN_IN_LAYOUT_ITEMS_HEIGHT.BUTTON_HEIGHT,
    backgroundColor: '#3ED598',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    marginRight: 10,
    fontFamily: 'Roboto-Regular',
  },
});
