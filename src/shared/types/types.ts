export interface Booking {
  id: number;
  cancelled: boolean;
  checkInDate: string;
  checkOutDate: string;
  currencyCode: string;
  hotelName: string;
  occupancy: number;
  paid: boolean;
  total: number;
}

export interface BookingDetail {
  cancelledAt: null;
  checkInDate: string;
  checkOutDate: string;
  createdAt: string;
  currencyCode: string;
  customer: Customer;
  hotel: Hotel;
  id: number;
  occupancy: number;
  notes: null;
  paidInFullAt: null;
  room: Room;
  total: number;
  updatedAt: string;
}

interface Customer {
  bookingIds: number[];
  email: string;
  firstName: string;
  id: number;
  lastName: string;
}

interface Hotel {
  id: number;
  name: string;
}

interface Room {
  id: number;
  maxOccupancy: number;
  maxUnits: number;
  name: string;
}
