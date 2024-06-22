import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { useBookings } from "~/routes/bookings/index@bookings";

import { BookingDetailsPopUp } from "./bookingDetailsPopUp";
import moment from "moment";

export const Bookings = component$(() => {
  const bookings = useBookings();

  const total = bookings.value.reduce((acc, booking) => acc + booking.total, 0);

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
              <th class="text-base">LenghOfStay</th>
              <th class="text-base">Paid</th>
              <th class="text-base">Occupancy</th>
              <th class="text-base">Cancelled</th>
              <th class="text-base">currency</th>
              <th class="flex flex-col text-base">
                <span>Total</span>
                <span>({total})</span>
              </th>
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
                <td>
                  {moment(booking.checkInDate).format("DD/MM/YYYY hh:mm a")}
                </td>
                <td>
                  {moment(booking.checkOutDate).format("DD/MM/YYYY hh:mm a")}
                </td>
                <td>
                  {moment(booking.checkOutDate).diff(
                    moment(booking.checkInDate),
                    "days"
                  )}
                </td>
                <td class={booking.paid ? "bg-green-500" : "bg-red-500"}>
                  {booking.paid.toString()}
                </td>
                <td>{booking.occupancy}</td>
                <td class={booking.cancelled ? "bg-red-500" : "bg-green-500"}>
                  {booking.cancelled.toString()}
                </td>
                <td>{booking.currencyCode}</td>
                <td>{booking.total}</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Total</td>
              <td>{total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
});
