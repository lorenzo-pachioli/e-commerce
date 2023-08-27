import { createReducer, on } from '@ngrx/store';
import { addItem, removeItem, resetCart } from '../actions/state.actions';

export interface store {
  user: string,
  cart: String[]
}
export let initialState: store = {
  user: 'Lorenzo',
  cart: []
};

export const stateReducer = createReducer(
  initialState,
  on(addItem, (state, { item }) => ({ ...state, cart: [...state.cart, item] })),
  on(removeItem, (state, { item }) => {
    const newCart = state.cart.filter(toRemove => toRemove !== item);
    return { ...state, cart: newCart };
  }),
  on(resetCart, (state) => ({ ...state, cart: [] }))
);