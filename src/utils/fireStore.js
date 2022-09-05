import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

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

export const setImagetoStorage = (imagePath, reference,successCallBack) => {
  reference
    .putFile(`${imagePath}`)
    .then(res => {
      console.log('res', res);
      reference
        .getDownloadURL()
        .then(res =>{ console.log('get link', res)
        successCallBack(res)
      })
        .catch(err => console.log('get dwon err', err));
    })
    .catch(err => {
      console.log(err);
    });
};

export const getImageLink = async reference => {
  try {
    const link = reference.getDownloadURL();
    return link;
  } catch (err) {
    console.log(err);
  }
};
