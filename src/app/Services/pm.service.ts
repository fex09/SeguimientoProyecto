import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { AdministradorProyecto } from '../models/administradorProyecto';

@Injectable({
  providedIn: 'root'
})
export class PmService {
  pms: AdministradorProyecto[];
  private dbPath = '/pm';
  ref: AngularFireList<AdministradorProyecto> = null;
  men: string;

  constructor(private db: AngularFireDatabase)
  { this.ref = db.list(this.dbPath);
    this.men = ''; }

    /* Si retorna un string vacío es
  que se guardó correctamente el dato*/
  create(objeto: AdministradorProyecto): string {
    this.ref.update(objeto.id.toString(), objeto).then(() =>
      this.men = '').catch((err) =>
      this.men = err);
    console.log(this.men);
    return this.men;
  }

  getList(): AngularFireList<AdministradorProyecto> {
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
