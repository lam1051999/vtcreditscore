import {StyleSheet} from 'react-native';
import {
  SPLASH_SCREEN_IMAGE_WIDTH,
  SPLASH_SCREEN_IMAGE_HEIGHT,
} from '../../../constants/Constants';

export const SplashScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 40,
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    textAlign: 'center',
  },
  slogan: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    textAlign: 'center',
  },
  image: {
    width: SPLASH_SCREEN_IMAGE_WIDTH,
    height: SPLASH_SCREEN_IMAGE_HEIGHT,
    marginTop: 100,
  },
  empty: {
    flexGrow: 1,
  },
  team: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    textAlign: 'center',
  },
});
