import {StyleSheet} from 'react-native';
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  CUSTOMERITEM_IMAGE_WIDTH,
  CUSTOMERITEM_IMAGE_HEIGHT,
  CUSTOMER_IMAGE_WIDTH,
  CUSTOMER_IMAGE_HEIGHT,
} from '../../../constants/Constants';

export const CustomersStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  headerSearchContainer: {
    backgroundColor: '#1A282F',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  headerSearchIcon: {
    paddingHorizontal: 15,
  },
  headerTextInput: {
    fontSize: 17,
    color: 'white',
    width: SCREEN_WIDTH - 160,
    paddingRight: 20,
    fontFamily: 'Poppins-Regular',
  },
  headerRightIconContainer: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#40DF9F',
  },
});

export const CustomersItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  imageContainer: {
    borderRadius: 100,
    width: CUSTOMERITEM_IMAGE_HEIGHT + 30,
    height: CUSTOMERITEM_IMAGE_HEIGHT + 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: CUSTOMERITEM_IMAGE_WIDTH,
    height: CUSTOMERITEM_IMAGE_HEIGHT,
  },
  nameContainer: {
    borderBottomColor: '#B8C2C0',
    borderBottomWidth: 0.5,
    flexGrow: 1,
    marginLeft: 20,
    height: CUSTOMERITEM_IMAGE_HEIGHT + 30,
    justifyContent: 'center',
  },
  name: {
    fontSize: 17,
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
  },
});

export const CustomerStyles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  wrapper: {
    paddingHorizontal: 15,
  },
  backIcon: {
    width: 45,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageOutterContainer: {
    borderRadius: 10,
    padding: 10,
    borderColor: '#475E69',
    borderWidth: 1,
    borderStyle: 'dashed',
  },
  imageContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: CUSTOMER_IMAGE_HEIGHT + 20,
    height: CUSTOMER_IMAGE_HEIGHT + 20,
  },
  image: {
    width: CUSTOMER_IMAGE_WIDTH,
    height: CUSTOMER_IMAGE_HEIGHT,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingRight: 20,
    backgroundColor: '#286053',
    borderRadius: 10,
  },
  vnflag: {
    width: 35,
    height: 25,
    marginRight: 10,
  },
  phonePrefix: {
    fontFamily: 'Poppins-Regular',
    color: '#3DD598',
  },
  phoneSuffix: {
    fontFamily: 'Poppins-Regular',
    color: '#96A7AF',
    flexGrow: 1,
    marginLeft: 20,
    fontSize: 17,
  },
  ageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 17,
    fontFamily: 'Poppins-Regular',
    color: '#96A7AF',
    marginLeft: 30,
  },
  name: {
    fontSize: 25,
    fontFamily: 'Poppins-Regular',
    color: 'white',
    flexGrow: 1,
    marginLeft: 30,
  },
  divider: {
    height: 5,
    backgroundColor: '#B8C2C0',
    marginVertical: 15,
  },
  chartContainer: {
    backgroundColor: '#30444E',
    borderRadius: 20,
  },
  chartTitle: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Poppins-Regular',
    position: 'absolute',
    top: 0,
    right: 70,
  },
  mobileFeeContainer: {
    backgroundColor: '#30444E',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: 10,
  },
  mobileFeeIconContainer: {
    backgroundColor: '#96A7AF',
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 40,
    marginLeft: 30,
  },
  mobileFeeText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color: 'white',
    flexGrow: 1,
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
