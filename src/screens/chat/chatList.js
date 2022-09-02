import React from 'react';
import {useSelector} from 'react-redux';
import {chatListStyles} from './chatListStyles';
import LocalImages from '../../utils/localImages';
import Story from '../../components/stories/story';
import {userData} from '../../constants/localData';
import MainHeader from '../../components/headers/mainHeader';
import {useNavigation, useRoute} from '@react-navigation/native';
import CustomUserList from '../../components/userList/customUserList';
import CustomTextInput from '../../components/textInput/customTextInput';

export default React.memo(function ChatList() {
  const navigation = useNavigation();
  const users = useSelector(Store => Store.slice_reducer);
  // const [userlist, setUserList] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState(users);

  const handleNavigation = () => navigation.goBack('Contacts');
  const listHeaderComponent = () => <Story horizontal={true} />;
  const createRoom = () => navigation.navigate('chatscreen');

  const search = txt => {
    let filtering = users.filter(element => element.message.includes(txt));
    setFilteredData(filtering);
  };

  return (
    <React.Fragment>
      <MainHeader handleNavigation={() => handleNavigation()} name={'Chat'} />
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
