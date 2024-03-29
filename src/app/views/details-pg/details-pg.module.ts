import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPgRoutingModule } from './details-pg-routing.module';
import { MatListModule } from '@angular/material/list';
import { DetailsPgComponent } from './details-pg.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [DetailsPgComponent],
    imports: [
        CommonModule,
        DetailsPgRoutingModule,
        MatListModule,
        MatIconModule,
    ],
})
export class DetailsPgModule {}
