import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {strings} from '../../constants/string';
import signUpStyles from './style';
import FormTextInput from '../../components/textInput/formTextInput';
import CustomButton from '../../components/button/customButton';
import Modal from 'react-native-modal';
import ModalView from '../login/Modal';
import { useDispatch } from 'react-redux';
import storage from '@react-native-firebase/storage'
import { chatStructure,setImagetoStorage,setRefrence,getImageLink } from '../../utils/fireStore';
import AddImage from '../../components/AddImage';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
const SignUpScreen = () => {

  const [userName, setUserName] = React.useState('');
  const [userAbout, setUserAbout] = React.useState('');
  const [imagePath,setImagePath]=React.useState('https://cdn-icons-png.flaticon.com/512/747/747545.png')
  const {users:{uid}}=useSelector((store)=>store.slice_reducer)
  const [isModalVisible, setModalVisible] = React.useState(false);
  const reference=storage().ref(`${uid}`)
 

const navigation=useNavigation();



   const  addImageCallBack = (image) => {
   Platform.OS==='ios'?setImagePath(image.sourceURL):setImagePath(image.path)
    console.log('addImage and path',imagePath)
     setImagetoStorage(imagePath,reference,(imageLink)=>{console.log(imageLink) 
      setImagePath(imageLink)
    })
    console.log('ref' ,reference)
  
  }
  return (
    <View style={signUpStyles.main}>
      <View style={signUpStyles.secondViewStyle}>
        <Text style={signUpStyles.createText}>{strings.CreateAcc}</Text>
        <Text style={signUpStyles.connectText}>
          {strings.ConnectWithFriends}
        </Text>

        <AddImage imagePath={imagePath} getImagePath={(image)=>addImageCallBack(image)}/>

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
            console.log('Onpress')
            chatStructure({name:userName,about:userAbout,profileImage:imagePath,uid:uid})
           navigation.navigate('routes')
          }}
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
        <ModalView callBack={(user)=>modalCallBack(user)} />
      </Modal>
    </View>
  );
};

export default SignUpScreen;
