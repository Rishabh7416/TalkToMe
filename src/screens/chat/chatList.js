import React from 'react';
import {chatListStyles} from './chatListStyles';
import Story from '../../components/stories/story';
import {userData} from '../../constants/localData';
import {normalize, vh, vw} from '../../utils/dimensions';
import MainHeader from '../../components/headers/mainHeader';
import CustomUserList from '../../components/userList/customUserList';

export default function ChatList() {
  function listHeaderComponent() {
    return (
      <React.Fragment>
        <Story
          horizontal={true}
          mainContainer={{
            paddingHorizontal: vw(20),
            marginVertical: vh(15)
          }}
        />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <MainHeader
        mainContainer={{
          height: vh(42),
          justifyContent: 'space-between',
          paddingHorizontal: vw(20),
          flexDirection: 'row',
        }}
        textStyle={{
          fontWeight: 'bold',
          fontSize: 26,
          marginLeft: 40,
        }}
        headerContainer={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
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
        bounces = {false}
      />
    </React.Fragment>
  );
}
