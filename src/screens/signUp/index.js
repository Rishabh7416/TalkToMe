import React from 'react';
import signUpStyles from './style';
import Modal from 'react-native-modal';
import ModalView from '../login/Modal';
import {strings} from '../../constants/string';
import {chatStructure} from '../../utils/fireStore';
import CustomButton from '../../components/button/customButton';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import FormTextInput from '../../components/textInput/formTextInput';
import {normalize, vh, vw} from '../../utils/dimensions';
import {useDispatch} from 'react-redux';
import {aboutUsers} from '../../redux/reducers/reducers';

const SignUpScreen = () => {
  const [userName, setUserName] = React.useState('');
  const [userAbout, setUserAbout] = React.useState('');
  const [isModalVisible, setModalVisible] = React.useState(false);
  const dispatch = useDispatch();

  const modalCallBack = user => {
    setModalVisible(false);
    chatStructure({name: userName, about: userAbout, uid: user.user._user.uid});
    dispatch(
      aboutUsers({name: userName, about: userAbout, uid: user.user._user.uid}),
    );
  };

  return (
    <View style={signUpStyles.main}>
      <Image
        source={require('../../assets/images/signUpUI.png')}
        style={{height: 240, width: 240, alignSelf: 'center'}}
      />
      <View style={signUpStyles.secondViewStyle}>
        <Text style={signUpStyles.createText}>{strings.CreateAcc}</Text>
        <Text style={signUpStyles.connectText}>
          {strings.ConnectWithFriends}
        </Text>
        <Image
          source={require('../../assets/images/inactive-user.png')}
          style={styles.userProfileIcon}
        />
        <Image
          source={require('../../assets/images/inactive-userInfo.png')}
          style={styles.userInfoIcon}
        />
        <FormTextInput
          onChangeText={txt => setUserName(txt)}
          placeholder={'Username'}
          textInputView={signUpStyles.nameInputView}
          inpuStyle={signUpStyles.inpuStyle}
          maxLength={26}
          multiline={false}
        />
        <FormTextInput
          onChangeText={txt => setUserAbout(txt)}
          multiline={true}
          placeholder={'About you...'}
          textInputView={signUpStyles.aboutInputView}
          inpuStyle={signUpStyles.inpuStyle}
          maxLength={100}
        />
        <CustomButton
          text={'Join'}
          ViewStyle={signUpStyles.btnStyle}
          textStyle={signUpStyles.btnTextStyle}
          onPress={() => setModalVisible(true)}
        />
        <Text style={signUpStyles.AreadyLoginViewStyle}>
          {'Already have an account? '}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setModalVisible(!isModalVisible)}>
            <Text style={signUpStyles.loginText2}>{'Login'}</Text>
          </TouchableOpacity>
        </Text>
      </View>
      <Modal
        animationOut={'slideOutDown'}
        animationIn={'slideInUp'}
        style={{marginBottom: 0, marginHorizontal: 0}}
        onBackdropPress={() => setModalVisible(false)}
        isVisible={isModalVisible}>
        <ModalView
          callBack={user => modalCallBack(user)}
          userDetails={userAbout}
        />
      </Modal>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  userInfoIcon: {
    height: vw(20),
    width: vw(20),
    alignSelf: 'center',
    position: 'absolute',
    left: vw(45),
    top: vh(172),
  },
  userProfileIcon: {
    height: vw(20),
    width: vw(20),
    alignSelf: 'center',
    // position: 'absolute',
    right: normalize(140),
    top: normalize(35),
  },
});
