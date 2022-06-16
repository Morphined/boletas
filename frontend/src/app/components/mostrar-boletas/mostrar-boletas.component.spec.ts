import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarBoletasComponent } from './mostrar-boletas.component';

describe('MostrarBoletasComponent', () => {
  let component: MostrarBoletasComponent;
  let fixture: ComponentFixture<MostrarBoletasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarBoletasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarBoletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
