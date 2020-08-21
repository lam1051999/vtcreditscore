import {StyleSheet} from 'react-native';
import {
  BOTTOMTAB_HEIGHT,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
} from '../../../constants/Constants';

export const DashboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: BOTTOMTAB_HEIGHT,
    position: 'relative',
  },
});

export const DashboardModalStyles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT - 200,
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    zIndex: 1000,
  },
});
