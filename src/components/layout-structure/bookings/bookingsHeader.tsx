import { $, component$, useContext } from "@builder.io/qwik";
import { HiBars4Solid } from "@qwikest/icons/heroicons";
import { Logo } from "~/components/atoms/logo";
import { Navs } from "~/components/atoms/routes";


import { APP_STATE_CONTEXT_ID } from "~/shared/_state/app-state-context-id";

export const BookingsHeader = component$(() => {
  const appState = useContext(APP_STATE_CONTEXT_ID);
  //todo:move all clicks to events
  const setSideBarOpen = $(() => {
    appState.isSidebarOpened = true;
  });

  return (
    <>
      <div class="inset-x-0 top-0 z-[60] m-1 rounded-full border  border-base-content/10 bg-base-100  bg-opacity-95  backdrop-blur-sm transition-all duration-500">
        <div class="navbar  ">
          {/* Hamburger */}
          <div onClick$={setSideBarOpen} class="flex-none md:hidden">
            <label
              for="my-drawer"
              aria-label="open sidebar"
              class="btn btn-square btn-ghost"
            >
              <HiBars4Solid class="text-4xl" />
            </label>
          </div>
          {/* logo*/}
          <div class="mx-2 flex flex-1 gap-2">
            <Logo logoName="suiteness" />
          </div>
          {/* Routes*/}
          <div class="hidden  md:block">
            <ul class="menu menu-horizontal menu-sm gap-1 2xl:gap-2">
              <Navs routes={appState.routes} />
            </ul>
          </div>
          {/* Log in*/}

                 </div>
      </div>
    </>
  );
});
