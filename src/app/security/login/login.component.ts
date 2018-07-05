import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {LoginService} from "./login.service";
import { NotificationService } from "../../shared/messages/notification.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup
  navigateTo: string
  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private notificationService: NotificationService,
              private activedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
        email: this.fb.control('', [Validators.required, Validators.email]),
        password: this.fb.control('', [Validators.required])
    })
      //btoa = encryptar em base 64
      this.navigateTo = this.activedRoute.snapshot.params['to'] || btoa('/')
  }

  login(){
      //atob = decryptar do base 64
      this.loginService.login(this.loginForm.value.email,
                              this.loginForm.value.password)
                        .subscribe( user => this.notificationService.notify(`Bem vindo, ${user.name}`),
                           response => //HttpErrorResponse
                               this.notificationService.notify(response.error.message),
                            () => {
                                this.router.navigate([atob(this.navigateTo)])
                            })
  }

}
