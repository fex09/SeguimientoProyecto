import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/empresa';
import { NgForm } from '@angular/forms';
import { EmpresaService } from 'src/app/Services/empresa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-empresa-editar',
  templateUrl: './empresa-editar.component.html',
  styleUrls: ['./empresa-editar.component.scss']
})
export class EmpresaEditarComponent implements OnInit {

  empresa: Empresa;
  id: number;

  constructor(private servicio: EmpresaService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
    });
  }

  ngOnInit() {
    this.servicio.getEmpresaList().valueChanges().subscribe((emps: Empresa[]) => {
      this.empresa = emps.filter(
        (e) => e.id === this.id
      )[0];
    });
  }

  guardar(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    this.servicio.updateEmpresa(this.id.toString(), this.empresa);
  }

  atras(): void {
    this.router.navigate(['/empresa/listar']);
  }


}
