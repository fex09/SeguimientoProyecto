import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { FirebaseAuth, FirebaseApp } from '@angular/fire';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Hero, We save you!';
  description = 'Angular-Fire-Demo';
  itemValue = '';
  items: Observable<any[]>;
  usuario: Usuario;

  constructor(public db: FirebaseApp) {
    this.usuario = new Usuario();
    if (db.auth().currentUser !== null) {
      this.usuario.nombre = db.auth().currentUser.displayName;
    }
  }

  ngOnInit() {
  }

}
