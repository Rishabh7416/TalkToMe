import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { normalize,vh,vw } from '../../utils/dimensions'

const FormTextInput = ({
    placeholder,
    textInputView,
    inpuStyle,
    maxLength,
    multiline,
    onChangeText,
}) => {
  return (
    <View style={textInputView}>
      <TextInput  multiline={multiline}  placeholder={placeholder} numberOfLines={1} maxLength={maxLength} style={inpuStyle}
      onChangeText={(txt)=>onChangeText(txt)}
      />
    </View>
  )
}

export default FormTextInput