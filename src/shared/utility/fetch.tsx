
import type { BookingDetail } from "../types/types";
import { suitenessConfig } from "./config";

export async function getBookingDetails(
    bookingId: number | undefined,
    controller?: AbortController,
  ): Promise<BookingDetail> {
    const resp = await fetch(
      `${suitenessConfig.baseurl}/bookings/${bookingId}`,
      {
        signal: controller?.signal,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.PUBLIC_SUITENESS_API_KEY
        },
      },
    );
   
    const json: BookingDetail = await resp.json();
    return json;
  }