import React from 'react';
import { View, Text } from 'react-native';
import {chatListStyles} from './chatListStyles';
import Story from '../../components/stories/story';
import {userData} from '../../constants/localData';
import {LocalImages} from '../../utils/localImages';
import {useNavigation} from '@react-navigation/native';
import MainHeader from '../../components/headers/mainHeader';
import CustomUserList from '../../components/userList/customUserList';
import CustomTextInput from '../../components/textInput/customTextInput';

export default React.memo(function ChatList() {
  const navigation = useNavigation();
  const [filteredData, setFilteredData] = React.useState(userData);

  function handleNavigation() {
    navigation.goBack('Contacts');
  }

  function search(txt) {
    let filtering = userData.filter(element => {
      return element.message.includes(txt);
    });
    setFilteredData(filtering);
  }

  function listHeaderComponent() {
    return (
      <React.Fragment>
        <Story horizontal={true} />
      </React.Fragment>
    );  
  }

  function listEmptyFunction(){
    return(
      // <CustomEmpty/>
      <View>
        <Text>Empty</Text>
      </View>
    )
  }

  return (
    <React.Fragment>
      <MainHeader handleNavigation={() => handleNavigation()} />
      <CustomTextInput
        placeholder="Search here"
        placeholderTextColor={'grey'}
        micIcon={LocalImages.micIcon}
        searchIcon={LocalImages.searchIcon}
        mainContainer={chatListStyles.textInputMainContainer}
        textInputStyle={chatListStyles.textInputStyle}
        searchFunction={txt => search(txt)}
      />
      <CustomUserList
        userData={filteredData}
        userNameStyle={chatListStyles.userNameStyle}
        detailsContainer={chatListStyles.detailsContainer}
        userMessageStyle={chatListStyles.userMessageStyle}
        userProfileImage={chatListStyles.userProfileImage}
        mainContainer={chatListStyles.mainContainer}
        listHeaderComponent={listHeaderComponent}
        contentContainerStyle={chatListStyles.flatlistContainerStyle}
        bounces={false}
        ListEmptyComponent={listEmptyFunction}
        navigationToChatScreen={() => navigation.navigate('chatscreen')}
      />
    </React.Fragment>
  );
});
