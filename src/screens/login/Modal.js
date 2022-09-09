import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
  ActivityIndicator,
} from 'react-native';
import {
  signInWithPhoneNumberOtp,
  _verification,
} from '../../utils/authFunction';
import React, {useState} from 'react';
import colors from '../../utils/colors';
import {useDispatch} from 'react-redux';
import {strings} from '../../constants/string';
import LocalImages from '../../utils/localImages';
import {useNavigation} from '@react-navigation/native';
import {addUsers} from '../../redux/reducers/reducers';
import {vw, normalize, vh} from '../../utils/dimensions';
import CustomButton from '../../components/button/customButton';
import styles from './modalStyle';

const Modal = ({callBack, userDetails}) => {
  console.log('userDetails', userDetails);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [count, setCount] = useState(false);
  const [inputText, setInputText] = useState('');
  const [confrimOtp, setConfirmOtp] = useState(null);
  const [loaderState, setLoaderState] = useState(false);
  const keypadArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, '+', 0, -1];
  const [selection, setSelection] = useState({start: 0, end: 0});


  const onPress = item => {
    if (item === -1 && selection !== null) {
      let tempText = inputText?.split('');
      selection.start > 0 &&
        tempText.splice(
          selection.start - 1,
          selection.end - (selection.start - 1),
        );
      setInputText(tempText.join(''));
      selection.start > 0 &&
        setSelection({start: selection.start - 1, end: selection.end - 1});
    } else if (item === -1) {
      setInputText(inputText.substring(0, inputText.length - 1));
    } else {
      let tempText = inputText?.split('');
      tempText.splice(selection.start, 0, item);
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

  const verification = () => {
    if (count == false && inputText.length > 10) {
      setLoaderState(true);
      signInWithPhoneNumberOtp(
        inputText,
        otpResponse => {
          setCount(true);
          setInputText('');
          setSelection({start: 0, end: 0});
          setConfirmOtp(otpResponse);
          setLoaderState(false);
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
          dispatch(addUsers(user.user._user));
          console.log('users', user);
          callBack(user);
          // navigation.navigate('routes', {details: userDetails});
        },
        error => {
          console.log('errro from the verfication else catch', error);
        },
      );
    }
  };

  return (
    <View style={styles.modalMainView}>
      {loaderState && (
        <Text style={styles.loaderViewStyle}>
          <ActivityIndicator color={colors.primaryColor} size={'large'} />
        </Text>
      )}
      <View style={styles.text1View}>
        <Text style={styles.text1}>
          {!count ? strings.EnterMobile : strings.EnterOtp}
        </Text>
      </View>
      <Text style={styles.text2}>
        {!count
          ? strings.WeSendConfirmCode
          : ` ${strings.WeSendToNumber} ${inputText}`}
      </Text>

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
        onPress={verification}
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

export default Modal;
