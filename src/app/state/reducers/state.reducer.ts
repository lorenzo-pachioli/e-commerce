import { createReducer, on } from '@ngrx/store';
import { addItem, removeItem, resetCart } from '../actions/state.actions';

export interface store {
  user: string,
  cart: item[]
}

export interface item {
  id: number,
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
  on(addItem, (state, { item }) => ({ ...state, cart: [...state.cart, item] })),
  on(removeItem, (state, { id }) => {
    const newCart = state.cart.filter(toRemove => toRemove.id !== id);
    return { ...state, cart: newCart };
  }),
  on(resetCart, (state) => ({ ...state, cart: [] }))
);