import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEventCompComponent } from './new-event-comp.component';

describe('NewEventCompComponent', () => {
  let component: NewEventCompComponent;
  let fixture: ComponentFixture<NewEventCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEventCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEventCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
