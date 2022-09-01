import {
  Avatar,
  Bubble,
  GiftedChat,
  InputToolbar,
} from 'react-native-gifted-chat';
import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import {useRoute} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';

export default function ChatScreen() {
  const route = useRoute();
  const [messages, setMessages] = React.useState([]);
  const users = useSelector(Store => Store.slice_reducer);

  const roomid =
    users.users.uid > route.params.uid
      ? `${users.users.uid}-${route.params.uid}`
      : `${route.params.uid}-${users.users.uid}`;

  React.useLayoutEffect(() => {
    console.log('users', users);
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
    firestore()
      .collection('ChatRoom')
      .doc(roomid)
      .collection('Messages')
      .doc(myMesssage._id)
      .set({...myMesssage});
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages),
    );
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
    <React.Fragment>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={props => renderBubble(props)}
        renderInputToolbar={props => renderInputToolbar(props)}
        placeholder={'Type something'}
      />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  leftUser: {
    backgroundColor: colors.messageLeftBackgroundColor,
    borderRadius: 100 / 2,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 20,
  },
  rightUser: {
    backgroundColor: colors.messageRightBackgroundColor,
    borderRadius: 100 / 2,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 20,
  },
  containerStyle: {
    // backgroundColor: 'black',
    borderRadius: 100 / 2,
    height: 55,
    justifyContent: 'center',
  },
});
