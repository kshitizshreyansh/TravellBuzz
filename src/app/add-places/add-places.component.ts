import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { PlacesService } from '../Services/places.service';
import { Product } from '../model/productModel'


@Component({
  selector: 'app-add-places',
  templateUrl: './add-places.component.html',
  styleUrls: ['./add-places.component.css']
})
export class AddPlacesComponent implements OnInit {
  form: FormGroup;

  constructor(public route:ActivatedRoute, public placesService:PlacesService) { }

  ngOnInit() {

    this.form = new FormGroup({
      title: new FormControl(null,{validators:[Validators.required]
      })
    });
  }

  onSaveProduct(){
    if(this.form.invalid){
      return;
    }

    this.placesService.addProduct(
      this.form.value.title,
    )
     
  }


}
