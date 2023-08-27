import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { FeatureModule } from '../feature/feature.module';
import { RoutesModule } from '../routes/routes.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FeatureModule,
    RoutesModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MainComponent
  ]
})
export class CoreModule { }
