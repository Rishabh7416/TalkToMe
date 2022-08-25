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
    fontWeight: 'bold',
    fontSize: 26,
    marginLeft: 40,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
