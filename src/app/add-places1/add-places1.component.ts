import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlacesService } from '../Services/places.service';
import {Product} from '../model/productModel';
import { Router } from '@angular/router';
import { AddPlaces1Service } from '../services/add-places-1.service';
import { Subscription} from 'rxjs'


@Component({
  selector: 'app-add-places1',
  templateUrl: './add-places1.component.html',
  styleUrls: ['./add-places1.component.css']
})
export class AddPlaces1Component implements OnInit {


  productDisplay: Product[] = [];
  private productSub : Subscription;
  private seasons;
  weather: Array<any> = [];
  form: FormGroup;




  constructor(public router: Router, public placesService:PlacesService, public addplaces1service: AddPlaces1Service) { }

  ngOnInit() {

    this.form = new FormGroup({
      placeType: new FormControl(null, {validators:[Validators.required]}),
      title: new FormControl(null, {validators:[Validators.required]}),
      Description: new FormControl(null, {validators:[Validators.required]}),
      image: new FormControl(null, {validators:[Validators.required]}),
      amount: new FormControl(null, {validators:[Validators.required]})
    })
    



    this.placesService.getProducts();
    this.productSub = this.placesService.getProductUpdateListener().subscribe((productDetails:Product[]) => {
      console.log("productDetails cards",productDetails);
      
      this.productDisplay = productDetails;
      console.log(this.productDisplay);
    })
  }

  // onSelectPreference(event: any){
  //   console.log("value:",event.target.value);
  // }


  

  season(event: any) {
    var key;
    console.log(event.target.value);
    console.log(event.target.checked); 
    this.seasons = event.target.value;
    key=event.target.checked;
    if(key===true){
      this.weather.push(this.seasons);
    }
    else{
      this.weather.splice(this.weather.indexOf(this.seasons),1);
    }  
    
    console.log("seasons array: ", this.weather);
}

onSavePlace(){
  if(this.form.invalid){
    return;
  }
  this.addplaces1service.addplace(this.form.value.placeType, this.form.value.title, this.form.value.Description, this.form.value.image, this.form.value.amount, this.weather);

}

}
