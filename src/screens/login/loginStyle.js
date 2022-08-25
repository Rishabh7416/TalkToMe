import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.primaryColor,
    justifyContent: 'center',
    // alignItems:'center',
  },
  bigText: {
    fontSize: 45,
    color: 'white',
    marginLeft: 20,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.primaryWhite,
    marginTop: 25,
    marginLeft: 20,
  },
  btnStyle: {
    height: 40,
    width: 280,
    marginTop: 20,
    borderRadius: 6,
    marginHorizontal: 20,
    backgroundColor: colors.primaryWhite,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText1: {
    color: '#C2C2C2',
    fontSize: 15,
  },
  loginText2: {
    color: colors.primaryWhite,
    fontWeight: 'bold',
  },
  AreadyLoginViewStyle: {
    alignSelf: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
  },
  SmileKidImageStyle: {
    position: 'absolute',
    top: 30,
    left: 16,
    height: 113,
    width: 150,
    resizeMode: 'cover',
  },
  HappyCoupleImageStyle: {
    position: 'absolute',
    top: 70,
    right: 10,
    height: 125,
    width: 150,
  },
  WomanInOfficeImageStyle: {
    marginTop: 100,
    marginLeft: 20,
    height: 120,
    width: 150,
  
  },
});
