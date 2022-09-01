import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {strings} from '../../constants/string';
import signUpStyles from './style';
import FormTextInput from '../../components/textInput/formTextInput';
import CustomButton from '../../components/button/customButton';
import Modal from 'react-native-modal';
import ModalView from '../login/Modal';
import loginStyle from '../login/loginStyle';
import { addUsers } from '../../redux/reducers/reducers';
import { useDispatch } from 'react-redux';
import { chatStructure } from '../../utils/fireStore';
const SignUpScreen = () => {

  const [userName, setUserName] = React.useState('');
  const [userAbout, setUserAbout] = React.useState('');
  const [isModalVisible, setModalVisible] = React.useState(false);
const dispacth =useDispatch()

  const modalCallBack = (user) => { 
      console.log('modalcallback',user.user._user.uid)
      setModalVisible(false)
      console.log(userName,userAbout)
    chatStructure({name:userName,about:userAbout,uid:user.user._user.uid})
   }

  return (
    <View style={signUpStyles.main}>
      <View style={signUpStyles.secondViewStyle}>
        <Text style={signUpStyles.createText}>{strings.CreateAcc}</Text>
        <Text style={signUpStyles.connectText}>
          {strings.ConnectWithFriends}
        </Text>

        <Text style={signUpStyles.inputTitleText}>Name</Text>
        <FormTextInput
          onChangeText={txt => setUserName(txt)}
          placeholder={'Enter your full name'}
          textInputView={signUpStyles.nameInputView}
          inpuStyle={signUpStyles.inpuStyle}
          maxLength={26}
          multiline={false}
        />
        <Text style={signUpStyles.inputTitleText}>About</Text>
        <FormTextInput
          onChangeText={txt => setUserAbout(txt)}
          multiline={true}
          placeholder={'Tell me about yourslef'}
          textInputView={signUpStyles.aboutInputView}
          inpuStyle={signUpStyles.inpuStyle}
          maxLength={100}
        />

        <CustomButton
          text={'Join'}
          ViewStyle={signUpStyles.btnStyle}
          textStyle={signUpStyles.btnTextStyle}
          onPress={() => {
            console.log('Onpress');
            setModalVisible(true)
          }}
        />
        <Text style={signUpStyles.AreadyLoginViewStyle}>
          {' '}
          {'Already have an account? '}
          <TouchableOpacity
            activeOpacity={0.7}              
            onPress={() => {
              setModalVisible(!isModalVisible);
            }}>
            <Text style={signUpStyles.loginText2}>{'Login'}</Text>
          </TouchableOpacity>
        </Text>
      </View>

      <Modal
        animationOut={'slideOutDown'}
        animationIn={'slideInUp'}
        style={{marginBottom: 0, marginHorizontal: 0}}
        onBackdropPress={() => {
          setModalVisible(false);
        }}
        isVisible={isModalVisible}>
        <ModalView callBack={(user)=>modalCallBack(user)} />
      </Modal>
    </View>
  );
};

export default SignUpScreen;
