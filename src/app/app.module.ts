import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductListComponent } from './product-list/product-list.component'
import { convertTospace } from './convert-to-space.pipe';
import { StarComponent } from './star/star.component';
import {HttpClientModule} from '@angular/common/http';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'product', component:ProductListComponent},
  {path:'product/:id', component:ProductDetailsComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
 ]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    convertTospace,
    StarComponent,
    ProductDetailsComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
