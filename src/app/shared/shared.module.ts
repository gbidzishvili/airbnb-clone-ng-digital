import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from './components/shared-components.module';
import { PipesModule } from './pipes/pipes.module';
import { DirectivesModule } from './directives/directives.module';
import { ModulesModule } from './modules/modules.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        SharedComponentsModule,
        PipesModule,
        DirectivesModule,
        ModulesModule,
    ],
})
export class SharedModule {}
