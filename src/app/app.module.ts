import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {MustMatchDirective} from './directives/match-value.directive';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'flight', component: TravelComponent},
  {path: '', redirectTo: '/todo', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,

    MustMatchDirective,
    AboutComponent,
    TravelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
