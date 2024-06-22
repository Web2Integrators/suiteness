import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LuArrowBigLeft } from "@qwikest/icons/lucide";

export const BookingHeader = component$(() => {
  return (
    <>
      <div class="inset-x-0 top-0 z-[60] m-1 rounded-full border  border-base-content/10 bg-base-100  bg-opacity-95  backdrop-blur-sm transition-all duration-500">
        <div class="navbar  ">
          {/* Hamburger */}
          <div class="flex-none ">
            <Link
              class="btn mb-2 font-medium text-purple-600 transition duration-150 ease-in-out hover:text-purple-400"
              href="/bookings"
            >
              <LuArrowBigLeft class="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
});
