import { $, component$, useContext } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { APP_STATE_CONTEXT_ID } from "~/shared/_state/app-state-context-id";


export type RoutesProps = { routes: { label: string; href: string }[] };

export const Navs = component$(({ routes }: RoutesProps) => {
  const appState = useContext(APP_STATE_CONTEXT_ID);
  const toggleSidebar = $(() => {
    if (appState.isSidebarOpened) {
      document.getElementById("my-drawer")?.click();
      appState.isSidebarOpened = false;
    }
  });

  return (
    <>
      {routes.map.length > 0  && routes.map((menu, index) => (
        <li key={index}>
          <Link
            onClick$={toggleSidebar}
            class="text-sm font-medium no-underline transition duration-150 ease-in-out"
            href={menu.href}
          >
           
            {menu.label}
          </Link>
        </li>
      ))}
    </>
  );
});
