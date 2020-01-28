import { TipoService } from './../../../Services/tipo.service';
import { TipoProyecto } from './../../../models/tipoProyecto';
import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';
import { Router } from '@angular/router';
import { AreaService } from 'src/app/Services/area.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Area } from 'src/app/models/area';
import { Estado } from 'src/app/models/estado';
import { AdministradorProyecto } from 'src/app/models/administradorProyecto';
import { EstadoService } from 'src/app/Services/estado.service';
import { PmService } from 'src/app/Services/pm.service';
import { Observacion } from 'src/app/models/observacion';

@Component({
  selector: 'app-seguimiento-info',
  templateUrl: './seguimiento-info.component.html',
  styleUrls: ['./seguimiento-info.component.scss']
})
export class SeguimientoInfoComponent implements OnInit {
  public proyecto: Proyecto;
  areas: Area[];
  tipos: TipoProyecto[];
  estados: Estado[];
  pms: AdministradorProyecto[];
  durationInSeconds = 6;
  sinObservacion: boolean;
  observaciones: Observacion[];
  obs: string;

  public prioridades: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  porcentaje1 = 0.6;
  porcentaje2 = 0.25;
  porcentaje3 = 0.15;

  constructor(private router: Router,
              private servicioArea: AreaService,
              private servicioTipo: TipoService,
              private servicioEstado: EstadoService,
              private servicioPM: PmService,
              private snackBar: MatSnackBar) {
    this.proyecto = new Proyecto();
    this.sinObservacion = false;
    this.observaciones = [];
   }

  ngOnInit() {
    this.getAreas();
    this.getTipos();
    this.getEstados();
    this.getPMs();
  }

  guardar() {

  }

  guardarObservacion() {
    this.sinObservacion = this.obs === '';
    if (!this.sinObservacion) {

    }
  }

  getAreas(): void {
    this.servicioArea.getList()
    .valueChanges()
    .subscribe(obj => {
      this.areas = obj;
    });
    console.log(this.areas);
  }

  getTipos(): void {
    this.servicioTipo.getList()
    .valueChanges()
    .subscribe(obj => {
      this.tipos = obj;
    });
  }

  getEstados(): void {
    this.servicioEstado.getList()
    .valueChanges()
    .subscribe(obj => {
      this.estados = obj;
    });
  }

  getPMs(): void {
    this.servicioPM.getList()
    .valueChanges()
    .subscribe(obj => {
      this.pms = obj;
    });
  }

  calcularPeso(av: number, mc: number, dc: number): number {
    if (av === null || av === undefined) { av = 0; }
    if (mc === null || mc === undefined) { mc = 0; }
    if (dc === null || dc === undefined) { dc = 0; }
    return av + mc + dc;
  }

  calcularAporte(av: number, mc: number, dc: number): number {
    if (av === null || av === undefined) { av = 0; }
    if (mc === null || mc === undefined) { mc = 0; }
    if (dc === null || dc === undefined) { dc = 0; }
    return (av * this.porcentaje1) + (mc * this.porcentaje2) + (dc * this.porcentaje3);
  }

  validar3(e) {
    if (e > 3 || e < 1) {
      this.snackBar.open('valor entre 1 y 3.', '', {
        duration: this.durationInSeconds * 1000,
        verticalPosition: 'top'
      });
    } else {
      this.proyecto.peso = this.calcularPeso(this.proyecto.aumentaVentas,
                              this.proyecto.mejoraControl,
                              this.proyecto.disminuyeCostos);
      this.proyecto.aporte = this.calcularAporte(this.proyecto.aumentaVentas,
                              this.proyecto.mejoraControl,
                              this.proyecto.disminuyeCostos);
    }
  }

  atras(): void {
    this.router.navigate(['/seguimiento-lista']);
  }

}
