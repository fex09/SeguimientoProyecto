import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.scss']
})
export class MantenimientoComponent implements OnInit {

  nav = [
    {name: 'Empresas', route: 'empresa/listar', icon: 'business'},
    {name: 'Areas', route: 'area/listar', icon: 'layers'},
    {name: 'Estados', route: 'estados-lista', icon: 'apps'},
    {name: 'Tipos', route: 'tipoProyecto-lista', icon: 'location_city'},
    {name: 'Adm. Proyectos', route: 'admin-lista', icon: 'group'},
  ];

  constructor() {

  }

  ngOnInit() {
  }

}
