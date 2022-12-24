import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        islogged:false,
        displayName:''
    },
    reducers:{
        logIn:(state, action)=> {
            state.islogged=true;
            state.displayName = action.payload.displayName;
        },

        logOut:(state)=> {
            state.islogged=false;
            state.displayName = '';
        },
        // Decrement:(state) => {
        //     state.count-=1;
        // },
        // IncrementByAmount:(state,action)=>{
        //     state.count+=action.payload;
        // }
    }
});

export const {logIn,logOut} = userSlice.actions;

export default userSlice.reducer;