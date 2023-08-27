import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './core/main/main.component';
import { HomeComponent } from './routes/home/home.component';
import { ShopComponent } from './routes/shop/shop.component';
import { AboutUsComponent } from './routes/about-us/about-us.component';
import { ContactComponent } from './routes/contact/contact.component';
import { CardListComponent } from './feature/card-list/card-list.component';

const routes: Routes = [
  /* {
    path: '',
    component: MainComponent,
    canActivate: [true],
    children: [
      
    ]
  } */

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'shop',
    component: ShopComponent,
    children: [
      /* { path: ':prjectId/:epicId/:storyId', component: StoryComponent },
      { path: ':prjectId/:epicId', component: EpicComponent },
      { path: ':prjectId', component: ProjectComponent, pathMatch: 'full' }, */
      { path: '', component: CardListComponent, pathMatch: 'full' }
    ],
  },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
