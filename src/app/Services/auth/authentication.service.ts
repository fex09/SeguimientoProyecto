import { Injectable } from '@angular/core';
import { AngularFireAuth, AuthProviders, AuthMethods } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: Observable<firebase.User>;
  error: any;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;
   }

   loggedIn() {
    return this.angularFireAuth.auth;
   }

   SignUp(email: string, password: string) {
    this.angularFireAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Registro existoso!', res);
      })
      .catch(error => {
        console.log('Hubo un error: ', error.message);
      });
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Ingreso existoso!');
      })
      .catch(err => {
        console.log('Algo salió mal: ', err.message);
      });
  }

  /* Sign out */
  SignOut() {
    this.angularFireAuth
      .auth
      .signOut();
  }

  loginGoogle() {
    this.angularFireAuth.auth..({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(
        (success) => {
        this.router.navigate(['/home']);
      }).catch(
        (err) => {
        this.error = err;
      })
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        })
      this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error)
    })
  }
}
