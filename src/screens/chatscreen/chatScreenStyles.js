import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export const styles = StyleSheet.create({
  leftUser: {
    backgroundColor: colors.messageLeftBackgroundColor,
    borderRadius: 100 / 2,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 20,
  },
  rightUser: {
    backgroundColor: colors.messageRightBackgroundColor,
    borderRadius: 100 / 2,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 20,
  },
  containerStyle: {
    // backgroundColor: 'black',
    borderRadius: 100 / 2,
    height: 55,
    justifyContent: 'center',
  },
});
