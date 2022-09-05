import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import loginStyle from './loginStyle';
import LocalImages from '../../utils/localImages';
import Modal from 'react-native-modal';
import ModalView from './Modal';
import CustomButton from '../../components/button/customButton';
import {useNavigation} from '@react-navigation/native';
import {getData} from '../../utils/fireStore';
const LoginScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    console.log('Join Now Screen');
    getData(res => setUsers(res));
  }, []);

  const checkUser = uid => {
    console.log(Users);
    let userIndex = Users.findIndex(ele => ele.uid === uid);

    if (userIndex >= 0) {
      navigation.navigate('routes');
    } else {
      navigation.navigate('signup');
    }
  };
  const modalCallBack = user => {
    console.log('my modal call back funtuon with user uid', user);
    checkUser(user.user._user.uid);
    setModalVisible(false);
  };

  const navigation = useNavigation();

  return (
    <View style={loginStyle.main}>
      <Image
        style={loginStyle.SmileKidImageStyle}
        source={LocalImages.SmileKid}
      />
      <Image
        style={loginStyle.HappyCoupleImageStyle}
        source={LocalImages.HappyCouple}
      />
      <Image
        style={loginStyle.WomanInOfficeImageStyle}
        source={LocalImages.WomanInOffice}
      />

      <View style={loginStyle.secondView}>
        <View style={loginStyle.bigTextView}>
          <Text style={loginStyle.bigText}>Let’s Get Started</Text>
        </View>
        <Text style={loginStyle.descriptionText}>
          Connect with each other while chatting or calling. Enjoy safe and
          private texting
        </Text>

        <CustomButton
          onPress={() => setModalVisible(true)}
          ViewStyle={loginStyle.btnStyle}
          text={'Join Now'}
        />
      </View>

      <Modal
        animationOut={'slideOutDown'}
        animationIn={'slideInUp'}
        style={{marginBottom: 0, marginHorizontal: 0}}
        onBackdropPress={() => {
          setModalVisible(false);
        }}
        isVisible={isModalVisible}>
        <ModalView callBack={modalCallBack} />
      </Modal>
    </View>
  );
};

export default LoginScreen;
