import React from 'react';
import signUpStyles from './style';
import Modal from 'react-native-modal';
import ModalView from '../login/Modal';
import {useDispatch} from 'react-redux';
import storage from '@react-native-firebase/storage';
import {
  chatStructure,
  setImagetoStorage,
  setRefrence,
  getImageLink,
} from '../../utils/fireStore';
import AddImage from '../../components/AddImage';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {strings} from '../../constants/string';
import CustomButton from '../../components/button/customButton';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import FormTextInput from '../../components/textInput/formTextInput';
import {normalize, vh, vw} from '../../utils/dimensions';
import {aboutUsers} from '../../redux/reducers/reducers';

const SignUpScreen = () => {
  const [userName, setUserName] = React.useState('');
  const [userAbout, setUserAbout] = React.useState('');
  const [imagePath, setImagePath] = React.useState(
    'https://cdn-icons-png.flaticon.com/512/747/747545.png',
  );
  const {
    users: {uid},
  } = useSelector(store => store.slice_reducer);
  const [isModalVisible, setModalVisible] = React.useState(false);
  const reference = storage().ref(`${uid}`);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const modalCallBack = user => {
    setModalVisible(false);
    chatStructure({name: userName, about: userAbout, uid: user.user._user.uid,});
    dispatch(
      aboutUsers({name: userName, about: userAbout, uid: user.user._user.uid}),
    );
  };

  const addImageCallBack = image => {
    Platform.OS === 'ios'
      ? setImagePath(image.sourceURL)
      : setImagePath(image.path);
    console.log('addImage and path', imagePath);
    setImagetoStorage(imagePath, reference, imageLink => {
      console.log(imageLink);
      setImagePath(imageLink);
    });
    console.log('ref', reference);
  };
  return (
    <View style={signUpStyles.main}>
      <View style={signUpStyles.secondViewStyle}>
        <Text style={signUpStyles.createText}>{strings.CreateAcc}</Text>
        <Text style={signUpStyles.connectText}>
          {strings.ConnectWithFriends}
        </Text>

        <AddImage
          imagePath={imagePath}
          getImagePath={addImageCallBack}
        />

        <Text style={signUpStyles.inputTitleText}>Name</Text>
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
          onPress={() => {
            console.log('Onpress');
            chatStructure({
              name: userName,
              about: userAbout,
              profileImage: imagePath,
              uid: uid,
            });
            navigation.navigate('routes');
          }}
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
