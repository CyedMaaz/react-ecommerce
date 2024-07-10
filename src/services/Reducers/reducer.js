import { ADD_TO_CART, REMOVE_TO_CART } from '../Constants';

const initialState = {
  cartData: [],
};

export default function cartItems(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartData: [...state.cartData, action.data],
      };
    case REMOVE_TO_CART:
      return {
        ...state,
        cartData: state.cartData.filter(item => item !== action.data),
      };
    default:
      return state;
  }
}
