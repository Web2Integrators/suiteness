import { component$ } from "@builder.io/qwik";
import moment from "moment";
import { useBooking } from "~/routes/bookings/[id]/index@booking";
import { Collapsible } from "@qwik-ui/headless";
import { LuChevronDown } from "@qwikest/icons/lucide";
import { LinkBookingIds } from "../atoms/linkBookingIds";

export const Booking = component$(() => {
  const booking = useBooking();
  return (
    <>
      <div class="card w-full bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">
            {booking.value.customer?.firstName}{" "}
            {booking.value.customer?.lastName}
          </h2>
          <div class="text-gray-500">
            Customer Id: {booking.value.customer?.id}
          </div>
          <div class="text-gray-500">
            Customer Email: {booking.value.customer?.email}
          </div>
          <div class="text-gray-500">
            <Collapsible.Root class="collapsible">
              <Collapsible.Trigger class="collapsible-trigger">
                <span>Booking Ids</span>
                <LuChevronDown />
              </Collapsible.Trigger>
              <Collapsible.Content class="collapsible-content collapsible-content-outline ">
                {booking.value.customer?.bookingIds.map((bookingId) => (
                  <div key={bookingId} class="text-gray-500">
                    <LinkBookingIds id={bookingId} />
                  </div>
                ))}
              </Collapsible.Content>
            </Collapsible.Root>
          </div>

          <div class="text-gray-500">
            CheckInDate:{" "}
            {moment(booking.value.checkInDate).format("DD/MM/YYYY hh:mm a")}
          </div>
          <div class="text-gray-500">
            CheckOutDate:{" "}
            {moment(booking.value.checkOutDate).format("DD/MM/YYYY hh:mm a")}
          </div>

          <div class="text-gray-500">
            LengthOf Stay:{" "}
            {moment(booking.value.checkOutDate).diff(
              moment(booking.value.checkInDate),
              "days",
            )}
          </div>
          <div class="text-gray-500">
            CreatedAt:{" "}
            {moment(booking.value.createdAt).format("DD/MM/YYYY hh:mm a")}
          </div>
          <div class="text-gray-500">
            UpdatedAt:{" "}
            {moment(booking.value.updatedAt).format("DD/MM/YYYY hh:mm a")}
          </div>
          <div class="text-gray-500">Hotel: {booking.value.hotel?.name}</div>
          <div class="text-gray-500">Room: {booking.value.room?.name}</div>
          <div class="text-gray-500">
            MaxOccupancy: {booking.value.room?.maxOccupancy}
          </div>
          <div class="text-gray-500">
            MaxUnits: {booking.value.room?.maxUnits}
          </div>

          <div class="text-gray-500">Occupancy: {booking.value?.occupancy}</div>
          <div class="text-gray-500">
            Total: {booking.value?.total / 100} {booking.value.currencyCode}
          </div>
          <div class="text-gray-500">Notes: {booking.value.notes}</div>

          <div class="text-gray-500">
            Cancelled: {booking.value.cancelledAt ? "Yes" : "No"}
          </div>
          <div class="text-gray-500">
            Paid: {booking.value.paidInFullAt ? "Yes" : "No"}
          </div>
        </div>
      </div>
    </>
  );
});
