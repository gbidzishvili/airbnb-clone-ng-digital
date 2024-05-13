export interface Room {
    roomId: number;
    roomType: string;
    pricePerNight: number;
    maxOccupancy: number;
    amenities: string[];
    roomImages: {
        imageId: number;
        url: string;
        description: string;
    }[];
}
