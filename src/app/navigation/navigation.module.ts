import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FilterModalComponent } from './components/header/filter-modal/filter-modal.component';
import { MatSliderModule } from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [FooterComponent, HeaderComponent, FilterModalComponent],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatSliderModule,
        ReactiveFormsModule,
    ],
    exports: [FooterComponent, HeaderComponent],
})
export class NavigationModule {}
