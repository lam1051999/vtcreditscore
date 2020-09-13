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
  headerFakeInput: {
    width: SCREEN_WIDTH - 160,
    paddingRight: 20,
    height: 50,
    justifyContent: 'center',
  },
  headerFakeTextInput: {
    fontSize: 17,
    color: '#96A7AF',
    fontFamily: 'Poppins-Regular',
  },
  headerTextInput: {
    fontSize: 17,
    color: 'white',
    width: SCREEN_WIDTH - 190,
    paddingRight: 40,
    fontFamily: 'Poppins-Regular',
  },
  headerRightIconContainer: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#40DF9F',
  },
  errorContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  errorText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color: 'white',
  },
  errorButtonContainer: {
    backgroundColor: '#FF565E',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    borderRadius: 3,
  },
  errorButtonText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color: 'white',
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
    marginBottom: 5,
  },
  label: {
    fontSize: 17,
    fontFamily: 'Poppins-Regular',
    color: '#96A7AF',
    marginLeft: 30,
  },
  name: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: 'white',
    flexGrow: 1,
  },
  infoContainer: {
    justifyContent: 'center',
    paddingLeft: 30,
  },
  infoId: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: 'white',
  },
  divider: {
    height: 5,
    backgroundColor: '#B8C2C0',
    marginVertical: 15,
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
  mobileModalContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
  dataContainer: {
    alignItems: 'center',
  },
  dataTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color: 'white',
  },
  subData: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: 'white',
  },
  data: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 40,
    color: 'white',
  },
  dataLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: 'white',
  },
  subSectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  peopleContainer: {
    width: '50%',
    alignItems: 'center',
  },
  peopleTitle: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 13,
  },
  people: {
    fontFamily: 'Poppins-SemiBold',
    color: 'white',

    fontSize: 25,
    textAlign: 'center',
  },
  peopleLabel: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  backButtonContainer: {
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 5,
  },
  backText: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
  },
  top2Title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    textAlign: 'center',
    color: 'white',
  },
  chartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  chartDetail: {
    paddingHorizontal: 10,
    marginLeft: 10,
  },
  labelChart: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    color: 'white',
  },
  labelChartLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: 'white',
  },
  labelChartDetail: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: 'white',
  },
});

export const UserModalStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    zIndex: 1000,
    borderRadius: 100,
  },
});
