import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IninicioComponent } from './inicio.component';

describe('IninicioComponent', () => {
  let component: IninicioComponent;
  let fixture: ComponentFixture<IninicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IninicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IninicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
