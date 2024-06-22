import { Slot, component$ } from "@builder.io/qwik";
import { BookingHeader } from "~/components/layout-structure/booking/bookingHeader";

export default component$(() => {
  return (
    <>
      <div>
       <BookingHeader></BookingHeader>
        <div>
          <Slot />
        </div>
      </div>
    </>
  );
});
