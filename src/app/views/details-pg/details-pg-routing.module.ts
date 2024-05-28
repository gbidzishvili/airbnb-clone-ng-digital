import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsPgComponent } from './details-pg.component';

const routes: Routes = [
    {
        path: ':id',
        component: DetailsPgComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DetailsPgRoutingModule {}
