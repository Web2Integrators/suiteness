import { Resource, component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { useBookings } from "~/routes/bookings/index@bookings";
import { Popover } from "@qwik-ui/headless";
import { LuInfo } from "@qwikest/icons/lucide";
import useBookingDetailsResource from "../hooks/useResource";

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
                    class="link link-info m-4 p-6"
                    href={`/bookings/${booking.id}`}
                  >
                    {booking.id}
                  </Link>
                </th>
                <th>
                  <Popover.Root gutter={3}>
                    <Popover.Trigger
                      popovertarget="booking-id"
                      class="popover-trigger"
                    >
                      <LuInfo
                        onClick$={() => {
                          bookingId.value = booking.id;
                        }}
                        class="text-2xl"
                      ></LuInfo>
                    </Popover.Trigger>
                    <Popover.Panel id="booking-id" class="popover-panel ">
                      <Resource
                        value={bookingDetail}
                        onPending={() => <>Loading...</>}
                        onRejected={(error) => <>Error: {error.message}</>}
                        onResolved={(bd) => {
                          return (
                            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                            bd.customer && (
                              <>
                                <div class="card w-96 bg-base-100 shadow-xl">
                                  <div class="card-body">
                                    <h2 class="card-title">
                                      {bd.customer.firstName}{" "}
                                      {bd.customer.lastName}
                                    </h2>
                                    <div class="text-gray-500">
                                      CheckInDate: {bd.checkInDate}
                                    </div>
                                    <div class="text-gray-500">
                                      CheckOutDate: {bd.checkOutDate}
                                    </div>
                                    <div class="text-gray-500">
                                      CreatedAt: {bd.createdAt}
                                    </div>
                                    <div class="text-gray-500">
                                      UpdatedAt: {bd.updatedAt}
                                    </div>
                                    <div class="text-gray-500">
                                      Hotel: {bd.hotel.name}
                                    </div>
                                    <div class="text-gray-500">
                                      Room: {bd.room.name}
                                    </div>
                                    <div class="text-gray-500">
                                      Occupancy: {bd.occupancy}
                                    </div>
                                    <div class="text-gray-500">
                                      Total: {bd.total}
                                    </div>
                                    <div class="card-actions justify-end">
                                      <Link
                                        href={`/bookings/${booking.id}`}
                                        class="btn btn-primary"
                                      >
                                        Details
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </>
                            )
                          );
                        }}
                      />
                    </Popover.Panel>
                  </Popover.Root>
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
