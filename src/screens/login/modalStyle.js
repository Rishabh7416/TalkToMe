import {vw, normalize, vh} from '../../utils/dimensions';
import colors from '../../utils/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modalMainView: {
    backgroundColor: colors.primaryWhite,
    height: vh(600),
    marginTop: 'auto',
    padding: normalize(20),
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  loaderViewStyle: {
    zIndex: 1,
    height: vh(600),
    justifyContent: 'center',
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
    // height: vh(48),
    width: vw(320),
    marginTop: vh(15),
    fontSize: normalize(35),
    textAlign: 'center',
    letterSpacing: 2,
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


export default styles;