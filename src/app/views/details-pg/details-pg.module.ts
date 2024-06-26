import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPgRoutingModule } from './details-pg-routing.module';
import { MatListModule } from '@angular/material/list';
import { DetailsPgComponent } from './details-pg.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { BannerComponent } from './components/banner/banner.component';
import { HostProfileComponent } from './components/host-profile/host-profile.component';
import { CalendarComponent } from './components/calendar/calendar.component';
@NgModule({
    declarations: [DetailsPgComponent, CalculatorComponent, BannerComponent, HostProfileComponent, CalendarComponent],
    imports: [
        CommonModule,
        DetailsPgRoutingModule,
        MatListModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        SharedComponentsModule,
        FormsModule,
    ],
})
export class DetailsPgModule {}
