import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.scss']
})
export class MantenimientoComponent implements OnInit {

  nav = [
    {name: 'Empresas', route: 'empresa-lista', icon: 'business'},
    {name: 'Areas', route: 'users', icon: 'layers'},
    {name: 'Estados', route: 'estados-lista', icon: 'apps'},
    {name: 'Tipos', route: 'tipoProyecto-lista', icon: 'location_city'},
    {name: 'Adm. Proyectos', route: 'admin-lista', icon: 'group'},
  ];

  constructor() {

  }

  ngOnInit() {
  }

}
