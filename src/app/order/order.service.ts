import {ShoppingCartService} from "../restaurant-detail/shpping-cart/shopping-cart.service";
import {Injectable} from "@angular/core";
import {CartItem} from "../restaurant-detail/shpping-cart/cart-item.model";
import {Observable} from "rxjs/Observable";
import {Order, OrderItem} from "./order.model";
import {HttpClient, HttpHandler, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map'
import {MEAT_API} from "../app.api";
import { LoginService } from "../security/login/login.service";

@Injectable()
export class OrderService {

    constructor( private cartService: ShoppingCartService,
                 private http: HttpClient,
                 private loginService: LoginService){}

    itemsValue(): number{
        return this.cartService.total()
    }

    cartItems(): CartItem[]{
        return this.cartService.items
    }

    increaseQty( item: CartItem ){
        this.cartService.increaseQty( item )
    }

    decreaseQty( item: CartItem ){
        this.cartService.decreaseQty( item )
    }

    remove( item: CartItem ){
        this.cartService.removeItem( item )
    }

    clear(){
        this.cartService.clear()
    }

    checkOrder( order: Order ): Observable<string>{
        let headers = new HttpHeaders()
        if( this.loginService.isLoggedIn() ){
            headers = headers.set('Autorization', `Bearer ${this.loginService.user.accessToken}`)
        }
        return this.http.post<Order>( `${MEAT_API}/orders`, order, {headers: headers})
                                .map( order => order.id )

    }


}