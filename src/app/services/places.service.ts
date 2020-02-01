import { Injectable } from '@angular/core';
import { Product } from '../model/productModel';
import {HttpClient } from '@angular/common/http'
import { Subject } from "rxjs";
import { Router } from "@angular/router";

import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private products: Product[]=[];
  private product:Product;
  private prodID:string = null;
  private productUpdated = new Subject<Product[]>();
  private productdetailsUpdated = new Subject<any>();


  constructor(private http:HttpClient,private router:Router) { }

  addProduct(title:string)
  {
    const product: Product = { productID: null,title: title };
   
    this.http.post<{message:string;postId:string}>(
      "http://localhost:1025/places/post",product
    ).subscribe(responseData => {

      const id = responseData.postId;
      product.productID = id;

      this.products.push(product);
      this.productUpdated.next([...this.products]);

    })
  }

  getProducts(){
    console.log("inside getProducts()");
    this.http.get("http://localhost:1025/places/getProduct")
    .pipe(
      map(productData => {
        return productData["result"].map(product => {
          return {
            _id:product._id,
            ProductSchema:product["ProductSchema"].map(opl => {
              return {
                title:opl.title,
                productID:opl._id,
              };
            })
          }
        });
      })
    )
    .subscribe(transformedProduct => {
      this.products = transformedProduct;
      this.productUpdated.next([...this.products]);
    });
  }


  getProduct(prodID:string){
    return this.http.get<{message:string,product:Product}>("http://localhost:1025/places/getProductDetails/" + prodID).subscribe(productDetails => {
      this.product = productDetails.product 
      this.productdetailsUpdated.next(this.product);
  
      })
    
  }

  getProductDetailsListener(){
    return this.productdetailsUpdated.asObservable();
  }

  getProductUpdateListener(){
    return this.productUpdated.asObservable();
  }


}
