import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { MaterialModule } from '../modules/material/material.module';

@NgModule({
    declarations: [CarouselComponent],
    imports: [CommonModule, MaterialModule],
    exports: [CarouselComponent],
})
export class SharedComponentsModule {}
