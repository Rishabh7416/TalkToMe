import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

export const data = ['1', '2', '3', '4'];
export const LocalImages = {
  phoneIcon: require('./src/assets/images/phone.png'),
  backIcon: require('./src/assets/images/backIcon.png'),
  menuIcon: require('./src/assets/images/menuIcon.png'),
  profileIcon: require('./src/assets/images/userImage.png'),
};

export function Header({backIcon, profileImage, phoneIcon, menuIcon}) {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={backIcon}
          style={{height: 20, width: 20, marginHorizontal: 10}}
        />
        <Image source={profileImage} style={{height: 40, width: 40}} />
      </View>
      <Image source={phoneIcon} style={{height: 25, width: 25}} />
      <Image source={menuIcon} style={{height: 25, width: 25}} />
    </View>
  );
}

export function CustomTextInput({placeholder, placeholderTextColor, style}) {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={style}
      />
    </View>
  );
}

export function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <FlatList
        data={data}
        renderItem={function ({item}) {
          return (
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('Chat')}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={LocalImages.profileIcon}
                  style={{height: 30, width: 30}}
                />
                <Text>Rishabh</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

export function ChatScreen() {
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <Header
        backIcon={LocalImages.backIcon}
        profileImage={LocalImages.profileIcon}
        phoneIcon={LocalImages.phoneIcon}
        menuIcon={LocalImages.menuIcon}
      />
    </View>
  );
}

const TopTab = createMaterialTopTabNavigator();
export function Route() {
  return (
    <NavigationContainer>
      <TopTab.Navigator>
        <TopTab.Screen name="Home" component={HomeScreen} />
        <TopTab.Screen name="Chat" component={ChatScreen} />
      </TopTab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <View style={{flex: 1}}>
        <Route />
        <CustomTextInput
          placeholder="Message"
          placeholderTextColor="grey"
          style={{backgroundColor: 'white', height: 40}}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
