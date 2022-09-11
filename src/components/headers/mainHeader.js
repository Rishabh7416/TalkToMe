import React from 'react';
import {mainHeaderStyles} from './mainHeaderStyles';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import LocalImages from '../../utils/localImages';

export default function MainHeader({
  handleNavigation,
  name,
  images,
  chatScreenPhoneIcon,
  chatScreenVideoCallIcon,
}) {
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
      </TouchableOpacity>
      {name == 'Chat' ? (
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text>Edit Icon</Text>
          {/* <Image
            source={chatScreenPhoneIcon}
            style={mainHeaderStyles.phoneCallIconStyle}
          /> */}
        </TouchableOpacity>
      ) : (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity>
            <Image
              source={LocalImages.phoneCallIcon}
              style={mainHeaderStyles.phoneCallIconStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={LocalImages.videoCallIcon}
              style={mainHeaderStyles.videoCallIconStyle}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
