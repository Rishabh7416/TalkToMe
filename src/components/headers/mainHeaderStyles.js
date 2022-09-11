import {StyleSheet} from 'react-native';
import {vw, vh, normalize} from '../../utils/dimensions';

export const mainHeaderStyles = StyleSheet.create({
  mainContainer: {
    height: vh(50),
    justifyContent: 'space-between',
    paddingHorizontal: vw(20),
    flexDirection: 'row',
  },
  textStyle: {
    fontWeight: '400',
    fontSize: 20,
  },
  textHeaderStyle: {
    fontWeight: 'bold',
    fontSize: 26,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageStyle: {
    height: 35,
    width: 35,
    borderRadius: 100 / 2,
    marginHorizontal: 15,
  },
  headerStyle: {
    marginHorizontal: 10,
  },
  phoneCallIconStyle: {
    height: 27,
    width: 27,
    resizeMode: 'contain',
    marginHorizontal: 40,
  },
  videoCallIconStyle: {
    height: 32,
    width: 32,
    resizeMode: 'contain',
  },
});
