import { Injectable } from '@angular/core';
import { Empresa } from '../models/empresa';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  empresas: Empresa[];
  dba: AngularFireDatabase;
  private dbPath = '/empresa';
  ref: AngularFireList<Empresa> = null;

  constructor(private db: AngularFireDatabase) {
    this.ref = db.list(this.dbPath);
    this.dba = db;
    console.log(this.ref);
  }

  public getList(): Empresa[] {
    // return this.ref;
    this.dba.list<Empresa>(this.dbPath)
    .valueChanges()
    .subscribe(empresas => {
      this.empresas = empresas;
      console.log('el getlist');
      console.log(this.empresas);
    });
    return this.empresas;
  }

  getEmpresaList(): AngularFireList<Empresa> {
    return this.ref;
  }

  // https://grokonez.com/frontend/angular/angular-8/angular-8-firebase-tutorial-crud-operations-angular-fire-example#Firebase_CRUD_operations_with_angularfire







}
