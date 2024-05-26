import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Output,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DateRange } from '@angular/material/datepicker';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrl: './calendar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {
    @Output() sendNights = new EventEmitter<number>();
    selectedRangeValue: DateRange<Date> | undefined;
    datesForm = new FormGroup({
        startDate: new FormControl<Date | null>(null),
        endDate: new FormControl<Date | null>(null),
    });
    selectedChange(m: any) {
        if (!this.selectedRangeValue?.start || this.selectedRangeValue?.end) {
            this.selectedRangeValue = new DateRange<Date>(m, null);
        } else {
            const start = this.selectedRangeValue.start;
            const end = m;
            if (end < start) {
                this.selectedRangeValue = new DateRange<Date>(end, start);
            } else {
                this.selectedRangeValue = new DateRange<Date>(start, end);
            }
            this.countDays(
                this.selectedRangeValue.start,
                this.selectedRangeValue.end
            );
        }
    }
    countDays(start: any, end: any) {
        let startDate = new Date(start);
        let endDate = new Date(end);
        this.datesForm?.get('startDate')?.setValue(startDate);
        // Calculate the difference in milliseconds. Ensure Operands Are Treated as Numbers
        let differenceInMilliseconds = +endDate - +startDate;
        let differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
        this.sendNights.emit(differenceInDays);
    }
}
