import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {BookacallComponent} from './bookacall/bookacall.component';
import {TermsandComponent} from './termsand/termsand.component'

const routes: Routes = [
  { path:'', component:HomepageComponent},
  { path:'book-a-call', component:BookacallComponent},
  { path: 'privacy-policy',component:TermsandComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
