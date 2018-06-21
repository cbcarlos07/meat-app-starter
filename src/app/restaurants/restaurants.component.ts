import { Component, OnInit } from '@angular/core';
import {Restaurant} from "./restaurant/restaurant.model";
import {RestaurantsService} from "./restaurants.service";
import { trigger, state, style, transition, animate } from "@angular/animations";

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
  animations: [
      trigger('toogleSearch', [
          state('hidden', style({

          })),
          state('visible', style({}))
      ])
  ]
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[] = []

  constructor( private restaurantsService: RestaurantsService) { }

  ngOnInit() {
      //this.restaurants = this.restaurantsService.restaurants()
      this.restaurantsService.restaurants()
          .subscribe( restaurants => this.restaurants = restaurants )
  }

}
