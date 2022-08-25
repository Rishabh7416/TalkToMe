import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, { useState } from 'react';
import loginStyle from './loginStyle';
import localImages from '../../utils/localImages';
import Modal from 'react-native-modal'
import ModalView from './Modal';
const FirstScreen = () => {

  const [isModalVisible,setModalVisible]=useState(false);

  return (
    <View style={loginStyle.main}>
      <Image
        style={loginStyle.SmileKidImageStyle}
        source={localImages.SmileKid}
      />
      <Image
        style={loginStyle.HappyCoupleImageStyle}
        source={localImages.HappyCouple}
      />

      <Image
        style={loginStyle.WomanInOfficeImageStyle}
        source={localImages.WomanInOffice}
      />

      <Text style={loginStyle.bigText}>Let’s Get Started</Text>
      <Text style={loginStyle.descriptionText}>
        Connect with each other while chatting or calling. Enjoy safe and
        private texting
      </Text>
      <TouchableOpacity activeOpacity={0.7} style={loginStyle.btnStyle}>
        <Text>Join Now</Text>
      </TouchableOpacity>

      <View style={loginStyle.AreadyLoginViewStyle}>
        <Text style={loginStyle.loginText1}>
          {' '}
          {'Already have an account? '}
        </Text>
        <TouchableOpacity activeOpacity={0.7} onPress={() => {setModalVisible(!isModalVisible)}}>
          <Text style={loginStyle.loginText2}>{'Login'}</Text>
        </TouchableOpacity>
      </View>

<Modal 
animationOut={'slideOutUp'}
animationIn={'sli'}
onBackdropPress={() => {
  setModalVisible(false);
}}
isVisible={isModalVisible}

>
<ModalView/>
</Modal>


    </View>
  );
};

export default FirstScreen;
