import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';

@Component({
  selector: 'app-seguimiento-lista',
  templateUrl: './seguimiento-lista.component.html',
  styleUrls: ['./seguimiento-lista.component.scss']
})
export class SeguimientoListaComponent implements OnInit {

  proyectos: Proyecto;

  constructor() { }

  ngOnInit() {
  }

}
