import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/Services/proyecto.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-seguimiento-lista',
  templateUrl: './seguimiento-lista.component.html',
  styleUrls: ['./seguimiento-lista.component.scss']
})
export class SeguimientoListaComponent implements OnInit {

  proyectos: Proyecto[];
  message: string;
  durationInSeconds = 4;
  proyecto: Proyecto;


  constructor(private servicio: ProyectoService,
              private snackBar: MatSnackBar,
              public auth: AuthService) {
    this.message = '';
    this.proyecto = new Proyecto();
  }

  ngOnInit() {
    this.getProyectos();
  }

  getProyectos() {
      this.servicio.getList()
        .valueChanges()
        .subscribe(obj => {
          this.proyectos = obj.sort(p => p.prioridad);
        });
  }

}
