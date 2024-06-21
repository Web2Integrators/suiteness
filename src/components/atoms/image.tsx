

import { component$ } from '@builder.io/qwik';
import { Image } from "@unpic/qwik";
export type ImageProps = { imageData: { src: string; width: number; height: number } };
export const ImageCmp = component$(({imageData}: ImageProps) => {
  return (
     <>
       <Image
          src={imageData.src}
          layout="constrained"
          width={imageData.width}
          height={imageData.height}
          alt="A lovely bath"
        />
     </>
  )
});