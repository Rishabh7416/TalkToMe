import {StyleSheet} from 'react-native';
import {vw, vh, normalize} from '../../utils/dimensions';

export const mainHeaderStyles = StyleSheet.create({
  mainContainer: {
    height: vh(42),
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
  headerStyle:{
    marginHorizontal: 10
  }
});
