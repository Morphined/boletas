import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearBoletasComponent } from './crear-boletas.component';

describe('CrearBoletasComponent', () => {
  let component: CrearBoletasComponent;
  let fixture: ComponentFixture<CrearBoletasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearBoletasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearBoletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
