import type { Signal } from "@builder.io/qwik";
import { useResource$ } from "@builder.io/qwik";
import type { BookingDetail } from "~/shared/types/types";
import { getBookingDetails } from "~/shared/utility/fetch";

export const useBookingDetailsResource = (bookingId: Signal<number | undefined>) => {
  const bookingDetail = useResource$<BookingDetail>(({ track, cleanup }) => {
    track(() => bookingId.value);
    if (!bookingId.value) return Promise.resolve({} as BookingDetail);

    const controller = new AbortController();
    cleanup(() => controller.abort());

    // Fetch the data and return the promises.
    return getBookingDetails(bookingId.value, controller);
  });

  return { bookingDetail };
};

export default useBookingDetailsResource;
