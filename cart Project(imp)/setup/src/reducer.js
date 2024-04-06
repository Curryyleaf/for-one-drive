
const reducer = (action , state )=>{
if(action.type==="CLEAR_CART"){
    
}
}


export default reducer ;

// const reducer = (state, action) => {
//   if (action.type === "CLEAR_CART") {
//     return { ...state, cart: [] };
//   }
//   if (action.type === "remove") {
//     // OR
//     // const removedItem= state.cart.filter((cartItem)=>{
//     // cartItem.id !==action.payload
//     // })

//     // return{...state , cart:removedItem}
//     return {
//       ...state,
//       cart: state.cart.filter((cartItem) => {
//         cartItem.id !== action.payload;
//       }),
//     };
//   }
//   if ((action.type = "INCREASE")) {
//     let tempCart = state.cart.map((cartItem) => {
//       if (cartItem.id === action.payload) {
//         return { ...cartItem, amount: cartItem.amount + 1 };
//       }
//       return cartItem;
//     });

//     return { ...state, cart: tempCart };
//   }

//   if ((action.type = "INCREASE")) {
//     let tempCart = state.cart
//       .map((cartItem) => {
//         if (cartItem.id === action.payload) {
//           return { ...cartItem, amount: cartItem.amount - 1 };
//         }
//         return cartItem;
//       })
//       .filter((cartItem) => cartItem.amount !== 0);
//     //  here you are assigning the data to filter method right after map method .

//     return { ...state, cart: tempCart };
//   }

// if (action.type === "GET_TOTAL") {
//   const { lastTotal, lastAmount } = state.cart.reduce(
//     (cartTotal, cartItem) => {
//       const { amount, price } = cartItem;
//       cartTotal.lastTotal += amount * price;
//       cartTotal.lastAmount += amount;
//       return cartTotal;
//       //   here you must return the cartTotal ;
//       // even though arrouw function are supposed to be automatically return ,

//       // there are multiple statements, including the increment operations and no explicit return, the implicit return behavior does not come into play. In such cases, you need to use the return statement explicitly to indicate what value should be used as the accumulator for the next iteration.
//     },
//     {
//       lastTotal: 0,
//       lastAmount: 0,
//     }
//   );
//   return{ ...state ,total:lastTotal , amount:lastAmount}

// }
//  if ( action.type==="LOADING "){
//     return{...state , loading:true }
//  }

//  if (action.type === 'DISPLAY_ITEMS'){
//     return{...state , cart:action.payload , loading:false }
//  }

//   return state;
// };

// export default reducer;
