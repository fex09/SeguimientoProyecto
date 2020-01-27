import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/empresa';
import { EmpresaService } from 'src/app/Services/empresa.service';
import { AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-empresa-lista',
  templateUrl: './empresa-lista.component.html',
  styleUrls: ['./empresa-lista.component.scss']
})
export class EmpresaListaComponent implements OnInit {

  empresas: Empresa[];
  servicio: EmpresaService;
  message: string;
  durationInSeconds = 4;
  empresa: Empresa;

  constructor(private es: EmpresaService,
              private snackBar: MatSnackBar ) {
    this.servicio = es;
    this.message = '';
    this.empresa = new Empresa();
  }

  ngOnInit() {
    this.getEmpresas();
  }

  getEmpresas() {
    this.servicio.getEmpresaList()
    .valueChanges()
    .subscribe(emps => {
      this.empresas = emps;
    });
  }

  deleteEmpresa(id: string): void {
    this.servicio.deleteEmpresa(id.toString())
      .catch((err) => this.message = err)
      .then(() =>  this.snackBar
      .open('Registro eliminado correctamente!', 'Deshacer', {
        duration: this.durationInSeconds * 1000,
        verticalPosition: 'top'
      }));
  }
}
