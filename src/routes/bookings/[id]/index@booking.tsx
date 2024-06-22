import { component$ } from "@builder.io/qwik";
import { Booking } from "~/components/bookings/booking";
import { useBookingData } from "~/qwik-city/loaders/booking";
export const useBooking = useBookingData;
export default component$(() => {
  return (  
    <>
      <Booking></Booking>
    </>
  );
});
