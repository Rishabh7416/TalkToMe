import React from 'react';
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
  const route = useRoute();
  console.log('routes', route.params);
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

  React.useEffect(() => {
    const subscriber = firestore()
      .collection('Users')
      .doc('userDoc')
      .collection('Messages')
      .doc('userMessage')
      .set({
        name: 'Rishabh',
        profile: 'Dev',
      })
      .then(response => {
        console.log('collection created response: ');
      })
      .catch(error => {
        console.log('collection error');
      });

    return () => subscriber;
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
        searchFunction={txt => search(txt)}
        textInputStyle={chatListStyles.textInputStyle}
        mainContainer={chatListStyles.textInputMainContainer}
      />
      <CustomUserList
        bounces={false}
        userData={filteredData}
        listHeaderComponent={listHeaderComponent}
        userNameStyle={chatListStyles.userNameStyle}
        mainContainer={chatListStyles.mainContainer}
        detailsContainer={chatListStyles.detailsContainer}
        userMessageStyle={chatListStyles.userMessageStyle}
        userProfileImage={chatListStyles.userProfileImage}
        contentContainerStyle={chatListStyles.flatlistContainerStyle}
        navigationToChatScreen={() => navigation.navigate('chatscreen')}
      />
    </React.Fragment>
  );
});
