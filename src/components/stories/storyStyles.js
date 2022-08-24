import {StyleSheet} from 'react-native';
import { vh, vw, normalize } from '../../utils/dimensions';

export const storyStyles = StyleSheet.create({
  imageStyle: {
    height: vw(48),
    width: vw(48),
    borderRadius: normalize(100 / 2),
    marginRight: vw(16),
  },
  mainContainer:{
    paddingHorizontal: vw(20),
    marginVertical: vh(15),
  }
});
