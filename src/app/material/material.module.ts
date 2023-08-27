import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    MatCardModule
  ]
})
export class MaterialModule { }
