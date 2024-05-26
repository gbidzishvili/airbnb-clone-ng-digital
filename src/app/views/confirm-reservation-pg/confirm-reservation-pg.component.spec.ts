import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmReservationPgComponent } from './confirm-reservation-pg.component';

describe('ConfirmReservationPgComponent', () => {
  let component: ConfirmReservationPgComponent;
  let fixture: ComponentFixture<ConfirmReservationPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmReservationPgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmReservationPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
