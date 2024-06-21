import { component$ } from "@builder.io/qwik";
import { useBookingData } from "~/qwik-city/loaders/booking";
export const useBooking = useBookingData;
export default component$(() => {
  const booking = useBooking();
  return (
    <>
      <h1>{JSON.stringify(booking.value)}</h1>
    </>
  );
});
