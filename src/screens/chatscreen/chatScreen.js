import React from 'react';
import {
  Bubble,
  GiftedChat,
  InputToolbar,
} from 'react-native-gifted-chat';
import {useSelector} from 'react-redux';
import colors from '../../utils/colors';
import {styles} from './chatScreenStyles';
import {useRoute} from '@react-navigation/native';
import {messageToFirestore, renderMessageList} from '../../utils/fireStore';

export default function ChatScreen() {
  const route = useRoute();
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
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
  }, []);

  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        textStyle={{
          left: {color: colors.messagetLeftTextDarkerGreen},
          right: {color: colors.messagetRightTextDarkerGreen},
        }}
        wrapperStyle={{
          left: styles.leftUser,
          right: styles.rightUser,
        }}
      />
    );
  };

  const renderInputToolbar = props => {
    return <InputToolbar {...props} containerStyle={styles.containerStyle} />;
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: users.users.uid,
      }}
      renderBubble={props => renderBubble(props)}
      renderInputToolbar={props => renderInputToolbar(props)}
      placeholder={'Type something'}
    />
  );
}
