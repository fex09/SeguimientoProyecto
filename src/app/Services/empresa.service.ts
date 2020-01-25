import { Injectable } from '@angular/core';
import { Empresa } from '../models/empresa';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  empresas: Empresa[];
  private dbPath = '/empresa';
  ref: AngularFireList<Empresa> = null;
  men: string;

  constructor(private db: AngularFireDatabase) {
    this.ref = db.list(this.dbPath);
    this.men = '';
  }

  /* Si retorna un string vacío es
  que se guardó correctamente el dato*/
  createEmpresa(empresa: Empresa): string {
    this.ref.update(empresa.id.toString(), empresa).then(() =>
      this.men = '').catch((err) =>
      this.men = err);
    console.log(this.men);
    return this.men;
  }

  getEmpresaList(): AngularFireList<Empresa> {
    return this.ref;
  }

  getEmpresaById(id: string): AngularFireList<Empresa> {
    const x: AngularFireList<Empresa> = this.db.list(this.dbPath + '/' + id);
    return x;
  }

  updateEmpresa(key: string, value: any): Promise<void> {
    return this.ref.update(key, value);
  }

  deleteEmpresa(key: string): Promise<void> {
    return this.ref.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.ref.remove();
  }


  // tslint:disable-next-line: max-line-length
  // https://grokonez.com/frontend/angular/angular-8/angular-8-firebase-tutorial-crud-operations-angular-fire-example#Firebase_CRUD_operations_with_angularfire







}
