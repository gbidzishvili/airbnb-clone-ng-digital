import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavigationModule } from './navigation/navigation.module';
import { AuthorizationModule } from './views/authorization/authorization.module';
import { HomePgModule } from './views/home-pg/home-pg.module';
import { DetailsPgModule } from './views/details-pg/details-pg.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmReservationPgModule } from './views/confirm-reservation-pg/confirm-reservation-pg.module';
import { OrderHistoryPgModule } from './views/order-history-pg/order-history-pg.module';
import { PersonalInfoPgPgModule } from './views/personal-info-pg/personal-info-pg.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NavigationModule,
        AuthorizationModule,
        HomePgModule,
        OrderHistoryPgModule,
        DetailsPgModule,
        ConfirmReservationPgModule,
        PersonalInfoPgPgModule,
    ],
    providers: [provideAnimationsAsync()],
    bootstrap: [AppComponent],
})
export class AppModule {}
