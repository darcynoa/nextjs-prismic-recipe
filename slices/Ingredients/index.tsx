/** @format */

import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import SubHeading from "@/components/SubHeading";
import Divider from "@/components/Divider";

/**
 * Props for `Ingredients`.
 */
export type IngredientsProps = SliceComponentProps<Content.IngredientsSlice>;

/**
 * Component for "Ingredients" Slices.
 */
const Ingredients: FC<IngredientsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SubHeading title={"ingredients"} />
      <PrismicRichText
        field={slice.primary.ingredient_list}
        components={{
          list: ({ children }) => (
            <ul className="text-[1rem] font-sans text-stone-900 list-disc list-outside pl-8 marker:text-[1rem] marker:text-brown-800">
              {children}
            </ul>
          ),
        }}
      />
      <Divider />
    </section>
  );
};

export default Ingredients;
