import { Pipe, PipeTransform } from '@angular/core';
import { Tuple } from '../../core/models/typle.model';

@Pipe({
    name: 'textShortener',
})
export class TextShortenerPipe implements PipeTransform {
    transform(value: string, limit: number): string {
        return value.length > limit ? value.slice(0, limit) + '...' : value;
    }
}
