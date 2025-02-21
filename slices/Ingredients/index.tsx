/** @format */

import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import SubHeading from "@/components/SubHeading";

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
            <ul className="text-[1.5rem]">
              {children.map((item, index) => (
                <li key={index} className="">
                  {item}
                </li>
              ))}
            </ul>
          ),
        }}
      />
    </section>
  );
};

export default Ingredients;
