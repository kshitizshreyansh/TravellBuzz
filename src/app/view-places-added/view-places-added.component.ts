import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../Services/places.service';
import {Product} from '../model/productModel'
import { Subscription} from 'rxjs'
import { Router } from "@angular/router";


@Component({
  selector: 'app-view-places-added',
  templateUrl: './view-places-added.component.html',
  styleUrls: ['./view-places-added.component.css']
})
export class ViewPlacesAddedComponent implements OnInit {

  productDisplay: Product[] = [];
  private productSub : Subscription;


  constructor(public placesService:PlacesService,
    private router:Router) { }

  ngOnInit() {
    this.placesService.getProducts();
    this.productSub = this.placesService.getProductUpdateListener().subscribe((productDetails:Product[]) => {
      console.log("productDetails cards",productDetails);
      this.productDisplay = productDetails
    })
  }

  // productDescription(productID:any){
  //   console.log(productID);
  //   console.log("inside productDescrition()");
  //    this.placesService.getProduct(productID)
  //    //this.router.navigate(["/productDescription",productID])
     
  //   }


}
