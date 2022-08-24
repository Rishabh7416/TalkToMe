import {StyleSheet} from 'react-native';
import {vh, vw, normalize} from '../../utils/dimensions';

export const chatListStyles = StyleSheet.create({
  userNameStyle: {
    lineHeight: vh(27),
    fontSize: vw(18),
    fontWeight: '500',
  },
  detailsContainer: {
    flexDirection: 'row',
    marginVertical: vh(15),
    paddingHorizontal: vw(20)
  },
  userMessageStyle: {
    lineHeight: vh(24),
    fontSize: normalize(16),
    color: 'grey',
    fontWeight: 'bold',
  },
  userProfileImage: {
    borderRadius: normalize(100 / 2),
    height: vw(50),
    width: vw(50),
    marginRight: vw(15),
  },
  mainContainer: {
    // flex: 1,
  },
  flatlistContainerStyle:{
    flexDirection: 'row'
  },
  
  
});
