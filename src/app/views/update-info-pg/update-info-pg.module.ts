import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { UpdateInfoPgRoutingModule } from './update-info-pg-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateInfoPgComponent } from './update-info-pg.component';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';

@NgModule({
    declarations: [UpdateInfoPgComponent],
    imports: [CommonModule, UpdateInfoPgRoutingModule, SharedComponentsModule],
    providers: [],
})
export class UpdateInfoPgPgModule {}
