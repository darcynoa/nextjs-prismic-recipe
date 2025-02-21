/** @format */

import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage field={slice.primary.recipe_main_image} />
      <PrismicRichText
        field={slice.primary.header}
        components={{
          heading1: ({ children }) => (
            <h1 className="text-red-600 text-[4rem]">{children}</h1>
          ),
        }}
      />
      <PrismicRichText field={slice.primary.recipe_overview} />
    </section>
  );
};

export default Hero;
