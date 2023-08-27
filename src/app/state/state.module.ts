import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { stateReducer } from './reducers/state.reducer';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({ store: stateReducer })
  ]
})
export class StateModule { }
