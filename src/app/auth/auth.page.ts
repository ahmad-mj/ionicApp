import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  public isLoading = false;
  public isLogin = true;
  public loginForm: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['test@test.aa', Validators.required],
      password: [
        '123455',
        Validators.compose([Validators.minLength(6), Validators.required]),
      ],
    });
  }

  ngOnInit() {}

  public login(): void {
    if (!this.loginForm.valid || this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.loadingController
      .create({
        keyboardClose: true,
        message: 'Logging in...',
      })
      .then((loadingElm) => {
        loadingElm.present();
        this.authService.login();
        const email = this.loginForm.value.email;
        const password = this.loginForm.value.password;
        console.log(email, password);
        if (this.isLogin) {
          // TODO: send http request to the server
        } else {
          // TODO: send http request to the server
        }
        setTimeout(() => {
          loadingElm.dismiss();
          this.isLoading = false;
          this.router.navigate(['/main/tabs/explore']);
        }, 100);
      });
  }

  // public submit() {

  // if (!this.loginForm.valid || this.isLoading) { return; }

  // const email = this.loginForm.value.email;
  // const password = this.loginForm.value.password;
  // console.log(email,password);

  // if (this.isLogin) {
  // // TODO: send http request to the server
  // } else {
  //   // TODO: send http request to the server
  // }
  // }

  public switchAuth() {
    this.isLogin = !this.isLogin;
    console.log(this.isLogin);
  }
  public formIsValid(): boolean {
    return this.loginForm.valid;
  }
}
