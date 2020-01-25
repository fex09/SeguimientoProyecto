import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Area } from '../models/area';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  areas: Area[];
  private dbPath = '/area';
  ref: AngularFireList<Area> = null;
  men: string;

  constructor(
    private db: AngularFireDatabase
  ) {
    this.ref = db.list(this.dbPath);
    this.men = '';
   }


  /* Si retorna un string vacío es
  que se guardó correctamente el dato*/
  create(objeto: Area): string {
    this.ref.update(objeto.id.toString(), objeto).then(() =>
      this.men = '').catch((err) =>
      this.men = err);
    console.log(this.men);
    return this.men;
  }

  getList(): AngularFireList<Area> {
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
