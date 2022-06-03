import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardeventoComponent } from './cardevento.component';

describe('CardeventoComponent', () => {
  let component: CardeventoComponent;
  let fixture: ComponentFixture<CardeventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardeventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardeventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
