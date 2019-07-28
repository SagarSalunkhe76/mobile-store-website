import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductListComponent } from './product-list/product-list.component'
import { convertTospace } from './convert-to-space.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    convertTospace
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
