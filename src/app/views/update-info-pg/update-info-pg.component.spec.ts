import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInfoPgComponent } from './update-info-pg.component';

describe('UpdateInfoPgComponent', () => {
    let component: UpdateInfoPgComponent;
    let fixture: ComponentFixture<UpdateInfoPgComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UpdateInfoPgComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(UpdateInfoPgComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
