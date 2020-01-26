import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/auth/authentication.service';
import { Credenciales } from 'src/app/models/credenciales';

@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.component.html',
  styleUrls: ['./login-email.component.scss']
})
export class LoginEmailComponent implements OnInit {

  credentials: Credenciales;
  error: any;

  constructor(public authenticationService: AuthenticationService,
              private router: Router) {
    this.credentials = new Credenciales();
  }

  ngOnInit() {
  }

  signUp(form: NgForm) {
    this.authenticationService.SignUp(this.credentials.email, this.credentials.password);
    this.credentials.email = '';
    this.credentials.password = '';
  }

  signIn(form: NgForm) {
    this.credentials.email = '';
    this.credentials.password = '';
  }

  signOut() {
    this.authenticationService.SignOut();
  }

}
