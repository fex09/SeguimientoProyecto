import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoInfoComponent } from './seguimiento-info.component';

describe('SeguimientoInfoComponent', () => {
  let component: SeguimientoInfoComponent;
  let fixture: ComponentFixture<SeguimientoInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguimientoInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
