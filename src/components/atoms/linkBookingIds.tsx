import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export type LinkBookingIdsProps = {
    id:number
};

export const LinkBookingIds = component$(({id}:LinkBookingIdsProps) => {
  return (
    <>
    <Link
                    class="link link-info text-base"
                    href={`/bookings/${id}`}
                  >
                    {id}
                  </Link></>
  )
});