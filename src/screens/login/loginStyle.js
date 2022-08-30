import {StyleSheet} from 'react-native';
import colors from '../../utils/colors'
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
    height:normalize(110),
    width:normalize(306),
    paddingHorizontal:vw(10),
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
    marginTop:vh(5),
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
  modalMainView: {
    backgroundColor: colors.primaryWhite,
    height: vh(600),
    marginTop: 'auto',
    padding: normalize(20),
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  text1View: {
    height: normalize(72),
    width: normalize(186),
  },
  text1: {
    fontSize: normalize(26),
    fontWeight: '500',
  },
  text2: {
    color: '#989898',
    marginTop: normalize(10),
    fontSize: normalize(12),
  },
  textInputStyle: {
    height: normalize(48),
    width: normalize(320),
    marginVertical: normalize(15),
    fontSize: normalize(32),
    textAlign: 'center',
    letterSpacing: 4,
  },
  renderBtnView: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
    height: vh(60),
    width: vw(106),
  },
  flatlistStyle: {
    paddingRight: normalize(12),
    alignItems: 'flex-end',
    height: vh(260),
  },
  keypadBtn: {
    height: normalize(30),
    width: normalize(30),
  },
  keypadBtnText: {
    fontSize: 23,
  },
  btnStyle: {
    backgroundColor: colors.primaryColor,
    height: normalize(40),
    width: normalize(335),
    marginBottom: vh(10),
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTextStyle: {
    color: colors.primaryWhite,
    fontWeight: '600',
  },
  bottomTextView: {
    alignSelf: 'center',
    height: vh(36),
    width: vw(247),
  },
  bottomText: {
    fontSize: normalize(12),
    textAlign: 'left',
  },
  bottomHighlightText: {
    fontSize: normalize(12),
    fontWeight: 'bold',
  },
});
