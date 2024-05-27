import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PersonalInfoPgRoutingModule } from './personal-info-pg-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonalInfoPgComponent } from './personal-info-pg.component';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';

@NgModule({
    declarations: [PersonalInfoPgComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        PersonalInfoPgRoutingModule,
        SharedComponentsModule,
    ],
    providers: [],
})
export class PersonalInfoPgPgModule {}
