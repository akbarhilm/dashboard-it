/* eslint-disable react/no-children-prop */
import React from "react";
import { BsDot } from "react-icons/bs";

const Label1 = (props: { name: any }) => {
  return (
    <LabelCategory
      category={props.name}
      tooltipsText={props.name}
    ></LabelCategory>
  );
};

const LabelCategory = ({
  tooltipsText,
  category,
}: {
  tooltipsText: string;
  category: string;
}) => {
  return (
    <>
      <p
        className={`inline-flex ${
          (category === "new" &&
            `rounded-full bg-zinc-400 text-black py-0.5 px-2`) ||
          (category === "ongoing" &&
            `rounded-full bg-green-500 text-black py-0.5 px-2`) ||
          (category === "pending" &&
            `rounded-full bg-rose-600 text-black py-0.5 px-2`) ||
          (category === "delayed" &&
            `rounded-full bg-orange-500 text-black py-0.5 px-2`) ||
          (category === "closed" &&
            `rounded-full bg-cyan-400 text-black py-0.5 px-2`) ||
          (category === "hold" &&
            `rounded-full bg-rose-600 text-black py-0.5 px-2`) ||
          (category === "blocked" &&
            `rounded-full bg-neutral-400 text-black py-0.5 px-2`) ||
          (category === "tobe_launch" &&
            `rounded-full bg-green-700 text-black py-0.5 px-2`) ||
          (category === "cancel" &&
            `rounded-full bg-rose-600 text-black py-0.5 px-2`)
        }`}
      >
        <BsDot className="text-lg" />
        {tooltipsText}
      </p>
    </>
  );
};

export default Label1;
