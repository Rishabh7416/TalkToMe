import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';

export default function CustomUserList({
  userData,
  mainContainer,
  userNameStyle,
  detailsContainer,
  userMessageStyle,
  userProfileImage,
  listHeaderComponent,
  bounces,
}) {
  function renderItem({item}) {
    return (
      <View style={detailsContainer}>
        <TouchableOpacity>
          <Image source={{uri: item.profilePic}} style={userProfileImage} />
        </TouchableOpacity>
        <View>
          <Text style={userNameStyle}>{item.name}</Text>
          <Text style={userMessageStyle}>{item.message}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={mainContainer}>
      <FlatList
        data={userData}
        renderItem={renderItem}
        ListHeaderComponent={listHeaderComponent}
        showsVerticalScrollIndicator={false}
        bounces={bounces}
      />
    </View>
  );
}
