import { Slot, component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
        <div>
      <h1>Bookings layout</h1>
      <div>
      <Slot />
      </div>
    </div>
    </>
  )
});