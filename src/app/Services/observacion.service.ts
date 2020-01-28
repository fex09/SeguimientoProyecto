import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observacion } from '../models/observacion';

@Injectable({
  providedIn: 'root'
})
export class ObservacionService {
  observaciones: Observacion[];
  private dbPath = '/{proyecto}/observacion';
  ref: AngularFireList<Observacion> = null;
  men: string;
  constructor(private db: AngularFireDatabase) {
    this.ref = db.list(this.dbPath);
    this.men = '';
  }

   /* Si retorna un string vacío es
  que se guardó correctamente el dato*/
  create(objeto: Observacion): string {
    this.ref.update(objeto.fecha.toString(), objeto).then(() =>
      this.men = '').catch((err) =>
      this.men = err);
    console.log(this.men);
    return this.men;
  }

  getList(): AngularFireList<Observacion> {
    return this.ref;
  }

  update(key: string, value: any): Promise<void> {
    return this.ref.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.ref.remove(key);
  }

}
