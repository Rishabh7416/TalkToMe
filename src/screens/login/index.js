import ModalView from './Modal';
import loginStyle from './loginStyle';
import Modal from 'react-native-modal';
import colors from '../../utils/colors';
import React, {useState} from 'react';
import LocalImages from '../../utils/localImages';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/button/customButton';
import {View, Text, TouchableOpacity, Image, SafeAreaView} from 'react-native';

const LoginScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  
  const modalCallBack = () => {
    setModalVisible(false);
  };

  return (
    <React.Fragment>
      <SafeAreaView style={{backgroundColor: colors.primaryColor}} />
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
        {/* <Text style={loginStyle.AreadyLoginViewStyle}>
          {' '}
          {'Already have an account? '}
        </Text> */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setModalVisible(!isModalVisible);
          }}>
          <Text style={loginStyle.loginText2}>{'Login'}</Text>
        </TouchableOpacity>

        <Modal
          animationOut={'slideOutDown'}
          animationIn={'slideInUp'}
          style={{marginBottom: 0, marginHorizontal: 0}}
          onBackdropPress={() => {
            setModalVisible(false);
          }}
          isVisible={isModalVisible}>
          <ModalView callBack={() => setModalVisible(false)} />
        </Modal>
      </View>
      <SafeAreaView style={{backgroundColor: colors.primaryColor}} />
    </React.Fragment>
  );
};

export default LoginScreen;



    // let uid = user.user._user.uid
    //   firestore().collection('Users1').doc(uid).set({
    //     name:'krishna',
    //     uid,
    //   })