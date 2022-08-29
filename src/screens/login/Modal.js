import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../utils/colors';
import CustomButton from '../../components/button/customButton';
import LocalImages from '../../utils/localImages';
import {vw, normalize, vh} from '../../utils/dimensions';
import {OtpVerification} from '../../utils/authFunction';
import {PhoneNumberSignIn} from '../../utils/authFunction';
import {useNavigation} from '@react-navigation/native';

const Modal = props => {
  const keypadArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, '+', 0, -1];
  const navigation = useNavigation();
  const [inputText, setInputText] = useState('');
  const [selection, setSelection] = useState({start: 0, end: 0});
  const [confrimOtp, setConfirmOtp] = useState(null);

  const onPress = item => {
    console.log(selection);
    if (item === -1 && selection !== null) {
      let tempText = inputText?.split('');
      console.log('temp arr', tempText);
      console.log(
        'data',
        selection.start - 1,
        selection.end - (selection.start - 1),
      );
      selection.start > 0 &&
        tempText.splice(
          selection.start - 1,
          selection.end - (selection.start - 1),
        );

      console.log('tempdeleted', tempText);
      setInputText(tempText.join(''));

      selection.start > 0 &&
        setSelection({start: selection.start - 1, end: selection.end - 1});
    } else if (item === -1) {
      setInputText(inputText.substring(0, inputText.length - 1));
    } else {
      let tempText = inputText?.split('');
      tempText.splice(selection.start, 0, item);
      console.log(tempText.join(''));
      setSelection({start: selection.start + 1, end: selection.end + 1});

      setInputText(tempText.join(''));
    }
  };
  const keypadBtnView = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.renderBtnView}
        onPress={() => onPress(item)}>
        {item === -1 ? (
          <Image style={styles.keypadBtn} source={LocalImages.backBtn} />
        ) : (
          <Text style={styles.keypadBtnText}>{item}</Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.modalMainView}>
      <View style={styles.text1View}>
        <Text style={styles.text1}>{props.EnterText}</Text>
      </View>

      <Text style={styles.text2}>{props.WeWillText}</Text>
      <TextInput
        value={inputText}
        style={styles.textInputStyle}
        showSoftInputOnFocus={false}
        onSelectionChange={({nativeEvent: {selection}}) => {
          console.log({selection}.selection.start);
          setSelection(selection);
        }}
      />

      <FlatList
        data={keypadArray}
        contentContainerStyle={styles.flatlistStyle}
        numColumns={3}
        renderItem={keypadBtnView}
      />

      <CustomButton
        ViewStyle={styles.btnStyle}
        textStyle={styles.btnTextStyle}
        text={'Next'}
      />
      <View style={styles.bottomTextView}>
        <Text style={styles.bottomText}>
          By Creating passcode you agree with our{' '}
          <Text style={styles.bottomHighlightText}>Terms & Conditions</Text> and{' '}
          <Text style={styles.bottomHighlightText}>Privacy Policy</Text>{' '}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalMainView: {
    backgroundColor: colors.primaryWhite,
    height: vh(600),
    marginTop: 'auto',
    padding: normalize(20),
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
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

export default Modal;
