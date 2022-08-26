import React from 'react';
import {View, FlatList, Image, TouchableOpacity} from 'react-native';
import {userData} from '../../constants/localData';
import {storyStyles} from './storyStyles'

export default function Story({horizontal, mainContainer}) {
  function renderItem({item}) {
    return (
      <TouchableOpacity>
        <Image
          source={{uri: item.profilePic}}
          style={storyStyles.imageStyle}
        />
      </TouchableOpacity>
    );
  }
  
  return (
    <View style = {storyStyles.mainContainer}>
      <FlatList
        data={userData}
        renderItem={renderItem}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
        bounces={false}
      />
    </View>
  );
}
