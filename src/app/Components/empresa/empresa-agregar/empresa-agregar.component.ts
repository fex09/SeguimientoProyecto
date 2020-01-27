import { AuthService } from 'src/app/Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/empresa';
import { EmpresaService } from 'src/app/Services/empresa.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-empresa-agregar',
  templateUrl: './empresa-agregar.component.html',
  styleUrls: ['./empresa-agregar.component.scss']
})
export class EmpresaAgregarComponent implements OnInit {

  empresa: Empresa;
  message: string;
  durationInSeconds = 4;


  constructor(private servicio: EmpresaService,
              private router: Router,
              private snackBar: MatSnackBar,
              public auth: AuthService) {
    this.empresa = new Empresa();
    this.message = '';
  }

  ngOnInit() {
  }

  guardar(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const resp = this.servicio.createEmpresa(this.empresa);
    this.message = resp === '' ? 'Se guardó la empresa ' + this.empresa.nombre : resp;
    this.snackBar.open(this.message , 'Deshacer', {
      duration: this.durationInSeconds * 1000,
      verticalPosition: 'top'
    });
    this.empresa = new Empresa();
    this.atras();
  }

  atras(): void {
    this.router.navigate(['/empresa/listar']);
  }

}
