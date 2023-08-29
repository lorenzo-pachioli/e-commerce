import { createAction, props } from '@ngrx/store';
import { item } from '../reducers/state.reducer';

export const addItem = createAction('[Cart Component] Add', props<{ item: item }>());
export const removeItem = createAction('[Cart Component] Remove', props<{ id: number }>());
export const resetCart = createAction('[Cart Component] Reset');