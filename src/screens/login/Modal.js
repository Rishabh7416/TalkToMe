import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {
  signInWithPhoneNumberOtp,
  _verification,
} from '../../utils/authFunction';
import React, {useState} from 'react';
import styles from '../login/loginStyle';
import LocalImages from '../../utils/localImages';
import CustomButton from '../../components/button/customButton';
import {useNavigation} from '@react-navigation/native';

const initialState = {
  users: [],
  inputText: '',
  confrimOtp: null,
  switchFunction: false,
  selection: {start: 0, end: 0},
};

function reducer(state, action) {
  switch (action.type) {
    case 'USERS':
      return {...state, users: action.usersPayload};
    case 'SELECTIONS':
      return {...state, switchFunction: action.switchFunctionPayload};
    case 'INPUT_TEXT':
      return {...state, inputText: action.inputPayload};
    case 'CONFIRM_OTP':
      return {...state, confrimOtp: action.otpResponsePayload};
    case 'SWITCH_FUNCTION':
      return {...state};
    default:
      return null;
  }
}

const Modal = ({callback}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  console.log('state', state);
  const keypadArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, '+', 0, -1];
  const [inputText, setInputText] = useState('');
  const [selection, setSelection] = useState({start: 0, end: 0});
  const navigation = useNavigation();

  const onPress = item => {
    if (item === -1 && selection !== null) {
      let tempText = inputText?.split('');
      selection.start > 0 && tempText.splice(selection.start - 1, 1);
      setInputText(tempText.join(''));
      selection.start > 0 &&
        setSelection({start: selection.start - 1, end: selection.end - 1});
    } else if (item === -1) {
      setInputText(inputText.substring(0, inputText.length - 1));
    } else {
      let tempText = inputText?.split('');
      setSelection({start: selection.start + 1, end: selection.end + 1});
      setInputText(inputText.concat(item));
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

  const verification = () => {
    if (count == false) {
      signInWithPhoneNumberOtp(
        inputText,
        otpResponse => {
          dispatch({type: 'SWITCH_FUNCTION', switchFunctionPayload: true});
          dispatch({type: 'INPUT_TEXT', inputPayload: ''});
          dispatch({type: 'CONFIRM_OTP', otpResponsePayload: otpResponse});
        },
        error => {
          console.log('error from the verification if catch', error);
        },
      );
    } else {
      _verification(
        inputText,
        confrimOtp,
        user => {
          dispatch({type: 'SWITCH_FUNCTION', switchFunctionPayload: false});
          dispatch({type: 'USERS', usersPayload: [...users, user.user._user]});
          callback(true);
          navigation.navigate('routes');
          console.log('user', user);
        },
        error => {
          console.log('verification function catch', error);
        },
      );
    }
  };

  const collection = () => {
    
  };

  return (
    <View style={styles.modalMainView}>
      <View style={styles.text1View}>
        <Text style={styles.text1}>Enter your mobile number</Text>
      </View>
      <Text style={styles.text2}>We will send your confirmation code</Text>
      <TextInput
        value={inputText}
        style={styles.textInputStyle}
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
        onPress={verification}
      />
      <View style={styles.bottomTextView}>
        <Text style={styles.bottomText}>
          By Creating passcode you agree with our{' '}
          <Text style={styles.bottomHighlightText}>Terms & Conditions</Text> and{' '}
          <Text
            onPress={() => verification()}
            style={styles.bottomHighlightText}>
            Privacy Policy
          </Text>{' '}
        </Text>
      </View>
    </View>
  );
};

export default Modal;
