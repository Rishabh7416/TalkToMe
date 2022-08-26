import React from 'react';
import {View, Image, TextInput, TouchableOpacity} from 'react-native';

export default function CustomTextInput({
  micIcon,
  searchIcon,
  placeholder,
  mainContainer,
  textInputStyle,
  searchFunction,
  placeholderTextColor,
}) {
  return (
    <View style={mainContainer}>
      <Image
        source={searchIcon}
        style={{height: 20, width: 20, resizeMode: 'contain'}}
      />
      <TextInput
        onChangeText={searchFunction}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
        style={textInputStyle}
      />
      <TouchableOpacity>
        <Image
          source={micIcon}
          style={{height: 20, width: 20, resizeMode: 'contain'}}
        />
      </TouchableOpacity>
    </View>
  );
}
