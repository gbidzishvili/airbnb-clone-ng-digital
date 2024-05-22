import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinRatingComponent } from './min-rating.component';

describe('MinRatingComponent', () => {
  let component: MinRatingComponent;
  let fixture: ComponentFixture<MinRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinRatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MinRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
