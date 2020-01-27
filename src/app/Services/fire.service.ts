import { Usuario } from 'src/app/models/usuario';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import 'rxjs/add/Observable/of';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FireService {
  user$: Observable <Usuario> ;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {
    //// Get auth data, then get firestore user document || null
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc <Usuario> (`users/${user.uid}`).valueChanges();
        } else {
          return Observable.of(null);
        }
      }));
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user);
      });
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: Usuario = {
      uid: user.uid,
      email: user.email,
      nombre: user.nombre,
      apellido: user.apellido,
      correoVerificado: user.correoVerificado,
      roles: {
        usuario: true
      }
    };
    return userRef.set(data, { merge: true });
  }

  ///// Role-based Authorization //////

  canRead(user: Usuario): boolean {
    const allowed = ['admin', 'usuario'];
    return this.checkAuthorization(user, allowed);
  }

  canEdit(user: Usuario): boolean {
    const allowed = ['admin'];
    return this.checkAuthorization(user, allowed);
  }

  canDelete(user: Usuario): boolean {
    const allowed = ['admin'];
    return this.checkAuthorization(user, allowed);
  }

  // determines if user has matching role
  private checkAuthorization(user: Usuario, allowedRoles: string[]): boolean {
    if (!user) { return false; }
    for (const role of allowedRoles) {
      if (user.roles[role]) {
        return true;
      }
    }
    return false;
  }
}
