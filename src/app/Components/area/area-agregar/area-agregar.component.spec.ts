import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAgregarComponent } from './area-agregar.component';

describe('AreaAgregarComponent', () => {
  let component: AreaAgregarComponent;
  let fixture: ComponentFixture<AreaAgregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaAgregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
