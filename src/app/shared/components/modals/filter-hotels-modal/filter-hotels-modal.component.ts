import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-filter-hotels-modal',
    templateUrl: './filter-hotels-modal.component.html',
    styleUrl: './filter-hotels-modal.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterHotelsModalComponent {
    red = 'red';
    sliderForm!: FormGroup;
    ngOnInit() {
        this.sliderForm = new FormGroup({
            sliderLow: new FormControl(0),
            sliderHigh: new FormControl(500),
            numberLow: new FormControl(0),
            numberHigh: new FormControl(500),
        });
    }
    onUpdateSlider(formControlName: string, value: number) {
        console.log(value);
        if (!isNaN(value)) {
            this.sliderForm.get(`${formControlName}`)?.setValue(value);
        }
    }
    onclick() {
        console.log(this.sliderForm);
    }
}
