import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHistoryPgComponent } from './order-history-pg.component';

describe('OrderHistoryPgComponent', () => {
  let component: OrderHistoryPgComponent;
  let fixture: ComponentFixture<OrderHistoryPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderHistoryPgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderHistoryPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
