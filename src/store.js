import { configureStore, createSlice } from "@reduxjs/toolkit";



const productsSlice=createSlice({
    name:'products',
    initialState:{

        veg:[
            {name:'Tomato',price:200.5},
            {name:'Potato',price:100.8},
            {name:'panner',price:250.6},
            {name:'carrot',price:80.54}
        ],
        nonveg:[
             {name:'chicken',price:250.0},
             {name:'Fish',price:300.8},
             {name:'prawns',price:600.23},
             {name:'mutton',price:800.65}
        ],
    },
    reducers:{}
});
const cartSlice=createSlice({
name:'cart',
initialState:[],
reducers:{
  addToCart:(state,action)=>{
    const item=state.find(item=>item.name===action.payload.name)
    if(item)
    {
        item.quantity+=1;
    }
    else
    {
        state.push({...action.payload,quantity:1});
    }
  },
  increament:(state,action)=>{
       const item=  state.find(item=>item.name===action.payload.name)
       if(item)
       {
        item.quantity+=1;
       }
  },
  decrement:(state,action)=>{

             const item= state.find((item)=>item.name===action.payload.name)
             if(item&&item.quantity>1)
             {
                item.quantity-=1;
             }
             else{

               return state.filter(item=>item.name!=action.payload.name);


             }

  },
    remove:(state,action)=>
    {
       const item=  state.find((item)=>item.name===action.payload.name)
       if(item)
       {
           return state.filter(item=>item.name!=action.payload.name);
       }
    }  
}

})
const store=configureStore({
   reducer:{
    products:productsSlice.reducer,
    cart:cartSlice.reducer,

           }
   

})
export default store;
export const {addToCart,increament,decrement,remove}=cartSlice.actions;