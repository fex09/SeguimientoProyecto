import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmpresaEditarComponent } from '../empresa/empresa-editar/empresa-editar.component';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {
  durationInSeconds = 4;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar() {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

}
