import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-filter-modal',
    templateUrl: './filter-modal.component.html',
    styleUrl: './filter-modal.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterModalComponent implements OnInit {
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
        if (value > 0) {
            this.sliderForm.get(`${formControlName}`)?.setValue(value);
        }
    }
    onclick() {
        console.log(this.sliderForm);
    }
}
