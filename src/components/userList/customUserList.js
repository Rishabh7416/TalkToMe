import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';

export default function CustomUserList({
  bounces,
  userData,
  mainContainer,
  userNameStyle,
  detailsContainer,
  userMessageStyle,
  userProfileImage,
  ListEmptyComponent,
  listHeaderComponent,
  createRoomAndNavigation,
}) {
  function renderItem({item}) {
    // console.log('item', item);
    return (
      <TouchableOpacity
        style={detailsContainer}
        onPress={createRoomAndNavigation}>
        <TouchableOpacity>
          <Image source={{uri: item.profilePic}} style={userProfileImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={createRoomAndNavigation}>
          {/* <Text style={userNameStyle}>{item.}</Text> */}
          <Text style={userMessageStyle}>{item.message}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
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
        ListEmptyComponent={ListEmptyComponent}
      />
    </View>
  );
}
