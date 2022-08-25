import auth from '@react-native-firebase/auth';

export const signInWithPhoneNumber = async (PhnNum, callbackFun) => {
  try {
    const response = await auth.signInWithPhoneNumber(PhnNum);
    callbackFun(response);
  } catch (err) {
    console.log(err);
  }
};

export const OtpVerification = params => {
  console.log(params);
};
