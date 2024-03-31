import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPgRoutingModule } from './details-pg-routing.module';
import { MatListModule } from '@angular/material/list';
import { DetailsPgComponent } from './details-pg.component';
import { MatIconModule } from '@angular/material/icon';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { CalculatorComponent } from './components/calculator/calculator.component';
@NgModule({
    declarations: [DetailsPgComponent, CarouselComponent, CalculatorComponent],
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

        FormsModule,
    ],
})
export class DetailsPgModule {}
