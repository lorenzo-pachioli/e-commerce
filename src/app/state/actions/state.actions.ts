import { createAction, props } from '@ngrx/store';

export const addItem = createAction('[Cart Component] Add', props<{ item: string }>());
export const removeItem = createAction('[Cart Component] Remove', props<{ item: string }>());
export const resetCart = createAction('[Cart Component] Reset');