import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  mobileQuery: MediaQueryList;

  fillerNav = [
    {name: 'Inicio', route: 'home', icon: 'home'},
    {name: 'Usuarios', route: 'users', icon: 'person_add'},
    {name: 'Mantenimiento', route: 'mantenimiento', icon: 'settings'},
    {name: 'Log In', route: 'login', icon: 'person_outline'}
  ];

  // https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/

  // tslint:disable-next-line: variable-name
  private _mobileQueryListener: () => void;

  ngOnInit() {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
