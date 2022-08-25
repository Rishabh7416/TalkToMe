import React from 'react';
import {chatListStyles} from './chatListStyles';
import Story from '../../components/stories/story';
import {userData} from '../../constants/localData';
import { LocalImages } from '../../utils/localImages';
import {useNavigation} from '@react-navigation/native';
import MainHeader from '../../components/headers/mainHeader';
import CustomUserList from '../../components/userList/customUserList';
import CustomTextInput from '../../components/textInput/customTextInput'

export default function ChatList() {
  const navigation = useNavigation();

  function handleNavigation() {
    navigation.goBack('Contacts');
  }

  function listHeaderComponent() {
    return (
      <React.Fragment>
        <Story horizontal={true}/>
      </React.Fragment>
    );
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
      />
      <CustomUserList
        userData={userData}
        userNameStyle={chatListStyles.userNameStyle}
        detailsContainer={chatListStyles.detailsContainer}
        userMessageStyle={chatListStyles.userMessageStyle}
        userProfileImage={chatListStyles.userProfileImage}
        mainContainer={chatListStyles.mainContainer}
        listHeaderComponent={listHeaderComponent}
        contentContainerStyle={chatListStyles.flatlistContainerStyle}
        bounces={false}
      />
    </React.Fragment>
  );
}
