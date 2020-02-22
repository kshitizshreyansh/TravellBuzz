import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';


import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddPlacesComponent } from './add-places/add-places.component';
import { AdminComponent } from './admin/admin.component';
import { ViewPlacesAddedComponent } from './view-places-added/view-places-added.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { AdminNavBarComponent } from './admin-nav-bar/admin-nav-bar.component';
import { AddPlaces1Component} from './add-places1/add-places1.component';
import { ViewPlaces1AddedComponent } from './view-places1-added/view-places1-added.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AddPlacesComponent,
    AdminComponent,
    ViewPlacesAddedComponent,
    SignupComponent,
    DashboardComponent,
    FooterComponent,
    AdminNavBarComponent,
    AddPlaces1Component,
    ViewPlaces1AddedComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
