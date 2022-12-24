import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
        Increment:(state)=> {
            state.count+=1;
        },
        Decrement:(state) => {
            state.count-=1;
        },
        IncrementByAmount:(state,action)=>{
            state.count+=action.payload;
        }
    }
});

export const {Increment,Decrement,IncrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;