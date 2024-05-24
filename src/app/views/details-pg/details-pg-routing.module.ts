import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsPgComponent } from './details-pg.component';

const routes: Routes = [
    {
        path: 'details/:id',
        component: DetailsPgComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DetailsPgRoutingModule {}
