
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
          "x-api-key": "4496fe94-01ee-4f9e-8378-6cf6134a7c90",
        },
      },
    );
   
    const json: BookingDetail = await resp.json();
    return json;
  }