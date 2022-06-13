import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUsuarioCompComponent } from './info-usuario-comp.component';

describe('InfoUsuarioCompComponent', () => {
  let component: InfoUsuarioCompComponent;
  let fixture: ComponentFixture<InfoUsuarioCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoUsuarioCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoUsuarioCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
