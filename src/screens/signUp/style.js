import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import {
  vh,
  normalize,
  vw,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../utils/dimensions';

const signUpStyles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor:colors.primaryColor,
  },
  secondViewStyle: {
    height: vh(SCREEN_HEIGHT),
    width: vh(SCREEN_WIDTH),
    borderTopLeftRadius: normalize(200),
    borderBottomRightRadius: normalize(600),
    // paddingTop: vh(70),
    paddingHorizontal: normalize(40),
    // backgroundColor:colors.primaryWhite,
  },
  createText: {
    // marginTop: normalize(30),
    fontSize: normalize(24),
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  connectText: {
    marginVertical: normalize(10),
    color: 'grey',
    fontSize: normalize(12),
    alignSelf: 'center',
    letterSpacing: 1,
  },
  inputTitleText: {
    marginTop: vh(30),
    fontSize: normalize(16),
    fontWeight: '600',
    letterSpacing: vw(0.5),
  },
  nameInputView: {
    marginVertical: vh(5),
    height: vh(44),
    width: vw(300),
    borderRadius: 5,
    borderBottomWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: vw(20)
  },
  inpuStyle: {
    paddingHorizontal: vw(10),
    fontSize: vh(14),
    letterSpacing: 1
  },
  aboutInputView: {
    marginVertical: vh(30),
    height: vh(44),
    width: vw(300),
    borderRadius: 5,
    borderBottomWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: vw(20)
  },
  btnStyle: {
    height: normalize(43),
    width: normalize(100),
    marginVertical: normalize(30),
    borderRadius: normalize(6),
    backgroundColor: colors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  btnTextStyle: {
    color: colors.primaryWhite,
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 1,
  },
  loginText2: {
    color: colors.primaryColor,
    fontWeight: 'bold',
  },
  AreadyLoginViewStyle: {
    color: 'black',
    fontSize: 15,
    alignSelf: 'center',
    marginTop: vh(20),
    // bottom:vh(2),
  },
});

export default signUpStyles;
