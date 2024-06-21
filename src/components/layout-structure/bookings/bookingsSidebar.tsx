import { component$, useContext } from "@builder.io/qwik";
import { Navs } from "~/components/atoms/routes";
import { APP_STATE_CONTEXT_ID } from "~/shared/_state/app-state-context-id";

export const BookingsSideBar = component$(() => {
  const appState = useContext(APP_STATE_CONTEXT_ID);

  return (
    <div class="drawer-side z-50 w-[200px] ">
      <label
        for="my-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul class="menu flex min-h-full w-80 flex-col  items-start gap-2 bg-base-100 p-4 text-base-content">
        <Navs routes={appState.routes} />
      </ul>
    </div>
  );
});
