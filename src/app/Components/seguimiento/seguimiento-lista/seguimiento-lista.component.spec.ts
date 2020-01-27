import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoListaComponent } from './seguimiento-lista.component';

describe('SeguimientoListaComponent', () => {
  let component: SeguimientoListaComponent;
  let fixture: ComponentFixture<SeguimientoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguimientoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
