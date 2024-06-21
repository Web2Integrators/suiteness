import { Resource, component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { useBookings } from "~/routes/bookings/index@bookings";
import { Popover } from "@qwik-ui/headless";
import { LuInfo } from "@qwikest/icons/lucide";
import useBookingDetailsResource from "../hooks/useResource";
import { BookingDetailsPopUp } from "./bookingDetailsPopUp";

export const Bookings = component$(() => {
  const bookingId = useSignal<number>();
  const bookings = useBookings();
  const { bookingDetail } = useBookingDetailsResource(bookingId);
  return (
    <>
      <div class="mx-4 overflow-x-auto">
        <table class="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th class="text-center text-base">Id</th>
              <th></th>
              <th class="text-base">Hotel Name</th>
              <th class="text-base">checkInDate</th>
              <th class="text-base">checkOutDate</th>
              <th class="text-base">Paid</th>
              <th class="text-base">Cancelled</th>
              <th class="text-base">Occupancy</th>
              <th class="text-base">currency</th>
              <th class="text-base">total</th>
            </tr>
          </thead>
          <tbody>
           
            {bookings.value.map((booking, index: string | number) => (
              <tr key={index}>
                <th class="text-center">
                  <Link
                    class="link link-info text-base"
                    href={`/bookings/${booking.id}`}
                  >
                    {booking.id}
                  </Link>
                </th>
                <th>
                  <BookingDetailsPopUp cbookingId={booking.id} />
                </th>
                <td>{booking.hotelName}</td>
                <td>{booking.checkInDate}</td>
                <td>{booking.checkOutDate}</td>
                <td>{booking.paid.toString()}</td>
                <td>{booking.cancelled.toString()}</td>
                <td>{booking.occupancy}</td>
                <td>{booking.currencyCode}</td>
                <td>{booking.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
});
