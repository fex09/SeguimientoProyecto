import { TipoService } from './../../../Services/tipo.service';
import { TipoProyecto } from './../../../models/tipoProyecto';
import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';
import { Router, ActivatedRoute } from '@angular/router';
import { AreaService } from 'src/app/Services/area.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Area } from 'src/app/models/area';
import { Estado } from 'src/app/models/estado';
import { AdministradorProyecto } from 'src/app/models/administradorProyecto';
import { EstadoService } from 'src/app/Services/estado.service';
import { PmService } from 'src/app/Services/pm.service';
import { Observacion } from 'src/app/models/observacion';
import { NgForm } from '@angular/forms';
import { ProyectoService } from 'src/app/Services/proyecto.service';
import { Empresa } from 'src/app/models/empresa';
import { EmpresaService } from 'src/app/Services/empresa.service';

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
  empresas: Empresa[];
  pms: AdministradorProyecto[];
  durationInSeconds = 4;
  sinObservacion: boolean;
  observaciones: Observacion[];
  obs: string;
  message: string;
  nombre: string;

  public prioridades: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  porcentaje1 = 0.6;
  porcentaje2 = 0.25;
  porcentaje3 = 0.15;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private servicioArea: AreaService,
              private servicioTipo: TipoService,
              private servicioEstado: EstadoService,
              private servicioPM: PmService,
              private servicioProyecto: ProyectoService,
              private servicioEmpresa: EmpresaService,
              private snackBar: MatSnackBar) {
    this.proyecto = new Proyecto();
    this.sinObservacion = false;
    this.observaciones = [];
    this.message = '';
    this.proyecto.observaciones = [];
    this.obs = '';
    this.route.paramMap.subscribe(params => {
      this.nombre = params.get('nombre');
    });
   }

  ngOnInit() {
    this.getAreas();
    this.getTipos();
    this.getEstados();
    this.getPMs();
    this.getEmpresas();
    if (this.nombre !== '0') {
      this.servicioProyecto.getList()
        .valueChanges()
        .subscribe((obj: Proyecto[]) => {
          this.proyecto = obj.filter(
            (e) => e.nombre === this.nombre
          )[0];
          this.observaciones = obj.filter(
            (e) => {
              return e.nombre === this.nombre;
            }
          )[0].observaciones;
        });
    }

  }

  guardar(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const obj = {
      fecha: new Date(),
      observacion: this.obs
    };
    this.proyecto.observaciones.push(obj);
    this.proyecto.idProyecto = this.proyecto.nombre;
    this.proyecto.fechaCreacion = new Date();
    const resp = this.servicioProyecto.create(this.proyecto);
    this.message = resp === '' ? 'Registro guardado correctamente! ' + this.proyecto.nombre : resp;
    this.snackBar.open(this.message , 'Deshacer', {
      duration: this.durationInSeconds * 1000,
      verticalPosition: 'top'
    });
    this.getObservacion(this.proyecto.idProyecto);
    this.obs = '';
  }

  getObservacion(idProyecto: string): void {
    this.servicioProyecto.getList()
    .valueChanges()
    .subscribe((proy: Proyecto[]) => {
      this.observaciones = proy.filter(
        (e) => {
          return e.idProyecto === idProyecto;
        }
      )[0].observaciones;
    });
  }

  guardarObservacion() {
    this.sinObservacion = this.obs === '';
    if (!this.sinObservacion) {
      const obj = {
        fecha: new Date(),
        observacion: this.obs
      };
      this.proyecto.observaciones.push(obj);
      this.servicioProyecto.update(this.proyecto.nombre, this.proyecto)
      .then(() => {
        this.message = 'Se agregó la observación con éxito!';
        this.snackBar.open(this.message, 'Deshacer', {
          duration: this.durationInSeconds * 1000,
          verticalPosition: 'top'
        });
      }).catch(err => alert(err));
      this.obs = '';
    } else {
      this.snackBar.open('Debe agregar una observación!' , '', {
        duration: this.durationInSeconds * 1000,
        verticalPosition: 'top'
      });
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

  getEmpresas(): void {
    this.servicioEmpresa.getEmpresaList()
    .valueChanges()
    .subscribe(obj => {
      this.empresas = obj;
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
