import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextShortenerPipe } from './text-shortener.pipe';

@NgModule({
    declarations: [TextShortenerPipe],
    imports: [CommonModule],
    exports: [TextShortenerPipe],
})
export class PipesModule {}
