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
      <div className="-mx-[2rem] lg:mx-auto">
        <PrismicNextImage
          field={slice.primary.recipe_main_image}
          className="w-[100%] object-cover"
        />
      </div>
      <PrismicRichText
        field={slice.primary.header}
        components={{
          heading1: ({ children }) => (
            <h1 className="text-stone-900 font-serif text-[2.5rem] leading-[1] my-6 lg:text-[3rem]">
              {children}
            </h1>
          ),
        }}
      />
      <PrismicRichText
        field={slice.primary.recipe_overview}
        components={{
          paragraph: ({ children }) => (
            <p className="font-sans text-brown-800 text-[1.1rem]">{children}</p>
          ),
        }}
      />
    </section>
  );
};

export default Hero;
