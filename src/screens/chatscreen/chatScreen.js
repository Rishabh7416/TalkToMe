import React from 'react';
import {
  renderMessageList,
  messageToFirestore,
  typingStatusTrueToFirestore,
  typingStatusFalseToFirestore,
  renderStatus,
} from '../../utils/fireStore';
import {useSelector} from 'react-redux';
import {styles} from './chatScreenStyles';
import {Image, AppState} from 'react-native';
import LocalImages from '../../utils/localImages';
import firestore from '@react-native-firebase/firestore';
import MainHeader from '../../components/headers/mainHeader';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Bubble, GiftedChat, InputToolbar, Send} from 'react-native-gifted-chat';

export default function ChatScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const [status, setStatus] = React.useState(false);
  const [messages, setMessages] = React.useState([]);
  const users = useSelector(Store => Store.slice_reducer);
  const userAbout = useSelector(Store => Store.about_reducer);

  React.useLayoutEffect(() => {
    renderMessageList(roomid, users.users.uid, msgResult =>
      setMessages(msgResult),
    );
    const listener = renderStatus(roomid, route.params.uid, status => {
      setStatus(status);
    });
    return listener;
  }, []);

  const roomid =
    users.users.uid > route.params.uid
      ? `${users.users.uid}-${route.params.uid}`
      : `${route.params.uid}-${users.users.uid}`;

  const debouncing = (callbackFunction, wait) => {
    let timer;
    return args => {
      if (args.length > 0) typingStatusTrueToFirestore(roomid, users.users.uid);
      clearTimeout(timer);
      timer = setTimeout(() => {
        callbackFunction(args);
      }, wait);
    };
  };

  const typingStatus = debouncing(() => {
    typingStatusFalseToFirestore(roomid, users.users.uid);
  }, 2000);

  const onSend = React.useCallback((message = []) => {
    if (messages.length === 0) {
      firestore()
        .collection('Users')
        .doc(users.users.id)
        .collection('Inbox')
        .doc(route.params.uid)
        .set({
          // name:
        });
      firestore()
        .collection('Users')
        .doc(route.params.uid)
        .collection('Inbox')
        .doc(users.users.id)
        .set({
          name: route.params.userName,
        });
    }
    const msg = message[0];
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
      GiftedChat.append(previousMessages, message),
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

  const messaging = (context, message) => {
    let options;
    let cancelButtonIndex;
    options = ['Copy Text', 'Delete For Me', 'Delete For Everyone', 'Cancel'];
    cancelButtonIndex = options.length - 1;
    context.actionSheet().showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
      },
      buttonIndex => {
        switch (buttonIndex) {
          case 0:
            Clipboard.setString(message.text);
            break;
          case 1:
            firestore()
              .collection('ChatRoom')
              .doc(roomid)
              .collection('Messages')
              .doc(message._id)
              .update({
                deletedBy: message.deletedBy == '' ? users.users.uid : roomid,
              });
            break;
          case 2:
            firestore()
              .collection('ChatRoom')
              .doc(roomid)
              .collection('Messages')
              .doc(message._id)
              .update({deletedBy: roomid});
            break;
        }
      },
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
        isTyping={status}
        messages={messages}
        renderSend={onrenderSend}
        minInputToolbarHeight={50}
        renderBubble={renderBubble}
        onInputTextChanged={typingStatus}
        placeholder={'Send Message...'}
        onSend={messages => onSend(messages)}
        renderInputToolbar={renderInputToolbar}
        user={{_id: users.users.uid, avatar: route.params.avatar}}
        onLongPress={(context, message) => messaging(context, message)}
      />
    </React.Fragment>
  );
}
