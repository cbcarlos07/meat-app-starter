import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import {Restaurant} from "./restaurant/restaurant.model";
import { MEAT_API } from "../app.api";
import 'rxjs/add/operator/catch'
import {ErrorHandler} from "../app.error-handler";
import {MenuItem} from "../restaurant-detail/menu-item/menu-item.model";

@Injectable()
export class RestaurantsService {
    constructor( private http: Http){}
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

        }

    ]*/
    restaurants(): Observable<Restaurant[]> {
       // return this.rests
        return this.http.get( `${MEAT_API}/restaurants` )
            .map( response => response.json() )
            .catch( ErrorHandler.handlerError )
    }

    restaurantById( id: string ): Observable<Restaurant>{
        return this.http.get( `${MEAT_API}/restaurants/${id}` )
            .map( response => response.json() )
            .catch( ErrorHandler.handlerError )
    }

    reviewsOfRestaurant( id: string ): Observable<any>{
        return this.http.get( `${MEAT_API}/restaurants/${id}/reviews` )
            .map( response => response.json() )
            .catch( ErrorHandler.handlerError )

    }


    menuOfRestaurant( id: string ): Observable<MenuItem[]>{
        return this.http.get( `${MEAT_API}/restaurants/${id}/menu` )
            .map( response => response.json() )
            .catch( ErrorHandler.handlerError )
    }
}