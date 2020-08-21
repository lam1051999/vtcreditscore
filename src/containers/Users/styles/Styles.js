import {StyleSheet} from 'react-native';
import {
  BOTTOMTAB_HEIGHT,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
} from '../../../constants/Constants';

export const CustomersStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: BOTTOMTAB_HEIGHT,
  },
});

export const CustomerStyles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backIcon: {
    width: 45,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  backView: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    zIndex: -1,
  },
});

export const UserModalStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    zIndex: 1000,
  },
});
