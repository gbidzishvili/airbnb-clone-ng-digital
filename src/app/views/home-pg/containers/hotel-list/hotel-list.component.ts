import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { BaseProxyService } from '../../../../core/services/base-proxy.service';
import { Hotel } from '../../models/hotel.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { FetchHotelsService } from '../../services/fetch-hotels.service';
@Component({
    selector: 'app-hotel-list',
    templateUrl: './hotel-list.component.html',
    styleUrl: './hotel-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelListComponent implements OnInit {
    @Input() title: string = '';
    // private hotelsSubject = new BehaviorSubject<any>([]);
    // hotels$ = this.hotelsSubject.asObservable();
    constructor(
        private baseProxySrv: BaseProxyService,
        public fetchHotelsSrv: FetchHotelsService
    ) {}
    ngOnInit() {
        this.initHotels();
    }
    initHotels() {
        this.fetchHotelsSrv
            .fetchHotels(
                'http://www.airbnb-digital-students.somee.com/get-all-hotels'
            )
            // .subscribe((hotels: Hotel[]) => {
            //     this.hotelsSubject.next(hotels);
            //     console.log(hotels);
            // });
        // this.hotels$ = this.fetchHotelsSrv.hotels$;
    }
    // hotels = [
    //     {
    //         id: 1,
    //         name: 'Seaside Escape',
    //         address: {
    //             street: '123 Ocean Drive',
    //             city: 'Miami',
    //             state: 'FL',
    //             country: 'USA',
    //             postalCode: '33101',
    //         },
    //         description:
    //             'A stunning beachfront hotel offering luxurious rooms and splendid sea views.',
    //         rating: 4.5,
    //         rooms: [
    //             {
    //                 roomId: 101,
    //                 roomType: 'Suite',
    //                 pricePerNight: 350,
    //                 maxOccupancy: 2,
    //                 amenities: ['Private balcony', 'Ocean view', 'Jacuzzi'],
    //                 roomImages: [
    //                     {
    //                         imageId: 1011,
    //                         url: 'https://source.unsplash.com/featured/?hotel+suite',
    //                         description:
    //                             'Suite with a stunning ocean view and private balcony.',
    //                     },
    //                     {
    //                         imageId: 1012,
    //                         url: 'https://source.unsplash.com/featured/?hotel+room',
    //                         description:
    //                             'Luxurious suite interior with elegant decor.',
    //                     },
    //                 ],
    //             },
    //             {
    //                 roomId: 102,
    //                 roomType: 'Double Room',
    //                 pricePerNight: 180,
    //                 maxOccupancy: 4,
    //                 amenities: ['City view', 'Free WiFi'],
    //                 roomImages: [
    //                     {
    //                         imageId: 1021,
    //                         url: 'https://source.unsplash.com/featured/?hotel+double+room',
    //                         description:
    //                             'Comfortable double room with city views.',
    //                     },
    //                     {
    //                         imageId: 1022,
    //                         url: 'https://source.unsplash.com/featured/?hotel+room',
    //                         description:
    //                             'Modern double room with all amenities included.',
    //                     },
    //                 ],
    //             },
    //         ],
    //         images: [
    //             {
    //                 imageId: 1031,
    //                 url: 'https://source.unsplash.com/featured/?beachfront+hotel',
    //                 description: 'The magnificent exterior of Seaside Escape.',
    //             },
    //             {
    //                 imageId: 1032,
    //                 url: 'https://source.unsplash.com/featured/?luxury+hotel',
    //                 description: 'Elegant lounge area overlooking the sea.',
    //             },
    //         ],
    //         checkInTime: {
    //             ticks: 540000000000,
    //             days: 0,
    //             hours: 15,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.625,
    //             totalHours: 15,
    //             totalMilliseconds: 54000000,
    //             totalMinutes: 900,
    //             totalSeconds: 54000,
    //         },
    //         checkOutTime: {
    //             ticks: 396000000000,
    //             days: 0,
    //             hours: 11,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.4583333333333333,
    //             totalHours: 11,
    //             totalMilliseconds: 39600000,
    //             totalMinutes: 660,
    //             totalSeconds: 39600,
    //         },
    //         owner: {
    //             userId: 1,
    //             fullName: 'John Doe',
    //             email: 'contact@seasideescape.com',
    //         },
    //     },
    //     {
    //         id: 2,
    //         name: 'Mountain Retreat',
    //         address: {
    //             street: '456 Hilltop Road',
    //             city: 'Aspen',
    //             state: 'CO',
    //             country: 'USA',
    //             postalCode: '81611',
    //         },
    //         description:
    //             'Escape to our mountain retreat for a refreshing stay surrounded by alpine beauty.',
    //         rating: 4.8,
    //         rooms: [
    //             {
    //                 roomId: 201,
    //                 roomType: 'Single',
    //                 pricePerNight: 120,
    //                 maxOccupancy: 1,
    //                 amenities: ['Mountain view', 'Wood fireplace'],
    //                 roomImages: [
    //                     {
    //                         imageId: 2011,
    //                         url: 'https://source.unsplash.com/featured/?mountain+view',
    //                         description:
    //                             'Single room with stunning mountain views and a cozy fireplace.',
    //                     },
    //                     {
    //                         imageId: 2012,
    //                         url: 'https://source.unsplash.com/featured/?cabin+room',
    //                         description:
    //                             'Charming wood-themed room ideal for solo travelers.',
    //                     },
    //                 ],
    //             },
    //             {
    //                 roomId: 202,
    //                 roomType: 'Family Suite',
    //                 pricePerNight: 250,
    //                 maxOccupancy: 4,
    //                 amenities: ['Balcony', 'Ski-in, ski-out'],
    //                 roomImages: [
    //                     {
    //                         imageId: 2021,
    //                         url: 'https://source.unsplash.com/featured/?ski+lodge',
    //                         description:
    //                             'Family suite with direct access to ski slopes and a private balcony.',
    //                     },
    //                     {
    //                         imageId: 2022,
    //                         url: 'https://source.unsplash.com/featured/?hotel+suite',
    //                         description:
    //                             'Spacious suite perfect for families or groups.',
    //                     },
    //                 ],
    //             },
    //         ],
    //         images: [
    //             {
    //                 imageId: 2031,
    //                 url: 'https://source.unsplash.com/featured/?mountain+resort',
    //                 description:
    //                     'Aerial view of Mountain Retreat surrounded by snowy peaks.',
    //             },
    //             {
    //                 imageId: 2032,
    //                 url: 'https://source.unsplash.com/featured/?resort',
    //                 description:
    //                     'The cozy and inviting exterior of our mountain lodge.',
    //             },
    //         ],
    //         checkInTime: {
    //             ticks: 576000000000,
    //             days: 0,
    //             hours: 16,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.6666666666666666,
    //             totalHours: 16,
    //             totalMilliseconds: 57600000,
    //             totalMinutes: 960,
    //             totalSeconds: 57600,
    //         },
    //         checkOutTime: {
    //             ticks: 432000000000,
    //             days: 0,
    //             hours: 12,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.5,
    //             totalHours: 12,
    //             totalMilliseconds: 43200000,
    //             totalMinutes: 720,
    //             totalSeconds: 43200,
    //         },
    //         owner: {
    //             userId: 2,
    //             fullName: 'Alice Johnson',
    //             email: 'welcome@mountainretreat.com',
    //         },
    //     },
    //     {
    //         id: 3,
    //         name: 'Urban Oasis',
    //         address: {
    //             street: '789 City Center Blvd',
    //             city: 'New York',
    //             state: 'NY',
    //             country: 'USA',
    //             postalCode: '10001',
    //         },
    //         description:
    //             'An upscale retreat in the heart of the city with breathtaking rooftop views and modern amenities.',
    //         rating: 4.7,
    //         rooms: [
    //             {
    //                 roomId: 301,
    //                 roomType: 'Executive Suite',
    //                 pricePerNight: 420,
    //                 maxOccupancy: 3,
    //                 amenities: [
    //                     'City skyline view',
    //                     'Private bar',
    //                     'Luxury bath',
    //                 ],
    //                 roomImages: [
    //                     {
    //                         imageId: 3011,
    //                         url: 'https://source.unsplash.com/featured/?executive+suite',
    //                         description:
    //                             'Executive suite with panoramic city views and high-end furnishings.',
    //                     },
    //                 ],
    //             },
    //         ],
    //         images: [
    //             {
    //                 imageId: 3031,
    //                 url: 'https://source.unsplash.com/featured/?urban+hotel',
    //                 description: 'The chic and stylish facade of Urban Oasis.',
    //             },
    //         ],
    //         checkInTime: {
    //             ticks: 504000000000,
    //             days: 0,
    //             hours: 14,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.5833333333333334,
    //             totalHours: 14,
    //             totalMilliseconds: 50400000,
    //             totalMinutes: 840,
    //             totalSeconds: 50400,
    //         },
    //         checkOutTime: {
    //             ticks: 432000000000,
    //             days: 0,
    //             hours: 12,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.5,
    //             totalHours: 12,
    //             totalMilliseconds: 43200000,
    //             totalMinutes: 720,
    //             totalSeconds: 43200,
    //         },
    //         owner: {
    //             userId: 3,
    //             fullName: 'Eva Smith',
    //             email: 'contact@urbanoasis.com',
    //         },
    //     },
    //     {
    //         id: 4,
    //         name: 'Desert Mirage',
    //         address: {
    //             street: '246 Mirage Rd',
    //             city: 'Phoenix',
    //             state: 'AZ',
    //             country: 'USA',
    //             postalCode: '85001',
    //         },
    //         description:
    //             'Luxuriate in the serene desert landscape with our exclusive spa treatments and infinity pools.',
    //         rating: 4.9,
    //         rooms: [
    //             {
    //                 roomId: 401,
    //                 roomType: 'Villa',
    //                 pricePerNight: 650,
    //                 maxOccupancy: 4,
    //                 amenities: [
    //                     'Private pool',
    //                     'Desert views',
    //                     'Outdoor shower',
    //                 ],
    //                 roomImages: [
    //                     {
    //                         imageId: 4011,
    //                         url: 'https://source.unsplash.com/featured/?desert+villa',
    //                         description:
    //                             'Private villa with sweeping views of the desert and a secluded pool.',
    //                     },
    //                 ],
    //             },
    //         ],
    //         images: [
    //             {
    //                 imageId: 4031,
    //                 url: 'https://source.unsplash.com/featured/?desert+hotel',
    //                 description:
    //                     'A tranquil setting that blends perfectly with the surrounding desert.',
    //             },
    //         ],
    //         checkInTime: {
    //             ticks: 540000000000,
    //             days: 0,
    //             hours: 15,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.625,
    //             totalHours: 15,
    //             totalMilliseconds: 54000000,
    //             totalMinutes: 900,
    //             totalSeconds: 54000,
    //         },
    //         checkOutTime: {
    //             ticks: 396000000000,
    //             days: 0,
    //             hours: 11,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.4583333333333333,
    //             totalHours: 11,
    //             totalMilliseconds: 39600000,
    //             totalMinutes: 660,
    //             totalSeconds: 39600,
    //         },
    //         owner: {
    //             userId: 4,
    //             fullName: 'Mark Lee',
    //             email: 'welcome@desertmirage.com',
    //         },
    //     },
    //     {
    //         id: 5,
    //         name: 'Lakefront Lodge',
    //         address: {
    //             street: '555 Lakeside Ave',
    //             city: 'Tahoe',
    //             state: 'CA',
    //             country: 'USA',
    //             postalCode: '96150',
    //         },
    //         description:
    //             'Enjoy the pristine waters of Lake Tahoe with our waterfront rooms and private docks.',
    //         rating: 4.6,
    //         rooms: [
    //             {
    //                 roomId: 501,
    //                 roomType: 'Cottage',
    //                 pricePerNight: 300,
    //                 maxOccupancy: 4,
    //                 amenities: ['Lake view', 'Boat dock', 'Fireplace'],
    //                 roomImages: [
    //                     {
    //                         imageId: 5011,
    //                         url: 'https://source.unsplash.com/featured/?lake+cottage',
    //                         description:
    //                             'Cozy lakeside cottage with direct access to the water and a private boat dock.',
    //                     },
    //                 ],
    //             },
    //         ],
    //         images: [
    //             {
    //                 imageId: 5031,
    //                 url: 'https://source.unsplash.com/featured/?lakefront+hotel',
    //                 description:
    //                     'The rustic charm of our lakefront lodge at sunset.',
    //             },
    //         ],
    //         checkInTime: {
    //             ticks: 540000000000,
    //             days: 0,
    //             hours: 15,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.625,
    //             totalHours: 15,
    //             totalMilliseconds: 54000000,
    //             totalMinutes: 900,
    //             totalSeconds: 54000,
    //         },
    //         checkOutTime: {
    //             ticks: 360000000000,
    //             days: 0,
    //             hours: 10,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.4166666666666667,
    //             totalHours: 10,
    //             totalMilliseconds: 36000000,
    //             totalMinutes: 600,
    //             totalSeconds: 36000,
    //         },
    //         owner: {
    //             userId: 5,
    //             fullName: 'Lucy Green',
    //             email: 'stay@lakefrontlodge.com',
    //         },
    //     },
    //     {
    //         id: 6,
    //         name: 'Historic Hearth Inn',
    //         address: {
    //             street: '321 Oldtown St',
    //             city: 'Boston',
    //             state: 'MA',
    //             country: 'USA',
    //             postalCode: '02108',
    //         },
    //         description:
    //             'Step back in time with our colonial-themed rooms and traditional New England hospitality.',
    //         rating: 4.3,
    //         rooms: [
    //             {
    //                 roomId: 601,
    //                 roomType: 'Heritage Room',
    //                 pricePerNight: 220,
    //                 maxOccupancy: 2,
    //                 amenities: ['Historic decor', 'Fireplace', 'Garden views'],
    //                 roomImages: [
    //                     {
    //                         imageId: 6011,
    //                         url: 'https://source.unsplash.com/featured/?colonial+room',
    //                         description:
    //                             'Heritage room adorned with period furnishings and a view of the gardens.',
    //                     },
    //                 ],
    //             },
    //         ],
    //         images: [
    //             {
    //                 imageId: 6031,
    //                 url: 'https://source.unsplash.com/featured/?historic+inn',
    //                 description:
    //                     "The charming facade of Historic Hearth Inn, a reminder of Boston's rich history.",
    //             },
    //         ],
    //         checkInTime: {
    //             ticks: 540000000000,
    //             days: 0,
    //             hours: 15,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.625,
    //             totalHours: 15,
    //             totalMilliseconds: 54000000,
    //             totalMinutes: 900,
    //             totalSeconds: 54000,
    //         },
    //         checkOutTime: {
    //             ticks: 396000000000,
    //             days: 0,
    //             hours: 11,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.4583333333333333,
    //             totalHours: 11,
    //             totalMilliseconds: 39600000,
    //             totalMinutes: 660,
    //             totalSeconds: 39600,
    //         },
    //         owner: {
    //             userId: 6,
    //             fullName: 'George Brown',
    //             email: 'history@hearthinn.com',
    //         },
    //     },
    //     {
    //         id: 7,
    //         name: 'Island Getaway',
    //         address: {
    //             street: '1010 Palm Tree Rd',
    //             city: 'Key West',
    //             state: 'FL',
    //             country: 'USA',
    //             postalCode: '33040',
    //         },
    //         description:
    //             'Discover paradise at our tropical resort with exclusive beach access and island-inspired suites.',
    //         rating: 4.8,
    //         rooms: [
    //             {
    //                 roomId: 701,
    //                 roomType: 'Bungalow',
    //                 pricePerNight: 400,
    //                 maxOccupancy: 3,
    //                 amenities: [
    //                     'Beach access',
    //                     'Private terrace',
    //                     'Outdoor kitchen',
    //                 ],
    //                 roomImages: [
    //                     {
    //                         imageId: 7011,
    //                         url: 'https://source.unsplash.com/featured/?beach+bungalow',
    //                         description:
    //                             'Private bungalow steps away from the beach with a spacious terrace and outdoor kitchen.',
    //                     },
    //                 ],
    //             },
    //         ],
    //         images: [
    //             {
    //                 imageId: 7031,
    //                 url: 'https://source.unsplash.com/featured/?island+resort',
    //                 description:
    //                     'Lush tropical landscaping surrounds the tranquil Island Getaway resort.',
    //             },
    //         ],
    //         checkInTime: {
    //             ticks: 576000000000,
    //             days: 0,
    //             hours: 16,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.6666666666666666,
    //             totalHours: 16,
    //             totalMilliseconds: 57600000,
    //             totalMinutes: 960,
    //             totalSeconds: 57600,
    //         },
    //         checkOutTime: {
    //             ticks: 396000000000,
    //             days: 0,
    //             hours: 11,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.4583333333333333,
    //             totalHours: 11,
    //             totalMilliseconds: 39600000,
    //             totalMinutes: 660,
    //             totalSeconds: 39600,
    //         },
    //         owner: {
    //             userId: 7,
    //             fullName: 'Sophia Martinez',
    //             email: 'relax@islandgetaway.com',
    //         },
    //     },
    //     {
    //         id: 8,
    //         name: 'Garden Grove Inn',
    //         address: {
    //             street: '321 Greenway Blvd',
    //             city: 'Portland',
    //             state: 'OR',
    //             country: 'USA',
    //             postalCode: '97209',
    //         },
    //         description:
    //             'Nestled among lush gardens, our inn provides a peaceful retreat with eco-friendly accommodations.',
    //         rating: 4.5,
    //         rooms: [
    //             {
    //                 roomId: 801,
    //                 roomType: 'Eco Suite',
    //                 pricePerNight: 285,
    //                 maxOccupancy: 2,
    //                 amenities: [
    //                     'Garden views',
    //                     'Eco-friendly materials',
    //                     'Rainwater shower',
    //                 ],
    //                 roomImages: [
    //                     {
    //                         imageId: 8011,
    //                         url: 'https://source.unsplash.com/featured/?eco+hotel',
    //                         description:
    //                             'Eco Suite featuring sustainable materials and garden views.',
    //                     },
    //                 ],
    //             },
    //         ],
    //         images: [
    //             {
    //                 imageId: 8031,
    //                 url: 'https://source.unsplash.com/featured/?garden+inn',
    //                 description:
    //                     'Beautiful garden paths surround our eco-friendly Garden Grove Inn.',
    //             },
    //         ],
    //         checkInTime: {
    //             ticks: 504000000000,
    //             days: 0,
    //             hours: 14,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.5833333333333334,
    //             totalHours: 14,
    //             totalMilliseconds: 50400000,
    //             totalMinutes: 840,
    //             totalSeconds: 50400,
    //         },
    //         checkOutTime: {
    //             ticks: 396000000000,
    //             days: 0,
    //             hours: 11,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.4583333333333333,
    //             totalHours: 11,
    //             totalMilliseconds: 39600000,
    //             totalMinutes: 660,
    //             totalSeconds: 39600,
    //         },
    //         owner: {
    //             userId: 8,
    //             fullName: 'Mia Taylor',
    //             email: 'stay@gardengroveinn.com',
    //         },
    //     },
    //     {
    //         id: 9,
    //         name: 'Skyline Tower',
    //         address: {
    //             street: '222 High St',
    //             city: 'Chicago',
    //             state: 'IL',
    //             country: 'USA',
    //             postalCode: '60606',
    //         },
    //         description:
    //             "Experience breathtaking views from our high-rise hotel, located in the heart of the city's bustling center.",
    //         rating: 4.8,
    //         rooms: [
    //             {
    //                 roomId: 901,
    //                 roomType: 'Penthouse',
    //                 pricePerNight: 750,
    //                 maxOccupancy: 4,
    //                 amenities: [
    //                     'Panoramic city views',
    //                     'Private elevator',
    //                     'Top-floor gym',
    //                 ],
    //                 roomImages: [
    //                     {
    //                         imageId: 9011,
    //                         url: 'https://source.unsplash.com/featured/?penthouse',
    //                         description:
    //                             'Luxurious penthouse with sweeping city views and exclusive amenities.',
    //                     },
    //                 ],
    //             },
    //         ],
    //         images: [
    //             {
    //                 imageId: 9031,
    //                 url: 'https://source.unsplash.com/featured/?skyline+hotel',
    //                 description:
    //                     "The towering Skyline Tower hotel against the city's skyline.",
    //             },
    //         ],
    //         checkInTime: {
    //             ticks: 540000000000,
    //             days: 0,
    //             hours: 15,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.625,
    //             totalHours: 15,
    //             totalMilliseconds: 54000000,
    //             totalMinutes: 900,
    //             totalSeconds: 54000,
    //         },
    //         checkOutTime: {
    //             ticks: 432000000000,
    //             days: 0,
    //             hours: 12,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.5,
    //             totalHours: 12,
    //             totalMilliseconds: 43200000,
    //             totalMinutes: 720,
    //             totalSeconds: 43200,
    //         },
    //         owner: {
    //             userId: 9,
    //             fullName: 'Jack Robinson',
    //             email: 'contact@skylinetower.com',
    //         },
    //     },
    //     {
    //         id: 10,
    //         name: 'Riverbend Resort',
    //         address: {
    //             street: '778 Riverside Drive',
    //             city: 'Savannah',
    //             state: 'GA',
    //             country: 'USA',
    //             postalCode: '31401',
    //         },
    //         description:
    //             'Relax by the river at our resort, featuring waterfront dining and boating excursions.',
    //         rating: 4.7,
    //         rooms: [
    //             {
    //                 roomId: 1001,
    //                 roomType: 'Riverside Cabin',
    //                 pricePerNight: 320,
    //                 maxOccupancy: 4,
    //                 amenities: ['River view', 'Private dock', 'Full kitchen'],
    //                 roomImages: [
    //                     {
    //                         imageId: 10011,
    //                         url: 'https://source.unsplash.com/featured/?river+cabin',
    //                         description:
    //                             'Riverside cabin with direct access to the river and private docking.',
    //                     },
    //                 ],
    //             },
    //         ],
    //         images: [
    //             {
    //                 imageId: 10031,
    //                 url: 'https://source.unsplash.com/featured/?river+resort',
    //                 description:
    //                     'The scenic Riverbend Resort nestled along the winding river.',
    //             },
    //         ],
    //         checkInTime: {
    //             ticks: 576000000000,
    //             days: 0,
    //             hours: 16,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.6666666666666666,
    //             totalHours: 16,
    //             totalMilliseconds: 57600000,
    //             totalMinutes: 960,
    //             totalSeconds: 57600,
    //         },
    //         checkOutTime: {
    //             ticks: 396000000000,
    //             days: 0,
    //             hours: 11,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.4583333333333333,
    //             totalHours: 11,
    //             totalMilliseconds: 39600000,
    //             totalMinutes: 660,
    //             totalSeconds: 39600,
    //         },
    //         owner: {
    //             userId: 10,
    //             fullName: 'Emma Clark',
    //             email: 'relax@riverbendresort.com',
    //         },
    //     },
    //     {
    //         id: 11,
    //         name: 'Silver Sands Hotel',
    //         address: {
    //             street: '908 Oceanic Drive',
    //             city: 'San Diego',
    //             state: 'CA',
    //             country: 'USA',
    //             postalCode: '92101',
    //         },
    //         description:
    //             'Silver Sands offers a perfect beachfront location with vibrant nightlife and oceanic adventures.',
    //         rating: 4.4,
    //         rooms: [
    //             {
    //                 roomId: 1101,
    //                 roomType: 'Beachfront Room',
    //                 pricePerNight: 290,
    //                 maxOccupancy: 2,
    //                 amenities: [
    //                     'Direct beach access',
    //                     'Sea view balcony',
    //                     'Surfboard rental',
    //                 ],
    //                 roomImages: [
    //                     {
    //                         imageId: 11011,
    //                         url: 'https://source.unsplash.com/featured/?beachfront+room',
    //                         description:
    //                             'Room with direct beach access and a balcony overlooking the sea.',
    //                     },
    //                 ],
    //             },
    //         ],
    //         images: [
    //             {
    //                 imageId: 11031,
    //                 url: 'https://source.unsplash.com/featured/?beachfront+hotel',
    //                 description:
    //                     'The lively Silver Sands Hotel right on the beach.',
    //             },
    //         ],
    //         checkInTime: {
    //             ticks: 504000000000,
    //             days: 0,
    //             hours: 14,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.5833333333333334,
    //             totalHours: 14,
    //             totalMilliseconds: 50400000,
    //             totalMinutes: 840,
    //             totalSeconds: 50400,
    //         },
    //         checkOutTime: {
    //             ticks: 432000000000,
    //             days: 0,
    //             hours: 12,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.5,
    //             totalHours: 12,
    //             totalMilliseconds: 43200000,
    //             totalMinutes: 720,
    //             totalSeconds: 43200,
    //         },
    //         owner: {
    //             userId: 11,
    //             fullName: 'Olivia Brown',
    //             email: 'stay@silversandshotel.com',
    //         },
    //     },
    //     {
    //         id: 12,
    //         name: 'Pine Peak Chalet',
    //         address: {
    //             street: '330 Mountain Rd',
    //             city: 'Jackson',
    //             state: 'WY',
    //             country: 'USA',
    //             postalCode: '83001',
    //         },
    //         description:
    //             'A cozy winter escape with ski-to-door access and warming fireside lounges.',
    //         rating: 4.6,
    //         rooms: [
    //             {
    //                 roomId: 1201,
    //                 roomType: 'Ski Lodge',
    //                 pricePerNight: 375,
    //                 maxOccupancy: 4,
    //                 amenities: [
    //                     'Ski-in/ski-out',
    //                     'Hot tub',
    //                     'Ski gear storage',
    //                 ],
    //                 roomImages: [
    //                     {
    //                         imageId: 12011,
    //                         url: 'https://source.unsplash.com/featured/?ski+lodge',
    //                         description:
    //                             'Ski lodge room with immediate slope access and cozy hot tub.',
    //                     },
    //                 ],
    //             },
    //         ],
    //         images: [
    //             {
    //                 imageId: 12031,
    //                 url: 'https://source.unsplash.com/featured/?mountain+chalet',
    //                 description:
    //                     'The rustic Pine Peak Chalet nestled in snowy mountain scenery.',
    //             },
    //         ],
    //         checkInTime: {
    //             ticks: 540000000000,
    //             days: 0,
    //             hours: 15,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.625,
    //             totalHours: 15,
    //             totalMilliseconds: 54000000,
    //             totalMinutes: 900,
    //             totalSeconds: 54000,
    //         },
    //         checkOutTime: {
    //             ticks: 360000000000,
    //             days: 0,
    //             hours: 10,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.4166666666666667,
    //             totalHours: 10,
    //             totalMilliseconds: 36000000,
    //             totalMinutes: 600,
    //             totalSeconds: 36000,
    //         },
    //         owner: {
    //             userId: 12,
    //             fullName: 'Henry Jones',
    //             email: 'winter@pinepeakchalet.com',
    //         },
    //     },
    //     {
    //         id: 13,
    //         name: 'Golden Gate Hotel',
    //         address: {
    //             street: '200 Bay St',
    //             city: 'San Francisco',
    //             state: 'CA',
    //             country: 'USA',
    //             postalCode: '94133',
    //         },
    //         description:
    //             'Stay at the heart of San Francisco with stunning views of the Golden Gate Bridge and excellent city access.',
    //         rating: 4.7,
    //         rooms: [
    //             {
    //                 roomId: 1301,
    //                 roomType: 'Deluxe Room',
    //                 pricePerNight: 330,
    //                 maxOccupancy: 3,
    //                 amenities: [
    //                     'Bridge view',
    //                     'Minibar',
    //                     'Smart Home Features',
    //                 ],
    //                 roomImages: [
    //                     {
    //                         imageId: 13011,
    //                         url: 'https://source.unsplash.com/featured/?hotel+room',
    //                         description:
    //                             'Deluxe room with a view of the Golden Gate Bridge and modern amenities.',
    //                     },
    //                 ],
    //             },
    //         ],
    //         images: [
    //             {
    //                 imageId: 13031,
    //                 url: 'https://source.unsplash.com/featured/?city+hotel',
    //                 description:
    //                     'Modern Golden Gate Hotel with panoramic views of San Francisco.',
    //             },
    //         ],
    //         checkInTime: {
    //             ticks: 540000000000,
    //             days: 0,
    //             hours: 15,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.625,
    //             totalHours: 15,
    //             totalMilliseconds: 54000000,
    //             totalMinutes: 900,
    //             totalSeconds: 54000,
    //         },
    //         checkOutTime: {
    //             ticks: 396000000000,
    //             days: 0,
    //             hours: 11,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.4583333333333333,
    //             totalHours: 11,
    //             totalMilliseconds: 39600000,
    //             totalMinutes: 660,
    //             totalSeconds: 39600,
    //         },
    //         owner: {
    //             userId: 13,
    //             fullName: 'Sophie Lee',
    //             email: 'info@goldengatehotel.com',
    //         },
    //     },
    //     {
    //         id: 14,
    //         name: 'Countryside Manor',
    //         address: {
    //             street: '775 Rural Route',
    //             city: 'Charlottesville',
    //             state: 'VA',
    //             country: 'USA',
    //             postalCode: '22903',
    //         },
    //         description:
    //             'Experience old-world charm and southern hospitality at our manor set in the rolling hills of Virginia.',
    //         rating: 4.5,
    //         rooms: [
    //             {
    //                 roomId: 1401,
    //                 roomType: 'Country Suite',
    //                 pricePerNight: 250,
    //                 maxOccupancy: 2,
    //                 amenities: [
    //                     'Orchard view',
    //                     'Antique furnishings',
    //                     'Ensuite fireplace',
    //                 ],
    //                 roomImages: [
    //                     {
    //                         imageId: 14011,
    //                         url: 'https://source.unsplash.com/featured/?country+suite',
    //                         description:
    //                             'Elegant country suite with orchard views and antique decor.',
    //                     },
    //                 ],
    //             },
    //         ],
    //         images: [
    //             {
    //                 imageId: 14031,
    //                 url: 'https://source.unsplash.com/featured/?country+manor',
    //                 description:
    //                     "The serene and stately Countryside Manor surrounded by Virginia's natural beauty.",
    //             },
    //         ],
    //         checkInTime: {
    //             ticks: 504000000000,
    //             days: 0,
    //             hours: 14,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.5833333333333334,
    //             totalHours: 14,
    //             totalMilliseconds: 50400000,
    //             totalMinutes: 840,
    //             totalSeconds: 50400,
    //         },
    //         checkOutTime: {
    //             ticks: 432000000000,
    //             days: 0,
    //             hours: 12,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.5,
    //             totalHours: 12,
    //             totalMilliseconds: 43200000,
    //             totalMinutes: 720,
    //             totalSeconds: 43200,
    //         },
    //         owner: {
    //             userId: 14,
    //             fullName: 'Ethan Wilson',
    //             email: 'charm@countrysidemanor.com',
    //         },
    //     },
    //     {
    //         id: 15,
    //         name: 'Crystal Cove Resort',
    //         address: {
    //             street: '299 Beachside Ave',
    //             city: 'Clearwater',
    //             state: 'FL',
    //             country: 'USA',
    //             postalCode: '33767',
    //         },
    //         description:
    //             'A luxury beach resort where every room offers stunning views of the Gulf of Mexico.',
    //         rating: 4.9,
    //         rooms: [
    //             {
    //                 roomId: 1501,
    //                 roomType: 'Ocean Suite',
    //                 pricePerNight: 500,
    //                 maxOccupancy: 4,
    //                 amenities: [
    //                     'Oceanfront',
    //                     'Private balcony',
    //                     'Whirlpool tub',
    //                 ],
    //                 roomImages: [
    //                     {
    //                         imageId: 15011,
    //                         url: 'https://source.unsplash.com/featured/?ocean+suite',
    //                         description:
    //                             'Spacious ocean suite with a private balcony overlooking the Gulf.',
    //                     },
    //                 ],
    //             },
    //         ],
    //         images: [
    //             {
    //                 imageId: 15031,
    //                 url: 'https://source.unsplash.com/featured/?beach+resort',
    //                 description:
    //                     'The luxurious Crystal Cove Resort along the pristine Clearwater beaches.',
    //             },
    //         ],
    //         checkInTime: {
    //             ticks: 540000000000,
    //             days: 0,
    //             hours: 15,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.625,
    //             totalHours: 15,
    //             totalMilliseconds: 54000000,
    //             totalMinutes: 900,
    //             totalSeconds: 54000,
    //         },
    //         checkOutTime: {
    //             ticks: 396000000000,
    //             days: 0,
    //             hours: 11,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.4583333333333333,
    //             totalHours: 11,
    //             totalMilliseconds: 39600000,
    //             totalMinutes: 660,
    //             totalSeconds: 39600,
    //         },
    //         owner: {
    //             userId: 15,
    //             fullName: 'Ava Johnson',
    //             email: 'paradise@crystalcoveresort.com',
    //         },
    //     },
    //     {
    //         id: 16,
    //         name: 'Arctic Lights Hotel',
    //         address: {
    //             street: '100 Frost Way',
    //             city: 'Fairbanks',
    //             state: 'AK',
    //             country: 'USA',
    //             postalCode: '99701',
    //         },
    //         description:
    //             'Immerse yourself in the serene beauty of the Arctic under the northern lights at our luxurious hotel.',
    //         rating: 4.8,
    //         rooms: [
    //             {
    //                 roomId: 1601,
    //                 roomType: 'Aurora View Room',
    //                 pricePerNight: 350,
    //                 maxOccupancy: 2,
    //                 amenities: [
    //                     'Northern lights view',
    //                     'Heated floors',
    //                     'Telescope',
    //                 ],
    //                 roomImages: [
    //                     {
    //                         imageId: 16011,
    //                         url: 'https://source.unsplash.com/featured/?northern+lights+hotel',
    //                         description:
    //                             'Room with a view of the northern lights and luxurious amenities including a personal telescope.',
    //                     },
    //                 ],
    //             },
    //         ],
    //         images: [
    //             {
    //                 imageId: 16031,
    //                 url: 'https://source.unsplash.com/featured/?arctic+hotel',
    //                 description:
    //                     'The contemporary exterior of the Arctic Lights Hotel under the aurora borealis.',
    //             },
    //         ],
    //         checkInTime: {
    //             ticks: 576000000000,
    //             days: 0,
    //             hours: 16,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.6666666666666666,
    //             totalHours: 16,
    //             totalMilliseconds: 57600000,
    //             totalMinutes: 960,
    //             totalSeconds: 57600,
    //         },
    //         checkOutTime: {
    //             ticks: 360000000000,
    //             days: 0,
    //             hours: 10,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.4166666666666667,
    //             totalHours: 10,
    //             totalMilliseconds: 36000000,
    //             totalMinutes: 600,
    //             totalSeconds: 36000,
    //         },
    //         owner: {
    //             userId: 16,
    //             fullName: 'Noah Anderson',
    //             email: 'stay@arcticlightshotel.com',
    //         },
    //     },
    //     {
    //         id: 17,
    //         name: 'Metropolitan Modern',
    //         address: {
    //             street: '220 City Square',
    //             city: 'Dallas',
    //             state: 'TX',
    //             country: 'USA',
    //             postalCode: '75201',
    //         },
    //         description:
    //             'A chic and stylish hotel in the vibrant heart of Dallas, offering cutting-edge design and rooftop dining.',
    //         rating: 4.6,
    //         rooms: [
    //             {
    //                 roomId: 1701,
    //                 roomType: 'Designer Suite',
    //                 pricePerNight: 400,
    //                 maxOccupancy: 2,
    //                 amenities: [
    //                     'Cityscape views',
    //                     'In-room smart technology',
    //                     'Designer furnishings',
    //                 ],
    //                 roomImages: [
    //                     {
    //                         imageId: 17011,
    //                         url: 'https://source.unsplash.com/featured/?designer+suite',
    //                         description:
    //                             'Designer suite with high-tech amenities and stunning city views.',
    //                     },
    //                 ],
    //             },
    //         ],
    //         images: [
    //             {
    //                 imageId: 17031,
    //                 url: 'https://source.unsplash.com/featured/?modern+hotel',
    //                 description:
    //                     'The sleek Metropolitan Modern hotel, a landmark of contemporary design in downtown Dallas.',
    //             },
    //         ],
    //         checkInTime: {
    //             ticks: 504000000000,
    //             days: 0,
    //             hours: 14,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.5833333333333334,
    //             totalHours: 14,
    //             totalMilliseconds: 50400000,
    //             totalMinutes: 840,
    //             totalSeconds: 50400,
    //         },
    //         checkOutTime: {
    //             ticks: 432000000000,
    //             days: 0,
    //             hours: 12,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.5,
    //             totalHours: 12,
    //             totalMilliseconds: 43200000,
    //             totalMinutes: 720,
    //             totalSeconds: 43200,
    //         },
    //         owner: {
    //             userId: 17,
    //             fullName: 'Liam Taylor',
    //             email: 'contact@metropolitanmodern.com',
    //         },
    //     },
    //     {
    //         id: 18,
    //         name: 'Tranquil Tides Resort',
    //         address: {
    //             street: '840 Seashore Path',
    //             city: 'Monterey',
    //             state: 'CA',
    //             country: 'USA',
    //             postalCode: '93940',
    //         },
    //         description:
    //             'A serene seaside escape, perfect for those seeking peace and relaxation by the calming ocean tides.',
    //         rating: 4.7,
    //         rooms: [
    //             {
    //                 roomId: 1801,
    //                 roomType: 'Ocean Loft',
    //                 pricePerNight: 380,
    //                 maxOccupancy: 3,
    //                 amenities: [
    //                     'Full ocean view',
    //                     'Private balcony',
    //                     'High-ceiling',
    //                 ],
    //                 roomImages: [
    //                     {
    //                         imageId: 18011,
    //                         url: 'https://source.unsplash.com/featured/?ocean+loft',
    //                         description:
    //                             'Ocean loft with expansive sea views and a stylish high-ceiling design.',
    //                     },
    //                 ],
    //             },
    //         ],
    //         images: [
    //             {
    //                 imageId: 18031,
    //                 url: 'https://source.unsplash.com/featured/?seaside+resort',
    //                 description:
    //                     'The Tranquil Tides Resort along the picturesque Monterey coast.',
    //             },
    //         ],
    //         checkInTime: {
    //             ticks: 540000000000,
    //             days: 0,
    //             hours: 15,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.625,
    //             totalHours: 15,
    //             totalMilliseconds: 54000000,
    //             totalMinutes: 900,
    //             totalSeconds: 54000,
    //         },
    //         checkOutTime: {
    //             ticks: 396000000000,
    //             days: 0,
    //             hours: 11,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.4583333333333333,
    //             totalHours: 11,
    //             totalMilliseconds: 39600000,
    //             totalMinutes: 660,
    //             totalSeconds: 39600,
    //         },
    //         owner: {
    //             userId: 18,
    //             fullName: 'Mason Bennett',
    //             email: 'relax@tranquiltides.com',
    //         },
    //     },
    //     {
    //         id: 19,
    //         name: 'Heritage City Inn',
    //         address: {
    //             street: '540 Historic Blvd',
    //             city: 'Philadelphia',
    //             state: 'PA',
    //             country: 'USA',
    //             postalCode: '19106',
    //         },
    //         description:
    //             'Discover the rich history of Philadelphia with a stay at our elegantly restored inn, located near key historic sites.',
    //         rating: 4.5,
    //         rooms: [
    //             {
    //                 roomId: 1901,
    //                 roomType: 'Colonial Suite',
    //                 pricePerNight: 250,
    //                 maxOccupancy: 2,
    //                 amenities: [
    //                     'Historic decor',
    //                     'City views',
    //                     'Luxury linens',
    //                 ],
    //                 roomImages: [
    //                     {
    //                         imageId: 19011,
    //                         url: 'https://source.unsplash.com/featured/?colonial+suite',
    //                         description:
    //                             "Colonial suite with authentic decor reflecting Philadelphia's historic past.",
    //                     },
    //                 ],
    //             },
    //         ],
    //         images: [
    //             {
    //                 imageId: 19031,
    //                 url: 'https://source.unsplash.com/featured/?historic+inn',
    //                 description:
    //                     "The charming exterior of Heritage City Inn, steeped in Philadelphia's colonial history.",
    //             },
    //         ],
    //         checkInTime: {
    //             ticks: 504000000000,
    //             days: 0,
    //             hours: 14,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.5833333333333334,
    //             totalHours: 14,
    //             totalMilliseconds: 50400000,
    //             totalMinutes: 840,
    //             totalSeconds: 50400,
    //         },
    //         checkOutTime: {
    //             ticks: 432000000000,
    //             days: 0,
    //             hours: 12,
    //             milliseconds: 0,
    //             minutes: 0,
    //             seconds: 0,
    //             totalDays: 0.5,
    //             totalHours: 12,
    //             totalMilliseconds: 43200000,
    //             totalMinutes: 720,
    //             totalSeconds: 43200,
    //         },
    //         owner: {
    //             userId: 19,
    //             fullName: 'Olivia Harris',
    //             email: 'history@heritagecityinn.com',
    //         },
    //     },
    // ];

    // [
    //     {
    //         img: 'https://a0.muscache.com/im/pictures/miso/Hosting-49924321/original/cc3a98b7-d83e-4684-bb03-2b2ce6dd480d.jpeg?im_w=720',
    //         favorite: true,
    //         name: 'Treehouse in Index',
    //         stars: 5.0,
    //         views: 262,
    //         description: 'The TreeFramed Cabin',
    //         price: 485,
    //     },
    //     {
    //         img: 'https://a0.muscache.com/im/pictures/7cc3c855-f90e-4d0f-9b13-3b5c2a3c4bad.jpg?im_w=1200',
    //         favorite: true,
    //         name: 'BALIAN TREEHOUSE w beautiful pool',
    //         stars: 4.86,
    //         views: 328,
    //         description: 'Hut in Balian Beach, Indonesia',
    //         price: 485,
    //     },
    //     {
    //         img: 'https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=1200',
    //         favorite: true,
    //         name: 'Moinho das Feteiras | The Mill',
    //         stars: 5.0,
    //         views: 63,
    //         description:
    //             'Windmill in Ponta Delgada, Portugal  Windmill in Ponta Delgada, Portugal ',
    //         price: 799,
    //     },
    //     {
    //         img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-755137040389728919/original/a56ee965-a235-4878-bd3d-8efb93de7297.jpeg?im_w=1200',
    //         favorite: true,
    //         name: 'Treehouse in Index',
    //         stars: 4.98,
    //         views: 162,
    //         description: 'The TreeFramed Cabin',
    //         price: 843,
    //     },
    // ];
}
