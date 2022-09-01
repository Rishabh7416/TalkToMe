import firestore from '@react-native-firebase/firestore';

export const chatStructure = userDetail => {
  console.log(userDetail)
  const subscriber = firestore().collection('Users').doc(userDetail.uid).set(userDetail);
  
};

export const getData = (callbackFunction) => {
  firestore()
    .collection('Users')
    .get()
    .then(response => {
      const responseResult = response._docs.map(element => {
        return element.data();
      });
      callbackFunction(responseResult)
    })
    .catch(() => {
      console.log('error');
    });
};
