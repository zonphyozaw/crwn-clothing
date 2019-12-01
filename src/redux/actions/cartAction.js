import { SET_TOGGLE_HIDDEN, ADD_ITEM } from './types'

//set hidden
export const toggleCartHidden = () => ({
  type: SET_TOGGLE_HIDDEN
});

//Add item to cart
export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item
});

