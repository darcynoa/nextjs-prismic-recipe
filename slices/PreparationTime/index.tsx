/** @format */

import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `PreparationTime`.
 */
export type PreparationTimeProps =
  SliceComponentProps<Content.PreparationTimeSlice>;

/**
 * Component for "PreparationTime" Slices.
 */
const PreparationTime: FC<PreparationTimeProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-rose-50 p-6 rounded-xl"
    >
      <h3 className="font-sans font-bold text-rose-800">Preparation time</h3>
      <ul className="font-sans text-brown-800 list-disc list-inside marker:text-rose-800">
        <li className="my-2">
          <span className="font-semiBold">Total:&nbsp;</span>
          {slice.primary.total_time}
        </li>
        <li className="my-2">
          <span className="font-semiBold">Preparation:&nbsp;</span>
          {slice.primary.prep_time}
        </li>
        <li className="my-2">
          <span className="font-semiBold">Cooking:&nbsp;</span>
          {slice.primary.cook_time}
        </li>
      </ul>
    </section>
  );
};

export default PreparationTime;
