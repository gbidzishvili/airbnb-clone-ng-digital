import { Address, CheckInOut, Owner, Room, Image } from './index';

export interface Hotel {
    id: number;
    name: string;
    address: Address;
    description: string;
    rating: number;
    rooms: Room[];
    images: Image[];
    checkInTime: CheckInOut;
    checkOutTime: CheckInOut;
    // favorite: boolean;
    // views: number;
    owner: Owner;
}
