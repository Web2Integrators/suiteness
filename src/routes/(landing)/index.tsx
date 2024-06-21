import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      {/* <div class="flex items-center flex-col "> 
    <h1 class="bg-slate-500">Hi 👋</h1>
      <button class="btn">Hello daisyUI</button>
      <div>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </div>
      <Link href="/bookings">Bookings</Link>  
    </div> */}
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">Welcome Admin</h1>
            <p class="py-6">CLick on Bookinis button to got to Booking route</p>

            <Link class="btn btn-primary" href="/bookings">
              Bookings
            </Link>
          </div>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
