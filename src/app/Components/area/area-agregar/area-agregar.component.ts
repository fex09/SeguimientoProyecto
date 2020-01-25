import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { AreaService } from 'src/app/Services/area.service';
import { Area } from 'src/app/models/area';

@Component({
  selector: 'app-area-agregar',
  templateUrl: './area-agregar.component.html',
  styleUrls: ['./area-agregar.component.scss']
})
export class AreaAgregarComponent implements OnInit {
  area: Area;
  message: string;
  durationInSeconds = 4;

 constructor(private servicio: AreaService,
             private router: Router,
             private snackBar: MatSnackBar) {
    this.area = new Area();
    this.message = '';
  }

  ngOnInit() {
  }

  guardar(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const resp = this.servicio.create(this.area);
    this.message = resp === '' ? 'Registro guardado correctamente! ' + this.area.nombre : resp;
    this.snackBar.open(this.message , 'Deshacer', {
      duration: this.durationInSeconds * 1000,
      verticalPosition: 'top'
    });
    this.area = new Area();
    this.atras();
  }

  atras(): void {
    this.router.navigate(['/area/listar']);
  }


}
