import { put,call,takeEvery } from "@redux-saga/core/effects";
import { OtpVerification } from "../../utils/authFunction";

export function *fetchUser(action){

    try{
       const user= yield call(OtpVerification(params))
    }
    catch(err){
        console.log(err);
    }
}

export function *sagaWatcher(){
    
    yield takeEvery('USER_FETCH_REQUESTED',fetchUser)

}