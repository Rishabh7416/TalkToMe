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
  textInputStyle: {
    height: vh(42),
    fontSize: normalize(14),
    width: '60%',
    lineHeight: vh(21),
    fontWeight: '500',
  },
  textInputMainContainer: {
    alignSelf: 'center',
    width: '90%',
    borderWidth: 0.2,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: vh(15)
  },
});
