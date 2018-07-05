import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import {Restaurant} from "./restaurant/restaurant.model";
import { MEAT_API } from "../app.api";
import 'rxjs/add/operator/catch'

import {MenuItem} from "../restaurant-detail/menu-item/menu-item.model";

@Injectable()
export class RestaurantsService {
    constructor( private http: HttpClient){}
/*    rests: Restaurant[] = [
        {
            id: "bread-bakery",
            name: "Bread & Bakery",
            category: "Bakery",
            deliveryEstimate: "25m",
            rating: 4.9,
            imagePath: "assets/img/restaurants/breadbakery.png"

        },
        {
            id: "burger-house",
            name: "Burger House",
            category: "Hamburgers",
            deliveryEstimate: "100m",
            rating: 3.5,
            imagePath: "assets/img/restaurants/burgerhouse.png"

        }ngsr

    ]*/
    restaurants(search?: string): Observable<Restaurant[]> {
       // return this.rests
        let params: HttpParams = undefined
        if( search ){
            params =  new HttpParams().set('q', search)
        }
        return this.http.get<Restaurant[]>( `${MEAT_API}/restaurants`, {params: params} )
    }

    restaurantById( id: string ): Observable<Restaurant>{
        return this.http.get<Restaurant>( `${MEAT_API}/restaurants/${id}` )
    }

    reviewsOfRestaurant( id: string ): Observable<any>{
        return this.http.get( `${MEAT_API}/restaurants/${id}/reviews` )

    }


    menuOfRestaurant( id: string ): Observable<MenuItem[]>{
        return this.http.get<MenuItem[]>( `${MEAT_API}/restaurants/${id}/menu` )
    }
}
