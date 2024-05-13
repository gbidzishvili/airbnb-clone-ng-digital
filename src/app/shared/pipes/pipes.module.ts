import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextShortenerPipe } from './text-shortener.pipe';
import { SafehtmlPipe } from './safehtml.pipe';

@NgModule({
    declarations: [TextShortenerPipe, SafehtmlPipe],
    imports: [CommonModule],
    exports: [TextShortenerPipe, SafehtmlPipe],
})
export class PipesModule {}
