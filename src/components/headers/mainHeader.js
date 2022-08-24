import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {mainHeaderStyles} from './mainHeaderStyles';

export default function MainHeader({handleNavigation}) {
  return (
    <View style={mainHeaderStyles.mainContainer}>
      <TouchableOpacity
        onPress={handleNavigation}
        style={mainHeaderStyles.headerContainer}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/2223/2223615.png',
          }}
          style={{height: 20, width: 20}}
        />
        <Text style={mainHeaderStyles.textStyle}>{'Chat'}</Text>
      </TouchableOpacity>
    </View>
  );
}
