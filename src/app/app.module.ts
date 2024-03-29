import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavigationModule } from './navigation/navigation.module';
import { AuthorizationModule } from './views/authorization/authorization.module';
import { HomePgModule } from './views/home-pg/home-pg.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NavigationModule,
        AuthorizationModule,
        HomePgModule,
    ],
    providers: [provideAnimationsAsync()],
    bootstrap: [AppComponent],
})
export class AppModule {}
