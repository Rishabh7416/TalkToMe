import {
  Avatar,
  Bubble,
  GiftedChat,
  InputToolbar,
} from 'react-native-gifted-chat';
import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import { useRoute } from '@react-navigation/native';

export default function  ChatScreen() {
  const [messages, setMessages] = React.useState([]);
  const route = useRoute();
  console.log('routes', route.params);

  React.useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = React.useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
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
      {/* <MainHeader /> */}
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
    backgroundColor: 'black',
    borderRadius: 100 / 2,
    height: 55,
    justifyContent: 'center',
  },
});
