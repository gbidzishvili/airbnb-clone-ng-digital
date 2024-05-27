import { Injectable } from '@angular/core';
import { Hotel } from '../home-pg/models/hotel.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ReservationDataSharingService {
    startDate$ = new BehaviorSubject<Date>(new Date());
    endDate$ = new BehaviorSubject<Date>(new Date());
    hotel$ = new BehaviorSubject<Hotel>({
        id: 1,
        name: 'Seaside Escape',
        address: {
            street: '123 Ocean Drive',
            city: 'Miami',
            state: 'FL',
            country: 'USA',
            postalCode: '33101',
        },
        description:
            'A stunning beachfront hotel offering luxurious rooms and splendid sea views.',
        rating: 4.5,
        rooms: [
            {
                roomId: 101,
                roomType: 'Suite',
                pricePerNight: 350,
                maxOccupancy: 2,
                amenities: ['Private balcony', 'Ocean view', 'Jacuzzi'],
                roomImages: [
                    {
                        imageId: 1011,
                        url: 'https://source.unsplash.com/featured/?hotel+suite',
                        description:
                            'Suite with a stunning ocean view and private balcony.',
                    },
                    {
                        imageId: 1012,
                        url: 'https://source.unsplash.com/featured/?hotel+room',
                        description:
                            'Luxurious suite interior with elegant decor.',
                    },
                ],
            },
            {
                roomId: 102,
                roomType: 'Double Room',
                pricePerNight: 180,
                maxOccupancy: 4,
                amenities: ['City view', 'Free WiFi'],
                roomImages: [
                    {
                        imageId: 1021,
                        url: 'https://source.unsplash.com/featured/?hotel+double+room',
                        description: 'Comfortable double room with city views.',
                    },
                    {
                        imageId: 1022,
                        url: 'https://source.unsplash.com/featured/?hotel+room',
                        description:
                            'Modern double room with all amenities included.',
                    },
                ],
            },
        ],
        images: [
            {
                imageId: 1031,
                url: 'https://source.unsplash.com/featured/?beachfront+hotel',
                description: 'The magnificent exterior of Seaside Escape.',
            },
            {
                imageId: 1032,
                url: 'https://source.unsplash.com/featured/?luxury+hotel',
                description: 'Elegant lounge area overlooking the sea.',
            },
        ],
        checkInTime: {
            ticks: 540000000000,
            days: 0,
            hours: 15,
            milliseconds: 0,
            minutes: 0,
            seconds: 0,
            totalDays: 0.625,
            totalHours: 15,
            totalMilliseconds: 54000000,
            totalMinutes: 900,
            totalSeconds: 54000,
        },
        checkOutTime: {
            ticks: 396000000000,
            days: 0,
            hours: 11,
            milliseconds: 0,
            minutes: 0,
            seconds: 0,
            totalDays: 0.4583333333333333,
            totalHours: 11,
            totalMilliseconds: 39600000,
            totalMinutes: 660,
            totalSeconds: 39600,
        },
        owner: {
            userId: 1,
            fullName: 'John Doe',
            email: 'contact@seasideescape.com',
        },
    });
    constructor() {}
    updateReservationData(hotelData: Hotel) {
        this.hotel$.next(hotelData);
        this.hotel$.subscribe((v) => console.log(v));
    }
    getDates(startDate: any, endDate: any) {
        this.startDate$.next(startDate);
        this.endDate$.next(endDate);
    }
}
