import { createSlice ,current} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name :"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem : (state , action)=>{
            // mutating the state
            state.items.push(action.payload);  
        },
        removeItem : (state , action)=>{
            state.items.pop();
        },
        clearCart : (state , action)=>{
            console.log(current(state));
            state.items.length = 0; 
            // or
            // return {items:[]} this new obj will replace the current state obj origState = {items :[]}
        },

    }
});

export const {addItem , removeItem , clearCart} = cartSlice.actions;
export default cartSlice.reducer;