import { Component, OnInit } from '@angular/core';
import { AreaService } from 'src/app/Services/area.service';
import { Area } from 'src/app/models/area';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-area-lista',
  templateUrl: './area-lista.component.html',
  styleUrls: ['./area-lista.component.scss']
})
export class AreaListaComponent implements OnInit {

  areas: Area[];
  servicio: AreaService;
  message: string;
  durationInSeconds = 4;
  area: Area;

  constructor(private es: AreaService,
              private snackBar: MatSnackBar) {
    this.servicio = es;
    this.message = '';
    this.area = new Area();
  }

  ngOnInit() {
    this.getLista();
  }

  getLista() {
    this.servicio.getList()
    .valueChanges()
    .subscribe(obj => {
      this.areas = obj;
    });
  }

  deleteArea(id: string): void {
    this.servicio.delete(id.toString())
      .catch((err) => this.message = err)
      .then(() =>  this.snackBar
      .open('Registro eliminado correctamente!', 'Deshacer', {
        duration: this.durationInSeconds * 1000,
        verticalPosition: 'top'
      }));
  }

}
