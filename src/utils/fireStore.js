import firestore from '@react-native-firebase/firestore';

export const chatStructure = () => {
  const subscriber = firestore()
    .collection('Users')
    .doc('userDoc')
    .collection('Messages')
    .doc('userMessage-1')
    .set({
      name: 'Rishabh',
      profile: 'Dev',
    })
    .then(response => {
      console.log('collection created response: ');
    })
    .catch(error => {
      console.log('collection error');
    });
};

export const chatRoom = () => {
  
}