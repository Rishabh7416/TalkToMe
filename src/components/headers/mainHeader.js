import {View, Text, Image} from 'react-native';
import React from 'react';

export default function MainHeader({
  mainContainer,
  textStyle,
  headerContainer,
}) {
  return (
    <View style={mainContainer}>
      <View style={headerContainer}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/2223/2223615.png',
          }}
          style={{height: 20, width: 20}}
        />
        <Text style={textStyle}>{'Chat'}</Text>
      </View>
    </View>
  );
}
