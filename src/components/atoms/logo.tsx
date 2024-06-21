import { component$ } from "@builder.io/qwik";


import { Link } from "@builder.io/qwik-city";
import { ImageCmp } from "./image";


export type LogoProps = {
    logoName: string;
};

export const Logo = component$(({ logoName }: LogoProps) => {
  const imageData = {
    src: `/logos/${logoName}.svg`,
    width: 50,
    height: 50,
  };
  return (
    <div>
      <Link class="inline-flex" href="/anonymous/home/" aria-label="Cruip">
        <ImageCmp imageData={imageData} />
      </Link>
    </div>
  );
});
