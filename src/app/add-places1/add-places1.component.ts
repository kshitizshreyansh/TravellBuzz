import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlacesService } from '../Services/places.service';
import {Product} from '../model/productModel';
import { Router } from '@angular/router';
import { Subscription} from 'rxjs'


@Component({
  selector: 'app-add-places1',
  templateUrl: './add-places1.component.html',
  styleUrls: ['./add-places1.component.css']
})
export class AddPlaces1Component implements OnInit {


  productDisplay: Product[] = [];
  private productSub : Subscription;
  constructor(public router: Router, public placesService:PlacesService) { }

  ngOnInit() {
    this.placesService.getProducts();
    this.productSub = this.placesService.getProductUpdateListener().subscribe((productDetails:Product[]) => {
      console.log("productDetails cards",productDetails);
      this.productDisplay = productDetails
    })
  }

}
