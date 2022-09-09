import React, {useEffect} from 'react';
import {faker} from '@faker-js/faker';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import {chatListStyles} from '../chat/chatListStyles';
import {useNavigation, useRoute} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {View, Text, Image, TouchableOpacity} from 'react-native';

export default function ContactList() {
  const [userList, setUserList] = React.useState([]);
  const navigation = useNavigation();
  const users = useSelector(Store => Store.slice_reducer);
  console.log('user', users);

  useEffect(() => {
    firestore()
      .collection('Users')
      .onSnapshot(response => {
        const responseResult = response._docs
          .map(element => element.data())
          .filter(element => users.users.uid !== element.uid);
        setUserList(responseResult);
      });
  }, []);

  return (
    <View>
      <FlatList
        data={userList}
        bounces={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('chatscreen', {
                  userName: item.name,
                  uid: item.uid,
                  avatar: faker.image.avatar(),
                })
              }
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
                paddingHorizontal: 10,
              }}>
              <Text style={chatListStyles.userNameStyle}>{item.name}</Text>
              
            </TouchableOpacity>
          );
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
