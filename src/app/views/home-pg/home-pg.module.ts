import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePgRoutingModule } from './home-pg-routing.module';
import { HotelComponent } from './components/hotel/hotel.component';
import { HotelListComponent } from './containers/hotel-list/hotel-list.component';
import { Hotel } from './models/hotel.model';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from '../../shared/modules/material/material.module';

@NgModule({
    declarations: [HotelComponent, HotelListComponent],
    imports: [CommonModule, HomePgRoutingModule, MatIconModule],
    exports: [HotelComponent, HotelListComponent],
})
export class HomePgModule {}
