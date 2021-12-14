import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';



@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html'

})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[] = [
    {
      id: "bread-bakery",
      name: "Bread & Bakery",
      category: "Bakery",
      deliveryEstimate: "25m",
      rating: 4.9,

    },
    {
      id: "burger-house",
      name: "Burger House",
      category: "Hamburgers",
      deliveryEstimate: "100m",
      rating: 3.5,


    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
