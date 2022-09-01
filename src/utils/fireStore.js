import firestore from '@react-native-firebase/firestore';

export const chatStructure = uid => {
  const subscriber = firestore().collection('Users').doc(uid).set({
    name: 'Rishabh',
    uid: uid,
  });
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
