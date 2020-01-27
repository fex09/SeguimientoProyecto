import { AuthService } from 'src/app/Services/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/empresa';
import { EmpresaService } from 'src/app/Services/empresa.service';
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
  user: Usuario;

  constructor(private es: EmpresaService,
              private snackBar: MatSnackBar,
              public auth: AuthService ) {
    this.servicio = es;
    this.message = '';
    this.empresa = new Empresa();
  }

  ngOnInit() {
    this.getEmpresas();
  }

  getEmpresas() {
    /* if (this.auth.canRead(this.user)) { */
      this.servicio.getEmpresaList()
        .valueChanges()
        .subscribe(emps => {
          this.empresas = emps;
        });
   /*  } else {
      console.error('No tienes permisos para ver empresas!');
    } */
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
