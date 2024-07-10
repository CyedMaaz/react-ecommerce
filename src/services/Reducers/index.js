// //In other words this file is also called the root Reducer
// //combine Reducer is called high level component

// import { combineReducers } from "redux";
// import cartItems from './reducer';

// export default combineReducers({                                //this combineReducers is called combined reducer
//   cartItems,
// });



// src/services/Reducers/index.js
import { combineReducers } from "redux";
import cartItems from './reducer';

export default combineReducers({
  cartItems,
});
