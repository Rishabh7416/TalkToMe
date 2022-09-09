import { View, Text,StyleSheet,TouchableOpacity,Image,Platform } from 'react-native'
import React from 'react'
import ImagePicker from 'react-native-image-crop-picker'
import { normalize,vh,vw } from '../utils/dimensions'


const AddImage = ({imagePath,getImagePath,mainView,imageStyle}) => {
    

  return (
    <TouchableOpacity style={styles.mainView} onPress={()=>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
              getImagePath(image)
          });
          
    }} >
        <Image 
        style={styles.imageStyle}
        source={{uri:imagePath}}
        />
    </TouchableOpacity>
  )
}

export default AddImage

const styles = StyleSheet.create({
    mainView:{
        height: vh(110),
        width:vw(110),
        borderWidth:0.4,
        borderRadius:normalize(15),
        overflow:'hidden',
        marginTop:vh(30),
       alignSelf:'center',
    },
    imageStyle:{
        width:'100%',
        height:"100%"}
})