import { routeLoader$ } from "@builder.io/qwik-city";
import type { Booking } from "~/shared/types/types";
import { suitenessConfig } from "~/shared/utility/config";
// eslint-disable-next-line qwik/loader-location
export const useBookingsData = routeLoader$(async () => {
  let data: Response | null = null;
  try {
    data = await fetch(`${suitenessConfig.baseurl}/bookings`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": import.meta.env.PUBLIC_SUITENESS_API_KEY,
      },
    });
  } catch (err) {
    //todo:Error details
    //data = err;
  }
  const json: Booking[] = await data?.json();
  return Array.isArray(json) ? json : Promise.reject(json);
});
