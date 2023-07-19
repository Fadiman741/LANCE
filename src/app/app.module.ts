import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { CompaniesComponent } from './companies/companies.component';
import { BookacallComponent } from './bookacall/bookacall.component';
import { TermsandComponent } from './termsand/termsand.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [									
    AppComponent,
      HomepageComponent,
      ContactComponent,
      NavbarComponent,
      FooterComponent,
      AboutComponent,
      CompaniesComponent,
      BookacallComponent,
      TermsandComponent,
      FormComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
