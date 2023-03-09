import { createSlice } from "@reduxjs/toolkit"



let initialState = {
    isLogin : false,
}


let loginSlice =  createSlice({
    name: 'login',
    initialState,
    reducers: {
        fireLogin: (state, action) => {
         
       
            state.isLogin = action.payload;
        }
    }
})

export let loginReducer = loginSlice.reducer;
export let {fireLogin} = loginSlice.actions;
