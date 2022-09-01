import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import loginStyle from './loginStyle';
import LocalImages from '../../utils/localImages';
import Modal from 'react-native-modal';
import ModalView from './Modal';
import CustomButton from '../../components/button/customButton';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
const LoginScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const modalCallBack = () => {
    console.log('my modal call back funtuon with user uid',user.user._user.uid);
    setModalVisible(false)
// let uid = user.user._user.uid
//   firestore().collection('Users1').doc(uid).set({
//     name:'krishna',
//     uid,
//   })


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
          onPress={() => navigation.navigate('signup')}
          ViewStyle={loginStyle.btnStyle}
          text={'Join Now'}
        />
          </View>


     
          <Text style={loginStyle.AreadyLoginViewStyle}>
            {' '}
            {'Already have an account? '}
            <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setModalVisible(!isModalVisible);
            }}>
            <Text style={loginStyle.loginText2}>{'Login'}</Text>
          </TouchableOpacity>
          </Text>
         

      <Modal
        animationOut={'slideOutDown'}
        animationIn={'slideInUp'}
        style={{marginBottom: 0, marginHorizontal: 0}}
        onBackdropPress={() => {
          setModalVisible(false);
        }}
        isVisible={isModalVisible}>
        <ModalView callBack={() =>setModalVisible(false)} />
      </Modal>
    </View>
  );
};

export default LoginScreen;
