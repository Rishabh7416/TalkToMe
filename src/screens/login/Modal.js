import {View, Text, StyleSheet,FlatList,TouchableOpacity,TextInput} from 'react-native';
import React from 'react';
import colors from '../../utils/colors';
import CustomButton from '../../components/button/customButton';
import {vw, normalize, vh} from '../../utils/dimensions';
import { OtpVerification } from '../../utils/authFunction';
const Modal = () => {

  const keypadArray=[1,2,3,4,5,6,7,8,9,0,-1]

  const keypadBtnView=({item})=>{

    console.log(item);

    return (
      <TouchableOpacity
        style={styles.renderBtnView
         }>
        <Text style={{fontSize: 23}}>{item}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.modalMainView}>
      <View style={styles.text1View}>
        <Text style={styles.text1}>Enter your mobile number</Text>
      </View>

      <Text style={styles.text2}>We will send your confirmation code</Text>
      <TextInput style={styles.textInputStyle}/>
     <FlatList
     data={keypadArray}
    //  horizontal={true}
    contentContainerStyle={{alignItems:'flex-end',width: vw(324),height:vw(400)}}
     numColumns={3}
     renderItem={keypadBtnView}
     />

     <CustomButton 
     ViewStyle={styles.btnStyle}
     onPress={()=>{console.log('nextpress')}}
     text={'Next'}
     />
    

    </View>
  );
};

const styles = StyleSheet.create({
  modalMainView: {
    backgroundColor: colors.primaryWhite,
    height: 450,
    marginTop: 'auto',
    padding: 20,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  text1View: {
    height: vw(72),
    width: vw(186),
  },
  text1: {
    fontSize: 24,
    fontWeight: '500',
  },
  text2:{
    color:'#989898',
    marginTop:10,
    fontSize:12,
  },
  textInputStyle:{
    height:vw(60),
    width:vw(320),
    // backgroundColor:'grey',as
    marginVertical:normalize(20),
    fontSize:30,
  },
  renderBtnView: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
    height: vw(60),
    width: vw(106),
  },
  btnStyle:{
    backgroundColor:colors.primaryColor,
    height: 40,
    width: 280,
    marginTop: 20,
    borderRadius: 6,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',

  }
});

export default Modal;
