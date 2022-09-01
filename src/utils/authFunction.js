import auth from '@react-native-firebase/auth';

export const signInWithPhoneNumberOtp = async (
  phoneNumber,
  successCallbackFun,
  failureCallbackFun,
) => {
  try {
    
    const otpResponse = await auth().signInWithPhoneNumber(phoneNumber) 
    successCallbackFun(otpResponse);
  } 
  catch (error) {
    failureCallbackFun(error);
  }
};

export const _verification = async (
  otp,
  confirmOtp,
  successCallbackFun,
  failureCallbackFun,
) => {
  try {
    console.log(otp);
    const user = await confirmOtp.confirm(otp);
    successCallbackFun(user);
  } catch (error) {
    failureCallbackFun(error);
  }
};

export const ErrorCode = () => {};
