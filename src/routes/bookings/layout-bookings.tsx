import { $, component$, Slot, useContext, useTask$ } from "@builder.io/qwik";
import { type RequestHandler } from "@builder.io/qwik-city";
import { BookingsHeader } from "~/components/layout-structure/bookings/bookingsHeader";
import { BookingsSideBar } from "~/components/layout-structure/bookings/bookingsSidebar";
import { onGet } from "~/qwik-city/caching/cacheControl";
import { APP_STATE_CONTEXT_ID } from "~/shared/_state/app-state-context-id";

export const onGetRequest: RequestHandler = onGet;

export default component$(() => {
  const appState = useContext(APP_STATE_CONTEXT_ID);
  useTask$(async () => {
    appState.routes = [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Bookings",
        href: "/bookings/",
      },
      
    ];
  });

  const toggleSidebar = $(() => {
    if (appState.isSidebarOpened) {
      document.getElementById("my-drawer")?.click();
      appState.isSidebarOpened = false;
    }
  });

  return (
    <>
      <BookingsHeader />
      <div class="drawer min-h-screen">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div
          id="swup"
          class="transition-main drawer-content"
          onClick$={toggleSidebar}
        >
          <Slot />
        </div>
        <BookingsSideBar />
      </div>
    </>
  );
});
