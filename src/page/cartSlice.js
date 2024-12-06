import { createSlice } from "@reduxjs/toolkit";

const initialState=[];

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state,action) =>{
            state.push(action.payload)
        },
        deleteItem:(state,action) =>{
            return state.filter((product)=>product.id !== action.payload.id)
        },
        incremente: (state,action) =>{
            const item=state.find((pro) => pro.id === action.payload.id);
            item.quantity +=1;
        },
        decremente: (state,action) =>{
            const item=state.find((pro) => pro.id === action.payload.id);
            item.quantity -=1;
        }
    }
})
export const {addItem ,deleteItem,incremente,decremente} = cartSlice.actions
export default cartSlice.reducer;