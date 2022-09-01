import firestore from '@react-native-firebase/firestore';

export const chatStructure = uid => {
  const subscriber = firestore().collection('Users').doc(uid).set({
    name: 'Rishabh',
    uid: uid,
  });
};
