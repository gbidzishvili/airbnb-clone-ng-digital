import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[appExpirationDate]',
})
export class ExpirationDateDirective {
    constructor() {}

    @HostListener('input', ['$event'])
    onInput(event: KeyboardEvent) {
        const input = event.target as HTMLInputElement;

        // Remove all non-digits and slash
        let cleaned = input.value.replace(/[^0-9]/g, '');

        // Limit to 4 digits: MMYY
        cleaned = cleaned.substring(0, 4);

        // Split MM and YY
        const parts = [];
        if (cleaned.length > 2) {
            parts.push(cleaned.substring(0, 2)); // Month part
            parts.push(cleaned.substring(2, 4)); // Year part
        } else {
            parts.push(cleaned);
        }

        // Join parts with a slash
        input.value = parts.join(' / ');

        // Prevent cursor jumping by adjusting the cursor position
        // This adjusts for situations like backspacing over the slash
        setTimeout(() => {
            input.setSelectionRange(input.value.length, input.value.length);
        }, 0);
    }
}
