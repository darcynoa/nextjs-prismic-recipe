/** @format */

interface Props {
  title: "ingredients" | "instructions" | "nutrition";
}

const SubHeading = ({ title }: Props) => {
  return (
    <h2 className="font-serif text-[2.5rem] text-brown-800 mb-4 capitalize">
      {title}
    </h2>
  );
};

export default SubHeading;
