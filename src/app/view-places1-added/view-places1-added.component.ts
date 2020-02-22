import { Component, OnInit } from '@angular/core';
import { AddPlaces1Service } from '../services/add-places-1.service';
import { Place } from '../model/placeModel';
import { Subscription} from 'rxjs'
import { Router } from "@angular/router";


@Component({
  selector: 'app-view-places1-added',
  templateUrl: './view-places1-added.component.html',
  styleUrls: ['./view-places1-added.component.css']
})
export class ViewPlaces1AddedComponent implements OnInit {

  placeDisplay: Place[] = [];
  private placeSub : Subscription;


  constructor(public places1Service:AddPlaces1Service,
    private router:Router) { }

  ngOnInit() {
    this.places1Service.getPlaces();
    this.placeSub = this.places1Service.getPlaceUpdateListener().subscribe((placeDetails:Place[]) => {
      console.log("placeDetails cards",placeDetails);
      this.placeDisplay = placeDetails
    })
  }

}
