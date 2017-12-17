import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalInputComponent } from './rental-input.component';

describe('RentalInputComponent', () => {
  let component: RentalInputComponent;
  let fixture: ComponentFixture<RentalInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
