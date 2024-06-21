import { component$ } from '@builder.io/qwik';
import { Bookings } from '~/components/bookings/bookings';
import { useBookingsData } from '~/qwik-city/loaders/bookings';

export const useBookings = useBookingsData
export default component$(() => {
  return (
    <>
        <Bookings />
    </>
  )
});