import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {mainHeaderStyles} from './mainHeaderStyles';

export default function Header({
  handleNavigation,
  name,
  images,
  chatScreenPhoneIcon,
}) {
  const addFunction = () => {
    let arr = [];
  };

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
        <Image
          source={{uri: images}}
          style={
            images
              ? mainHeaderStyles.profileImageStyle
              : mainHeaderStyles.headerStyle
          }
        />
        <Text
          style={
            name == 'Chat'
              ? mainHeaderStyles.textHeaderStyle
              : mainHeaderStyles.textStyle
          }>
          {name}
        </Text>
        <Text>{'online'}</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity>
          <Image
            source={chatScreenPhoneIcon}
            style={{
              height: 32,
              width: 32,
              backgroundColor: 'black',
              resizeMode: 'contain',
              marginHorizontal: 40,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={chatScreenPhoneIcon}
            style={{
              height: 32,
              width: 32,
              backgroundColor: 'black',
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
