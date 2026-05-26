import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfilecardComponent } from './profilecard/profilecard.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    RegistrationComponent,
    ProfilecardComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }