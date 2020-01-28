import { Injectable } from '@angular/core';
import { Estado } from '../models/estado';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  estados: Estado[];
  private dbPath = '/Estado';
  ref: AngularFireList<Estado> = null;
  men: string;

  constructor(private db: AngularFireDatabase) {
    this.ref = db.list(this.dbPath);
    this.men = '';
   }

   /* Si retorna un string vacío es
  que se guardó correctamente el dato*/
  create(objeto: Estado): string {
    this.ref.update(objeto.id.toString(), objeto).then(() =>
      this.men = '').catch((err) =>
      this.men = err);
    console.log(this.men);
    return this.men;
  }

  getList(): AngularFireList<Estado> {
    return this.ref;
  }

  update(key: string, value: any): Promise<void> {
    return this.ref.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.ref.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.ref.remove();
  }

}
