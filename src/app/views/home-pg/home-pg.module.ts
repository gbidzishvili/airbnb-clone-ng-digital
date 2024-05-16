import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePgRoutingModule } from './home-pg-routing.module';
import { HotelComponent } from './components/hotel/hotel.component';
import { HotelListComponent } from './containers/hotel-list/hotel-list.component';
import { MatIconModule } from '@angular/material/icon';
import { HomePgComponent } from './home-pg.component';
import { FilterComponent } from './components/filter/filter.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalsModule } from '../../shared/components/modals/modals.module';
import { TextShortenerPipe } from '../../shared/pipes/text-shortener.pipe';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { HttpClientModule } from '@angular/common/http';
import { AmenitiesComponent } from './components/amenities/amenities.component';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { FiltersContainerComponent } from './containers/filters-container/filters-container.component';
@NgModule({
    declarations: [
        HomePgComponent,
        HotelComponent,
        HotelListComponent,
        FilterComponent,
        AmenitiesComponent,
        FiltersContainerComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        HomePgRoutingModule,
        MatIconModule,
        MatDialogModule,
        ModalsModule,
        PipesModule,
        HttpClientModule,
        SharedComponentsModule,
    ],
})
export class HomePgModule {}
