//import { configureStore, createSlice } from "@reduxjs/toolkit";
 // import Veg from "./Veg";
 // import NonVeg from "./NonVeg";
 // import Milk from "./Milk";
  import Cart from "./Cart";
  import { configureStore, createSlice } from "@reduxjs/toolkit";
 import Milk from "./Milk";
 import Nonveg from "./NonVeg";
 import Veg from "./Veg";

 const productsSlice= createSlice({
     name:'products',
     initialState:{ 
        Veg :[
         {image:"potato.jpeg",name:'potato',price:30.0},
         {image:"tomato.jpg",name:'tomato',price:20.0},
         {image:"carrot.jpg",name:'carrot',price:140.0},
         {image:"onion.webp",name:'onion',price:150.0},
     ],
     NonVeg:[
         {image:"chicken.avif",name:'chicken',price:230.0},
         {image:"fish.webp",name:'fish',price:160.0},
         {image:"mutton.jpg",name:'mutton',price:800.0},
         {image:"prawns.jpg",name:'prawns',price:500.0},
     ],
     Milk:[
         {image:"butter.jpg",name:'buttor',price:90.0},
         {image:"paneer.jpg",name:'panner',price:130.0},
         {image:"dalda.jpg",name:'dodla',price:100.0},
         {image:"milk.jpeg",name:'milk',price:60.0},
     ],
     },
     reducers:{}
 })
 const cartSlice=createSlice({
                  name:'cart',
                  initialState:[],
                  reducers:{
                     addtoCart :(state,action)=>{
                         const item=state.find(item=>item.name === action.payload.name);
                         if(item){
                             item.quantity +=1;
                         }
                         else{
                             state.push({...action.payload,quantity:1});
                         }
                     },
                     increament:(state,action)=>{
                         let item=state.find(item=>item.name === action.payload.name);
                         if(item)
                         {
 ;                            item.quantity +=1;
                         }
                     },
                     decreament:(state,action)=>{
                         let item=state.find(item=>item.name === action.payload.name);
                         if(item && item.quantity>1)
                         {
                             item.quantity -=1;
                         }
                         else{
                             return state.filter(item=>item.name !== action.payload.name);
                         }
                     },
                     remove:(state,action)=>{
                         return state.filter(item=>item.name !== action.payload.name);
                     },
                     clearCart:()=>[]
                 }
 })
 const purchaseDetailsSlice=createSlice({
                  name:'purchaseDetails',
                  initialState:[],
                  reducers:{
                     addpurchaseDetails:(state,action)=>{
                         state.push(action.payload)
                     }
                  }
 })
 const authSlice=createSlice({
                 name:'auth',
                 initialState: {
                     isAuthenticated : localStorage.getItem("username")?true:false,
                     user:localStorage.getItem("username")
                 },
                 reducers :{
                     login : (state,action)=>{
                         state.isAuthenticated = true;
                         state.user = action.payload;
                         localStorage.setItem("username",action.payload);
                     },
                     logout:(state)=>{
                         state.isAuthenticated=false;
                         state.user="";
                         localStorage.removeItem("username");
                     },
                 }
 })
 const Store= configureStore({
     reducer:{products:productsSlice.reducer,
              cart:cartSlice.reducer,
              purchaseDetails:purchaseDetailsSlice.reducer,
              auth:authSlice.reducer}
 })
 export const {addtoCart,increament,decreament,remove,clearCart}=cartSlice.actions;
 export const{addpurchaseDetails}=purchaseDetailsSlice.actions;
 export const{login,logout}=authSlice.actions;
 export default Store;