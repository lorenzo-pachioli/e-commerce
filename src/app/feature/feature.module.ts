import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import { MaterialModule } from '../material/material.module';
import { StateModule } from '../state/state.module';
import { CartDialogComponent } from './cart-dialog/cart-dialog.component';

@NgModule({
  declarations: [
    CardListComponent,
    CardComponent,
    CartDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    StateModule
  ],
  exports: [
    CardListComponent,
    CardComponent
  ]
})
export class FeatureModule { }
