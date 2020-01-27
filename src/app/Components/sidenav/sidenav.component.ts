import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {

  islogged: boolean;

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              public authService: AuthService,
              private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.islogged = authService.isLoggedIn;
  }

  mobileQuery: MediaQueryList;

  fillerNav = [
    {name: 'Inicio', route: 'home', icon: 'home'},
    {name: 'Seguimiento', route: 'seguimiento-lista', icon: 'move_to_inbox'},
    {name: 'Mantenimiento', route: 'mantenimiento', icon: 'apps'},
    {name: 'Perfil Usuario', route: 'dashboard', icon: 'how_to_reg'},
  ];

  // https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/

  // tslint:disable-next-line: variable-name
  private _mobileQueryListener: () => void;

  ngOnInit() {
  }

  logout() {
    this.islogged = false;
    this.authService.SignOut();
    this.router.navigate(['sign-in']);
  }

  login() {
    this.islogged = this.authService.isLoggedIn;
    this.router.navigate(['sign-in']);
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
