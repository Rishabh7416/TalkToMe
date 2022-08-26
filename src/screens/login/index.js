import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import loginStyle from './loginStyle';
import LocalImages from '../../utils/localImages';
import Modal from 'react-native-modal';
import ModalView from './Modal';
import CustomButton from '../../components/button/customButton';
const LoginScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
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
        <View style={loginStyle.bigTextView} >
        <Text  style={loginStyle.bigText}>Let’s Get Started</Text>
        </View>
        <Text style={loginStyle.descriptionText}>
        Connect with each other while chatting or calling. Enjoy safe and
        private texting
      </Text>
    
      <CustomButton onPress={()=>(
        console.log('press')
      )}
      ViewStyle={loginStyle.btnStyle}
      text={'Join Now'}
      />

      <View style={loginStyle.AreadyLoginViewStyle}>
        <Text style={loginStyle.loginText1}>
          {' '}
          {'Already have an account? '}
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setModalVisible(!isModalVisible);
          }}>
          <Text style={loginStyle.loginText2}>{'Login'}</Text>
        </TouchableOpacity>
      </View>
      </View>
   

      <Modal
        animationOut={'slideOutDown'}
        animationIn={'slideInUp'}
        style={{marginBottom:0,marginHorizontal:0,}}
        onBackdropPress={() => {
          setModalVisible(false)
        }}
        isVisible={isModalVisible}>
        <ModalView />
      </Modal>
    </View>
  );
};

export default LoginScreen;
