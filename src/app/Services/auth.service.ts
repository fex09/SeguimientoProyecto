import { Observable } from 'rxjs';
import { Injectable, NgZone } from '@angular/core';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;
  user$: Observable<Usuario>;
  snackBar: any;

  constructor(public afs: AngularFirestore,   // Inject Firestore service
              public afAuth: AngularFireAuth, // Inject Firebase auth service
              public router: Router,
              public ngZone: NgZone) {
    /* this.user$ = this.afAuth.authState
    .switchMap(user => {
      if (user) {
        return this.afs.doc<Usuario>(`users/${user.id}`).valueChanges();
      } else {
        return Observable.of(null);
      }
    }); */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

 // entrar con correo y password
 SignIn(email, password) {
  return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      this.ngZone.run(() => {
        this.router.navigate(['home']);
      });
      // this.SetUserData(result.user);
    }).catch((error) => {
      if (error.message.indexOf('is no user', 0) > 0) {
        alert('El usuario no está registrado');
      } else if (error.message.indexOf('password', 0) > 0)  {
        alert('Password incorrecto!');
      } else {
        console.log(error.message);
      }
    });
}

// registrar con correo y password
SignUp(email, password) {
  return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
      /* Call the SendVerificaitonMail() function when new user sign
      up and returns promise */
      this.SendVerificationMail();
      console.log(result.user);
      this.SetUserData(result.user);
    }).catch((error) => {
      console.log(error.message);
    });
}

// enviar correo de verificacion
SendVerificationMail() {
  return this.afAuth.auth.currentUser.sendEmailVerification()
  .then(() => {
    this.router.navigate(['verify-email-address']);
  });
}

// reseteo de password
ForgotPassword(passwordResetEmail) {
  return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
  .then(() => {
    window.alert('Reseteo de password enviado, revise su correo electrónico.');
  }).catch((error) => {
    window.alert(error);
  });
}

// verificar si el usuario está loggeado
get isLoggedIn(): boolean {
  const user = JSON.parse(localStorage.getItem('user'));
  // return (user !== null && user.emailVerified !== false) ? true : false;
  return (user !== null) ? true : false;
}

// autenticación con google
GoogleAuth() {
  return this.AuthLogin(new auth.GoogleAuthProvider());
}

// proveedores de loggeo
AuthLogin(provider) {
  return this.afAuth.auth.signInWithPopup(provider)
  .then((result) => {
     this.ngZone.run(() => {
        this.router.navigate(['home']);
      });
     this.SetUserData(result.user);
  }).catch((error) => {
    window.alert(error);
  });
}

/* Setting up user data when sign in with username/password,
sign up with username/password and sign in with social auth
provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
SetUserData(user) {
  const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
  console.log(user);
  const userData: Usuario = {
    uid: user.uid,
    email: user.email,
    nombre: user.displayName,
    apellido: user.apellido,
    correoVerificado: user.correoVerificado,
    roles: user.rol
  };
  return userRef.set(userData, {
    merge: true
  });
}
// https://angularfirebase.com/lessons/role-based-authorization-with-firestore-nosql-and-angular-5/
private updateUserData(user) {
  const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
  const data: Usuario = {
    uid: user.uid,
    email: user.email,
    nombre: user.nombre,
    apellido: user.apellido,
    correoVerificado: user.correoVerificado,
    roles: {
      admin: true
    }
  };
  return userRef.set(data, { merge: true });
}

  // Sign out
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['home']);
    });
  }

  puedeLeer(user: Usuario): boolean {
    const permitido = ['admin', 'usuario'];
    return this.verificarAutorizacion(user, permitido);
  }

  puedeEditar(user: Usuario): boolean {
    const permitido = ['admin'];
    return this.verificarAutorizacion(user, permitido);
  }

  puedeEliminar(user: Usuario): boolean {
    const permitido = ['admin'];
    return this.verificarAutorizacion(user, permitido);
  }

  private verificarAutorizacion(user: Usuario, rolesPermitidos: string[]): boolean {
    if (!user) { return false; }
    for (const role of rolesPermitidos) {
      if (user.roles[role]) {
        return true;
      }
    }
    return false;
  }
}

// https://www.positronx.io/angular-8-ngif-ngifelse-ngifthen-tutorial-with-examples/


