import { routeLoader$ } from "@builder.io/qwik-city";
import type { Booking } from "~/shared/types/types";



// eslint-disable-next-line qwik/loader-location
export const useBookingData = routeLoader$(async () => {
  let data: Response | null = null;
  try {
    data = await fetch(
      "https://traverse-assignment-api.esdee.workers.dev/bookings",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "4496fe94-01ee-4f9e-8378-6cf6134a7c90",
        },
      },
    );
  } catch (err) {
    //todo:Error details
    //data = err;
  }

  console.log(data);
  console.log("FETCH resolved");
  const json: Booking[] = await data?.json();
  console.log(json);
  return Array.isArray(json) ? json : Promise.reject(json);
});
