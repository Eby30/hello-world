import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { FormsModule } from '@angular/forms';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { ProductInfoComponent } from './product-info/product-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    StudentProfileComponent,
    ProductInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
