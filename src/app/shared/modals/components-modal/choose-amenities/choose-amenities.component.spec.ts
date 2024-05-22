import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseAmenitiesComponent } from './choose-amenities.component';

describe('ChooseAmenitiesComponent', () => {
  let component: ChooseAmenitiesComponent;
  let fixture: ComponentFixture<ChooseAmenitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChooseAmenitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
