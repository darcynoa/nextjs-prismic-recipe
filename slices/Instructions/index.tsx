import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Instructions`.
 */
export type InstructionsProps = SliceComponentProps<Content.InstructionsSlice>;

/**
 * Component for "Instructions" Slices.
 */
const Instructions: FC<InstructionsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for instructions (variation: {slice.variation})
      Slices
    </section>
  );
};

export default Instructions;
