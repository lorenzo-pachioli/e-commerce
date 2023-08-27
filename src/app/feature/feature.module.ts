import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    CardListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CardListComponent,
    CardComponent
  ]
})
export class FeatureModule { }
