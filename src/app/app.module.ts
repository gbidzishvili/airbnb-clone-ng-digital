import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavigationModule } from './navigation/navigation.module';
import { AuthorizationModule } from './views/authorization/authorization.module';
import { HomePgModule } from './views/home-pg/home-pg.module';
import { DetailsPgComponent } from './views/details-pg/details-pg.component';
import { DetailsPgModule } from './views/details-pg/details-pg.module';
import { HomePgComponent } from './views/home-pg/home-pg.component';

@NgModule({
    declarations: [AppComponent, HomePgComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NavigationModule,
        AuthorizationModule,
        HomePgModule,
        DetailsPgModule,
    ],
    providers: [provideAnimationsAsync()],
    bootstrap: [AppComponent],
})
export class AppModule {}
