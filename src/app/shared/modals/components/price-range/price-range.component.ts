import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FitlerService } from '../../sevices/fitler.service';
@Component({
    selector: 'app-price-range',
    templateUrl: './price-range.component.html',
    styleUrl: './price-range.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceRangeComponent {
    sliderForm!: FormGroup;
    constructor(public filterService: FitlerService) {}
    ngOnInit() {
        this.sliderForm = new FormGroup({
            sliderLow: new FormControl(0),
            sliderHigh: new FormControl(500),
            numberLow: new FormControl(0),
            numberHigh: new FormControl(500),
        });
    }
    onUpdateSlider(formControlName: string, value: number) {
        if (!isNaN(value)) {
            this.sliderForm.get(`${formControlName}`)?.setValue(value);
        }
        if (formControlName === 'sliderHigh' || formControlName == 'numberHigh')
            this.filterService.buildUrlObject(
                'maxPricePerNight',
                value.toString()
            );
    }
}
