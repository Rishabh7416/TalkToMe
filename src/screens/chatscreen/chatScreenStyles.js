import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  leftUser: {
    marginVertical: 8,
    backgroundColor: '#e9e9e9',
    // borderRadius: 100 / 2,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 20,
    height: 'auto',
    width: 'auto',
    alignItems: 'center',
    // paddingHorizontal: 10,
    // paddingVertical: 5
  },
  rightUser: {
    marginVertical: 8,
    backgroundColor: '#cfece8',
    // borderRadius: 100 / 2,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 20,
    height: 'auto',
    width: 'auto',
    alignItems: 'center',
    // paddingHorizontal: 5,
    // paddingVertical: 5
  },
  containerStyle: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    borderTopColor: 'white',
  },
});
