import { component$ } from "@builder.io/qwik";
import { useBookings } from "~/routes/bookings/index@bookings";
import { BookingDetailsPopUp } from "./bookingDetailsPopUp";
import moment from "moment";
import { LinkBookingIds } from "../atoms/linkBookingIds";

export const Bookings = component$(() => {
  const bookings = useBookings();

  const total = bookings.value.reduce((acc, booking) => acc + booking.total, 0);
  const currencyCode = bookings.value[0]?.currencyCode;

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
              <th class="text-base">LengthOfStay</th>
              <th class="text-base">Paid</th>
              <th class="text-base">Occupancy</th>
              <th class="text-base">Cancelled</th>

              <th class="flex flex-col text-base">
                <span>Total</span>
                <span>
                  ({total / 100}) {currencyCode}{" "}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {bookings.value.map((booking, index: string | number) => (
              <tr key={index}>
                <th class="text-center">
                  <LinkBookingIds id={booking.id} />
                </th>
                <th>
                  <BookingDetailsPopUp currentBookingId={booking.id} />
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
                    "days",
                  )}
                </td>
                <td class={booking.paid ? "bg-green-500" : "bg-red-500"}>
                  {booking.paid.toString()}
                </td>
                <td>{booking.occupancy}</td>
                <td class={booking.cancelled ? "bg-red-500" : "bg-green-500"}>
                  {booking.cancelled.toString()}
                </td>

                <td>{booking.total / 100} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
});
