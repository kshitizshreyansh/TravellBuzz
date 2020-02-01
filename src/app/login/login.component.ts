import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginService } from '../Services/login.service';
import { PlacesService } from '../Services/places.service';
import {Product} from '../model/productModel';
import { Subscription} from 'rxjs'



@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  productDisplay: Product[] = [];
  private productSub : Subscription;


 constructor(public router: Router,
   private loginService:LoginService, public placesService:PlacesService) { }

 ngOnInit() {
  this.placesService.getProducts();
  this.productSub = this.placesService.getProductUpdateListener().subscribe((productDetails:Product[]) => {
    console.log("productDetails cards",productDetails);
    this.productDisplay = productDetails
  })

 }
 
//  Signup(Signupform:NgForm){
//    console.log(Signupform.value);
//    this.loginService.userSignUp(Signupform.value);
//    //this.router.navigate['/choice'];

//    }

next(){
  this.router.navigate(['/signup'])
}


 SignIn(loginform:NgForm){
     this.loginService.userSignIn(loginform.value);
   }


}
