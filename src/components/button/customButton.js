import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustomButton(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={props.ViewStyle}
      onPress={props.onPress}>
      <Text style={props.textStyle}>{props.text}</Text>
    </TouchableOpacity>
  );
}
