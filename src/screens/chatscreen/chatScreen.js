import React from 'react';
import {useSelector} from 'react-redux';
import {View, Image} from 'react-native';
import {styles} from './chatScreenStyles';
import LocalImages from '../../utils/localImages';
import MainHeader from '../../components/headers/mainHeader';
import {useNavigation, useRoute} from '@react-navigation/native';
import {messageToFirestore, renderMessageList} from '../../utils/fireStore';
import {Bubble, GiftedChat, InputToolbar, Send} from 'react-native-gifted-chat';

export default function ChatScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const [messages, setMessages] = React.useState([]);
  const users = useSelector(Store => Store.slice_reducer);

  const roomid =
    users.users.uid > route.params.uid
      ? `${users.users.uid}-${route.params.uid}`
      : `${route.params.uid}-${users.users.uid}`;

  React.useLayoutEffect(() => {
    renderMessageList(roomid, users.users.uid, msgResult =>
      setMessages(msgResult),
    );
  }, []);

  const onSend = React.useCallback((messages = []) => {
    const msg = messages[0];
    const myMesssage = {
      ...msg,
      sentBy: users.users.uid,
      sentTo: route.params.uid,
      deletedBy: '',
      sent: true,
      received: false,
      deletedForEveryOne: false,
      createdAt: new Date().getTime(),
    };
    messageToFirestore(roomid, myMesssage._id, myMesssage);
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderBubble = props => (
    <Bubble
      {...props}
      textStyle={{
        left: {color: '#383737'},
        right: {color: '#017665'},
      }}
      wrapperStyle={{
        left: styles.leftUser,
        right: styles.rightUser,
      }}
    />
  );

  const renderInputToolbar = props => (
    <InputToolbar {...props} containerStyle={styles.containerStyle} />
  );

  const onrenderSend = props => {
    return (
      <Send {...props}>
        <Image source={LocalImages.sendIcon} style={{height: 25, width: 25}} />
      </Send>
    );
  };

  return (
    <View style={{flex: 1}}>
      <MainHeader
        name = {route.params.userName}
        handleNavigation = {() => navigation.goBack()}
        images = {route.params.avatar}
        chatScreenPhoneIcon = {LocalImages.phoneIcon}
      />
      <GiftedChat
        messages={messages}
        minInputToolbarHeight={50}
        placeholder={'Send Message'}
        user={{_id: users.users.uid, avatar: route.params.avatar}}
        onSend={messages => onSend(messages)}
        renderSend={onrenderSend}
        renderBubble={renderBubble}
        renderInputToolbar={renderInputToolbar}
      />
    </View>
  );
}
