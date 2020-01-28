import { Injectable } from '@angular/core';
import { Proyecto } from '../models/proyecto';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  proyectos: Proyecto[];
  private dbPath = '/proyecto';
  ref: AngularFireList<Proyecto> = null;
  men: string;

  constructor(private db: AngularFireDatabase) {
    this.ref = db.list(this.dbPath);
    this.men = '';
  }

    /* Si retorna un string vacío es
  que se guardó correctamente el dato*/
  create(objeto: Proyecto): string {
    this.ref.update(objeto.idProyecto.toString(), objeto).then(() =>
      this.men = '').catch((err) =>
      this.men = err);
    console.log(this.men);
    return this.men;
  }

  getList(): AngularFireList<Proyecto> {
    return this.ref;
  }

  update(key: string, value: any): Promise<void> {
    return this.ref.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.ref.remove(key);
  }
}
