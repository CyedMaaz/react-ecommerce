export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_TO_CART = "REMOVE_TO_CART";

// export const addToCart = (data) => {
//   return {
//     type: ADD_TO_CART,
//     data: data,
//   };
// };

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeToCart = (data) => {
  return {
    type: REMOVE_TO_CART,
    data: data,
  };
};
