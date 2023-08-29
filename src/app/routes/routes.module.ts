import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeatureModule } from '../feature/feature.module';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ShopComponent,
    HomeComponent,
    ContactComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    FeatureModule,
    AppRoutingModule,
    MaterialModule
  ],
  exports: [
    ShopComponent,
    HomeComponent,
    ContactComponent,
    AboutUsComponent
  ]
})
export class RoutesModule { }
