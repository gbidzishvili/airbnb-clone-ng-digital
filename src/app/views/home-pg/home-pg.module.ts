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
import { PipesModule } from '../../shared/pipes/pipes.module';

@NgModule({
    declarations: [
        HomePgComponent,
        HotelComponent,
        HotelListComponent,
        FilterComponent,
    ],
    imports: [
        CommonModule,
        HomePgRoutingModule,
        MatIconModule,
        MatDialogModule,
        ModalsModule,
        PipesModule,
    ],
})
export class HomePgModule {}
