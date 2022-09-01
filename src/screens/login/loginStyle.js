import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import { vw,vh, normalize } from '../../utils/dimensions';

export default styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.primaryColor,
    justifyContent: 'center',
  },

  secondView:{
    position:'absolute',
    top:vh(450),
  },
  bigTextView:{
    height:normalize(120),
    width:normalize(250),
    justifyContent:'center',
    paddingHorizontal:normalize(10),
  },

  bigText: {
    fontSize:normalize(45),
    color: 'white',
    marginLeft: vw(20),
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: normalize(16),
    fontWeight: '500',
    color: colors.primaryWhite,
    marginTop: normalize(25),
    marginLeft: normalize(20),
    width: normalize(325),
  },
  btnStyle: {

    height: normalize(53),
    width: normalize(335),
    marginTop: normalize(20),
    borderRadius: normalize(6),
    marginHorizontal: normalize(20),
    backgroundColor: colors.primaryWhite,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText2: {
    color: colors.primaryWhite,
    fontWeight: 'bold',
  },
  AreadyLoginViewStyle: {
    color: '#C2C2C2',
    fontSize: 15,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop:'auto',
    bottom:vh(2),
  },
  SmileKidImageStyle: {
    position: 'absolute',
    top: vh(30),
    left: vh(16),
    height: normalize(140),
    width: normalize(185),
    resizeMode: 'cover',
  },
  HappyCoupleImageStyle: {
    position: 'absolute',
    top: vh(80),
    left: vw(190),
    height: normalize(150),
    width: normalize(180),
  },
  WomanInOfficeImageStyle: {
    position: 'absolute',
    top: vh(220),
    left: vw(40),
    height: normalize(160),
    width: normalize(190),
  },
});
