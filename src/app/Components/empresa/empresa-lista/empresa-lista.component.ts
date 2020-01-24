import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/empresa';
import { EmpresaService } from 'src/app/Services/empresa.service';
import { AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-empresa-lista',
  templateUrl: './empresa-lista.component.html',
  styleUrls: ['./empresa-lista.component.scss']
})
export class EmpresaListaComponent implements OnInit {

  empresas: Empresa[];
  emps: any;
  service: EmpresaService;

  constructor(private es: EmpresaService ) {
    this.service = es;
  }

  ngOnInit() {
   /*  this.empresas = this.service.getList();*/
    console.log('el componente empresa');
    console.log(this.empresas);
    this.getEmpresas();
  }

 /*  onSubmit() {
    this.db.list('items').push({ content: this.itemValue});
    this.itemValue = '';
  }
 */

getEmpresas() {
  this.service.getEmpresaList().valueChanges().subscribe(emps => {
    this.emps = emps;
    console.log(this.emps);
  });
}
}
