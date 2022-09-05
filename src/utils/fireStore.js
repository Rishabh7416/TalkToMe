import firestore from '@react-native-firebase/firestore';

export const chatStructure = userDetail => {
  console.log(userDetail);
  const subscriber = firestore()
    .collection('Users')
    .doc(userDetail.uid)
    .set(userDetail);
};

export const getData = callbackFunction => {
  firestore()
    .collection('Users')
    .get()
    .then(response => {
      const responseResult = response._docs.map(element => {
        return element.data();
      });
      callbackFunction(responseResult);
    })
    .catch(() => {
      console.log('error');
    });
};

export const renderMessageList = (roomid, userID, successCallback) => {
  firestore()
    .collection('ChatRoom')
    .doc(roomid)
    .collection('Messages')
    .onSnapshot(msg => {
      const msgResult = msg._docs
        .map(element => element._data)
        .sort((x, y) => y.createdAt - x.createdAt)
        .filter(element => !element.deletedBy.includes(userID));
      successCallback(msgResult);
    });
};

export const messageToFirestore = (roomid, messageID, messages) => {
  firestore()
    .collection('ChatRoom')
    .doc(roomid)
    .collection('Messages')
    .doc(messageID)
    .set({...messages});
};

export const typingStatusFalseToFirestore = (roomid, userID) => {
  firestore()
    .collection('ChatRoom')
    .doc(roomid)
    .collection('TypingStatus')
    .doc(userID)
    .set({
      isTyping: false,
    });
};

export const typingStatusTrueToFirestore = (roomid, userID) => {
  firestore()
    .collection('ChatRoom')
    .doc(roomid)
    .collection('TypingStatus')
    .doc(userID)
    .set({
      isTyping: true,
    });
};

export const renderStatus = (roomid, receiversID, successCallback) => {
  firestore()
    .collection('ChatRoom')
    .doc(roomid)
    .collection('TypingStatus')
    .doc(receiversID)
    .onSnapshot((status) => {
      successCallback(status?.data()?.isTyping);
    });
};
