import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { DateRange } from '@angular/material/datepicker';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
    selector: 'app-details-pg',
    templateUrl: './details-pg.component.html',
    styleUrl: './details-pg.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [provideNativeDateAdapter()],
})
export class DetailsPgComponent implements OnInit {
    @Input() nights!: number;
    selectedRangeValue: DateRange<Date> | undefined;
    @Output() selectedRangeValueChange = new EventEmitter<DateRange<Date>>();
    datesForm = new FormGroup({
        startDate: new FormControl<Date | null>(null),
        endDate: new FormControl<Date | null>(null),
    });
    slides = [
        {
            src: 'https://a0.muscache.com/im/pictures/8be48753-223a-46d3-977d-d3c97d0774a4.jpg?im_w=1200',

            alt: 'hotel-image',
        },
        {
            src: 'https://a0.muscache.com/im/pictures/6bd13134-e0cd-4911-b195-fad24f68f843.jpg?im_w=1200',

            alt: 'hotel-image',
        },
        {
            src: 'https://a0.muscache.com/im/pictures/00404d70-0064-48e4-84de-f16f45820f80.jpg?im_w=1200',
            alt: 'hotel-image',
        },
    ];
    ngOnInit(): void {
        const loader = new Loader({
            apiKey: 'AIzaSyAYpfjjDa8iY-FI-Mc3b8YM4iUS60We7pQ',
            version: 'weekly',
        });

        loader.load().then(async () => {
            const { Map } = (await google.maps.importLibrary(
                'maps'
            )) as google.maps.MapsLibrary;
            let map = new Map(document.getElementById('map') as HTMLElement, {
                center: { lat: 41.7151377, lng: 44.827096 },
                zoom: 14,
            });
        });
    }
    selectedChange(m: any) {
        console.log('m is this:', m);
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
        this.selectedRangeValueChange.emit(this.selectedRangeValue);
    }
    countDays(start: any, end: any) {
        let startDate = new Date(start);
        let endDate = new Date(end);
        this.datesForm?.get('startDate')?.setValue(startDate);
        console.log(this.datesForm.get('startDate')?.value);
        // Calculate the difference in milliseconds. Ensure Operands Are Treated as Numbers
        let differenceInMilliseconds = +endDate - +startDate;
        let differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
        this.nights = differenceInDays;
    }
}
