import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Area } from 'src/app/models/area';
import { AreaService } from 'src/app/Services/area.service';


@Component({
  selector: 'app-area-editar',
  templateUrl: './area-editar.component.html',
  styleUrls: ['./area-editar.component.scss']
})
export class AreaEditarComponent implements OnInit {

  area: Area;
  id: number;
  message: string;
  durationInSeconds = 4;

  constructor(private servicio: AreaService,
              private router: Router,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar
  ) {
    this.area = new Area();

    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
    });
  }

  ngOnInit() {
    this.servicio.getList()
    .valueChanges()
    .subscribe((emps: Area[]) => {
      this.area = emps.filter(
        (e) => e.id === this.id
      )[0];
    });
  }

  guardar(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    this.servicio.update(this.id.toString(), this.area)
    .then(() => {
      this.message = 'Se actualizó el registro!' + this.area.nombre;
      this.snackBar.open(this.message, 'Deshacer', {
        duration: this.durationInSeconds * 1000,
        verticalPosition: 'top'
      });
    })
    .catch(err => alert(err));
    this.atras();
  }

  atras(): void {
    this.router.navigate(['/area/listar']);
  }

}
