import {ModuleWithProviders, NgModule} from "@angular/core";
import {InputComponent} from "./input/input.component";
import {RadioComponent} from "./radio/radio.component";
import {RatingComponent} from "./rating/rating.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SnackbarComponent} from "./messages/snackbar/snackbar.component";
import {ShoppingCartService} from "../restaurant-detail/shpping-cart/shopping-cart.service";
import {RestaurantsService} from "../restaurants/restaurants.service";
import {OrderService} from "../order/order.service";
import {NotificationService} from "./messages/notification.service";
import {LoginService} from "../security/login/login.service";
import {LoggedInGuard} from "../security/loggedin.guard";
import {LeaveOrderGuard} from "../order/leave-order.guard";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "../security/auth.interceptor";


@NgModule({
    declarations: [
        InputComponent,
        RadioComponent,
        RatingComponent,
        SnackbarComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        InputComponent,
        RadioComponent,
        RatingComponent,
        SnackbarComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders{
      return {
          ngModule: SharedModule,
          providers: [  ShoppingCartService,
                        RestaurantsService,
                        OrderService,
                        NotificationService,
                        LoginService,
                        LoggedInGuard,
                        LeaveOrderGuard,
                        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
                     ]
      }
  }
}
