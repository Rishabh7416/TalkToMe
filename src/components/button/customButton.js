import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustomButton({ViewStyle, onPress, textStyle, text}) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={ViewStyle} onPress={onPress}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
}
