import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { LoginComponent} from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPlaces1Component } from './add-places1/add-places1.component';
import { from } from 'rxjs';


const routes: Routes = [
  {path: '',  component: HomeComponent},
  {path: 'login',  component: LoginComponent},
  {path: 'admin',  component: AdminComponent},
  {path: 'signup',  component: SignupComponent},
  {path: 'dashboard',  component: DashboardComponent},
  {path: 'add-places1',  component: AddPlaces1Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
