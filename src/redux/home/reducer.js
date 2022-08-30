import { createSlice } from "@reduxjs/toolkit";


const initialState={
    userData:[],
}


const homeReducer=createSlice({
    name:'homeReducer',
    initialState,
    reducers: { 
        addUserData:(state,action)=>{
            state.userData=action.payload;
        }
    }
})


export const {addUserData}=homeReducer.actions
export default homeReducer.reducer;

