import React from 'react';
import {useSelector} from 'react-redux';
import {chatListStyles} from './chatListStyles';
import LocalImages from '../../utils/localImages';
import Story from '../../components/stories/story';
import { userData } from '../../constants/localData';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import MainHeader from '../../components/headers/mainHeader';
import CustomUserList from '../../components/userList/customUserList';
import CustomTextInput from '../../components/textInput/customTextInput';
import { chatStructure } from '../../utils/fireStore';

export default React.memo(function ChatList() {
  const navigation = useNavigation();
  const users = useSelector(Store => Store.slice_reducer);
  console.log('chatLists', users);

  function handleNavigation() {
    navigation.goBack('Contacts');
  }

  function listHeaderComponent() {
    return <Story horizontal={true} />;
  }

  function createRoom() {
    navigation.navigate('chatscreen', {name: users});
  }

  React.useEffect(() => {
    
  }, []);

  return (
    <React.Fragment>
      <MainHeader
        handleNavigation={() => handleNavigation()}
        headerText={'Chat'}
      />
      <CustomTextInput
        placeholder="Search here"
        micIcon={LocalImages.micIcon}
        placeholderTextColor={'grey'}
        searchIcon={LocalImages.searchIcon}
        // searchFunction={txt => search(txt)}
        textInputStyle={chatListStyles.textInputStyle}
        mainContainer={chatListStyles.textInputMainContainer}
      />
      <CustomUserList
        bounces={false}
        // userData={users.users}
        userData={userData}
        listHeaderComponent={listHeaderComponent}
        userNameStyle={chatListStyles.userNameStyle}
        mainContainer={chatListStyles.mainContainer}
        detailsContainer={chatListStyles.detailsContainer}
        userMessageStyle={chatListStyles.userMessageStyle}
        userProfileImage={chatListStyles.userProfileImage}
        contentContainerStyle={chatListStyles.flatlistContainerStyle}
        createRoomAndNavigation={() => createRoom()}
      />
    </React.Fragment>
  );
});

// const route = useRoute();
// const [filteredData, setFilteredData] = React.useState(userData);
// const [filteredData, setFilteredData] = React.useState(users);
// function search(txt) {
//   let filtering = userData.filter(element => {
//     return element.message.includes(txt);
//   });
//   setFilteredData(filtering);
// }
