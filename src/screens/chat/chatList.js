import React from 'react';
import {useSelector} from 'react-redux';
import {chatListStyles} from './chatListStyles';
import LocalImages from '../../utils/localImages';
import Story from '../../components/stories/story';
import {userData} from '../../constants/localData';
import {useNavigation, useRoute} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import MainHeader from '../../components/headers/mainHeader';
import CustomUserList from '../../components/userList/customUserList';
import CustomTextInput from '../../components/textInput/customTextInput';

export default React.memo(function ChatList() {
  const navigation = useNavigation();
  const users = useSelector(Store => Store.slice_reducer);
  const [userlist, setUserList] = React.useState([]);
  console.log('userlist', userlist);
  const route = useRoute();

  function handleNavigation() {
    navigation.goBack('Contacts');
  }

  function listHeaderComponent() {
    return <Story horizontal={true} />;
  }

  function createRoom() {
    // firestore()
    //   .collection('Users')
    //   .get()
    //   .then(response => {
    //     const resResult = response.docs.map(element => element.data());
    //     // callback(resResult);
    //     setUserList(resResult);
    //   })
    //   .catch(() => {
    //     console.log('error');
    //   });
    navigation.navigate('chatscreen');
  }

  React.useEffect(() => {}, []);

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
