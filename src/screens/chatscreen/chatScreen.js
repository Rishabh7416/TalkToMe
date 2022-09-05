import React from 'react';
import {
  messageToFirestore,
  renderMessageList,
  typingStatusTrueToFirestore,
  typingStatusFalseToFirestore,
} from '../../utils/fireStore';
import {Image} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from './chatScreenStyles';
import LocalImages from '../../utils/localImages';
import MainHeader from '../../components/headers/mainHeader';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Bubble, GiftedChat, InputToolbar, Send} from 'react-native-gifted-chat';

export default function ChatScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const [messages, setMessages] = React.useState([]);
  const users = useSelector(Store => Store.slice_reducer);
  const [status, setStatus] = React.useState(false);
  console.log('status', status);

  const roomid =
    users.users.uid > route.params.uid
      ? `${users.users.uid}-${route.params.uid}`
      : `${route.params.uid}-${users.users.uid}`;

  React.useLayoutEffect(() => {
    renderMessageList(roomid, users.users.uid, msgResult =>
      setMessages(msgResult),
    );
  }, []);

  const debouncing = (callbackFunction, wait) => {
    let timer;
    return args => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callbackFunction(args);
      }, wait);
      setStatus(true);
    };
  };

  const typingStatus = debouncing(() => {
    typingStatusFalseToFirestore(roomid, users.users.uid);
    setStatus(false);
  }, 2000);

  const isTyping = text => {
    if (text.length > 0) typingStatus(false);
    typingStatusTrueToFirestore(roomid, users.users.uid);
  };

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

  const handleNavigation = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

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
    <React.Fragment>
      <MainHeader
        name={route.params.userName}
        images={route.params.avatar}
        chatScreenPhoneIcon={LocalImages.phoneIcon}
        handleNavigation={handleNavigation}
      />
      <GiftedChat
        messages={messages}
        renderSend={onrenderSend}
        minInputToolbarHeight={50}
        renderBubble={renderBubble}
        placeholder={'Send Message...'}
        onSend={messages => onSend(messages)}
        renderInputToolbar={renderInputToolbar}
        onInputTextChanged={isTyping}
        user={{_id: users.users.uid, avatar: route.params.avatar}}
      />
    </React.Fragment>
  );
}
