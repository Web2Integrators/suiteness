import { routeLoader$ } from "@builder.io/qwik-city";

import { getBookingDetails } from "~/shared/utility/fetch";



// eslint-disable-next-line qwik/loader-location
export const useBookingData = routeLoader$(async (event) => {
    return getBookingDetails(+event.params.id);
});
