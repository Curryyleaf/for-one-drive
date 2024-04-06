import React, { useReducer } from "react";
import { useContext , useState , useEffect } from "react";
import reducer from "../../final/src/reducer";


const initialValue={
  total:0 ,
  cart :0,
  amount :0,
  loading:false 

}

const AppContext= React.createContext();

const AppProvider = ()=>{
const [state , dispatch ] = useReducer(reducer , initialValue );

const clear=()=>{
  dispatch({type:"CLEAR_CART"});
  // dispact is just like a callback function where you put the arguments inside the curly brackets ;
  // this function has a argument named action which is a object 

  // You don't use dispatch(action.type = ...) because the dispatch function expects an object with a type property, and you provide this object directly.
}
  
  <AppContext.Provider value={{
 ...state ,

  }}>
    {children }
  </AppContext.Provider>
}

const useGlobalContext= ()=>{
  useContext(AppContext);

}























// import React, { useReducer } from "react";
// import { useContext , useState , useEffect} from "react";
// import Reducer from "./reducer"
// import Cart from "./data"

// const url = "https://course-api.com/react-useReducer-cart-project";

// const Appcontext = React.createContext();

// const initialsatate={
//   loading: false ,
//   cart: Cart,
//   total : 0,
//   amount : 0
// }
// const AppProvider =({childern })=>{

// const [state , dispatch ]= useReducer(Reducer , initialsatate )

// const clearCart= ()=>{
//   dispatch({action:"CLEAR_CART"})
// }

// const remove =(id)=>{
//   dispatch({type:"REMOVE_ITEM" , payload:id})
// }

// const increase =()=>{
//   dispatch({type:"INCREASE " , payload:id})
// }
// const decrease =()=>{
//   dispatch({type:"DECREASE " , payload:id})
// }

// const fetchData =async ()=>{
//   dispatch({type:"LOADING"});
//   const response= await fetch(url);
//   const cart = await response.json();
//   dispatch({type:'DISPLAY_ITEMS', payload:cart})
// }
// useEffect(()=>{
//   dispatch({type:"GET_TOTAL" , })
// } , [state.cart])
//   return(
//     <Appcontext.Provider 
//     value={{
//       ...state,
//       remove ,
//       clearCart,
      


//     }}>

//       {childern}
//     </Appcontext.Provider>
//   )

// }

// export const useGlobalContext=()=>{
//   useContext(Appcontext)
// }
// export {AppProvider ,Appcontext }