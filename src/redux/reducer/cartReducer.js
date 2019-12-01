import { SET_TOGGLE_HIDDEN, ADD_ITEM } from "../actions/types";

const initialState = {
  hidden: true,
  cartItems: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const existingCartItem = state.cartItems.find(cartItem => cartItem.id === action.payload.id);

      if(existingCartItem){
         return {
            ...state,
            cartItem: state.cartItems.map(cartItem => cartItem.id === action.payload.id ?
            {...cartItem,quantity: cartItem.quantity + 1,
              price: cartItem.price + action.payload.price
            }:cartItem)
         }
        }

        
      return {
        ...state,
        cartItems: [...state.cartItems,{...action.payload, quantity: 1}]
      };
    case SET_TOGGLE_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};
