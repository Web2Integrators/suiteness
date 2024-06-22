import { component$ } from "@builder.io/qwik";
import moment from "moment";
import { useBooking } from "~/routes/bookings/[id]/index@booking";

export const Booking = component$(() => {
  const booking = useBooking();
  return (
    <>
      <div class="card w-full bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">
            {booking.value.customer.firstName} {booking.value.customer.lastName}
          </h2>
          <div class="text-gray-500">
            CheckInDate: {booking.value.checkInDate}
          </div>
          <div class="text-gray-500">
            CheckOutDate: {booking.value.checkOutDate}
          </div>
         
          <div class="text-gray-500">CreatedAt: { moment(booking.value.createdAt).format("DD/MM/YYYY hh:mm a")}</div>
          <div class="text-gray-500">UpdatedAt: {moment(booking.value.updatedAt).format("DD/MM/YYYY hh:mm a")}</div>
          <div class="text-gray-500">Hotel: {booking.value.hotel.name}</div>
          <div class="text-gray-500">Room: {booking.value.room.name}</div>
          <div class="text-gray-500">Occupancy: {booking.value.occupancy}</div>
          <div class="text-gray-500 whitespace-normal">Booking Ids: {booking.value.customer.bookingIds}</div>
        </div>
      </div>
    </>
  );
});
