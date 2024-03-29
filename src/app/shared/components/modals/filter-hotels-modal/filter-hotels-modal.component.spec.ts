import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterHotelsModalComponent } from './filter-hotels-modal.component';

describe('FilterHotelsModalComponent', () => {
  let component: FilterHotelsModalComponent;
  let fixture: ComponentFixture<FilterHotelsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterHotelsModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterHotelsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
