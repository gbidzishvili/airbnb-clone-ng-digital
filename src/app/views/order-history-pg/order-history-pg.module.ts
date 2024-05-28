import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalsModule } from '../../shared/modals/modals.module';
import { TextShortenerPipe } from '../../shared/pipes/text-shortener.pipe';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { OrderHistoryPgRoutingModule } from './order-history-pg-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { OrderHistoryPgComponent } from './order-history-pg.component';
import { HomePgModule } from '../home-pg/home-pg.module';

@NgModule({
    declarations: [OrderHistoryPgComponent],
    imports: [
        CommonModule,
        OrderHistoryPgRoutingModule,
        MatIconModule,
        MatDialogModule,
        PipesModule,
        HttpClientModule,
        SharedComponentsModule,
        SharedComponentsModule,
    ],
    providers: [],
})
export class OrderHistoryPgModule {}
