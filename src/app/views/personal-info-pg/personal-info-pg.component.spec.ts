import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoPgComponent } from './personal-info-pg.component';

describe('PersonalInfoPgComponent', () => {
  let component: PersonalInfoPgComponent;
  let fixture: ComponentFixture<PersonalInfoPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalInfoPgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalInfoPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
