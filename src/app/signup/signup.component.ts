import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../Services/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlacesService } from '../Services/places.service';
import {Product} from '../model/productModel';
import { Subscription} from 'rxjs'
import { Key } from 'protractor';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  productDisplay: Product[] = [];
  preference: Array<any> = [];
 
  private productSub : Subscription;
  private place;

  form: FormGroup;
  


  constructor(public router: Router,
    private loginService:LoginService, public placesService:PlacesService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null,{validators:[Validators.required]}),
      username: new FormControl(null,{validators:[Validators.required]}),
      password: new FormControl(null,{validators:[Validators.required]})
    })
    this.placesService.getProducts();
    this.productSub = this.placesService.getProductUpdateListener().subscribe((productDetails:Product[]) => {
      console.log("productDetails cards",productDetails);
      this.productDisplay = productDetails
    })
  }

  places(event: any) {
    var key;
    console.log(event.target.value);
    console.log(event.target.checked); 
    this.place = event.target.value;
    key=event.target.checked;
    if(key===true){
      this.preference.push(this.place);
    }
    else{
      this.preference.splice(this.preference.indexOf(this.place),1);
    }  
    
    console.log("preference array: ", this.preference);
}

  Signup(){
    if(this.form.invalid){
      return;
    }

    this.loginService.userSignUp(this.form.value.name, this.form.value.username, this.form.value.password, this.preference);

    }


}
