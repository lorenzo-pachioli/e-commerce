import { createReducer, on } from '@ngrx/store';
import { addItem, removeItem, resetCart } from '../actions/state.actions';

export interface store {
  user: string,
  cart: item[]
}

export interface item {
  id: number,
  quantity: number,
  title: string,
  subtitle: string,
  image: string,
  alt: string,
  description: string
}

export let initialState: store = {
  user: 'Lorenzo',
  cart: []
};

export const stateReducer = createReducer(
  initialState,
  on(addItem, (state, { item }) => {
    if (state.cart.some(cartItem => cartItem.id === item.id)) {
      const newCart = state.cart.map(cartItem => cartItem.id === item.id ? (itemQuantityPlus(cartItem)) : (cartItem));
      return { ...state, cart: newCart };
    }
    return { ...state, cart: [...state.cart, item] };
  }),
  on(removeItem, (state, { id }) => {
    if (state.cart.some(cartItem => cartItem.id === id && cartItem.quantity > 0)) {
      const newCart = state.cart.map(cartItem => cartItem.id === id ? (itemQuantityMinus(cartItem)) : (cartItem));
      return { ...state, cart: newCart };
    }
    const newCart = state.cart.filter(toRemove => toRemove.id !== id);
    return { ...state, cart: newCart };
  }),
  on(resetCart, (state) => ({ ...state, cart: [] }))
);

const itemQuantityPlus = (item: item) => itemQuantityModiy(item, 'plus');
const itemQuantityMinus = (item: item) => itemQuantityModiy(item, 'minus');

const itemQuantityModiy = (item: item, operation: string) => {

  if (operation === 'plus') {
    const newItem = {
      ...item,
      quantity: item.quantity + 1
    }
    return newItem;
  }

  const newItem = {
    ...item,
    quantity: item.quantity - 1
  }
  return newItem;
}