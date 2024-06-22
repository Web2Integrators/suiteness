import { Resource, component$, useSignal } from "@builder.io/qwik";
import { Popover } from "@qwik-ui/headless";
import { LuInfo } from "@qwikest/icons/lucide";
import useBookingDetailsResource from "../../shared/hooks/useResource";
import { Link } from "@builder.io/qwik-city";
export type BookingDetailsPopUpProps = {
  cbookingId: number;
};
export const BookingDetailsPopUp = component$(
  ({ cbookingId }: BookingDetailsPopUpProps) => {
    const bookingId = useSignal<number>();
    const { bookingDetail } = useBookingDetailsResource(bookingId);
    return (
      <>
        <Popover.Root  class="p-2" floating="right-end" gutter={4}>
          <Popover.Trigger popovertarget="booking-id" class="popover-trigger">
            <div  onClick$={() => (bookingId.value = cbookingId)}>
            <LuInfo
             
              class="text-2xl"
            ></LuInfo>
            </div>
            
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
                            {bd.customer.firstName} {bd.customer.lastName}
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
                          <div class="text-gray-500">Room: {bd.room.name}</div>
                          <div class="text-gray-500">
                            Occupancy: {bd.occupancy}
                          </div>
                          <div class="text-gray-500">Total: {bd.total}</div>
                          <div class="card-actions justify-start">
                            <Link
                              href={`/bookings/${cbookingId}`}
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
      </>
    );
  },
);
