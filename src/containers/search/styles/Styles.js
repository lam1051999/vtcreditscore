import {StyleSheet} from 'react-native';

export const SearchScreenStyles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
  },
  headerTitleContainer: {
    position: 'relative',
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    textAlign: 'center',
  },
  headerBackIcon: {
    position: 'absolute',
    zIndex: 1000,
  },
  searchInputContainer: {
    position: 'relative',
  },
  searchInputRightIcon: {
    position: 'absolute',
    right: 10,
  },
  searchbarRightContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    height: 40,
  },
  searchbarRightText: {
    fontSize: 17,
    fontFamily: 'Poppins-Regular',
    color: '#90caf9',
  },
  resultStatusText: {
    fontSize: 17,
    fontFamily: 'Poppins-Regular',
    color: 'white',
  },
});
