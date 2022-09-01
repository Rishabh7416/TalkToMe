import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {createRoom, getData} from '../../utils/fireStore';
import {FlatList} from 'react-native-gesture-handler';
import {userData} from '../../constants/localData';
import {chatListStyles} from '../chat/chatListStyles';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

export default function ContactList() {
  const [userList, setUserList] = React.useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    firestore()
      .collection('Users')
      .get()
      .then(response => {
        const responseResult = response._docs.map(element => {
          return element.data();
        });
        setUserList(responseResult);
      })
      .catch(() => {
        console.log('error');
      });
  }, []);

  return (
    <View>
      <FlatList
        data={userList}
        bounces={false}
        renderItem={({item}) => {
          console.log('item', item);
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('chatscreen', {userName: item.name, uid: item.uid})
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
