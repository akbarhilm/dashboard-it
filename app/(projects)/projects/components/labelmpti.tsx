/* eslint-disable react/no-children-prop */
import React from "react";
import { FaCheck } from "react-icons/fa6";

const Mpti = (props: { name: any }) => {
  return <LabelMpti Mpti={props.name} tooltipsText={props.name}></LabelMpti>;
};

const LabelMpti = ({
  tooltipsText,
  Mpti,
}: {
  tooltipsText: string;
  Mpti: string;
}) => {
  return (
    <>
      <p
        className={`inline-flex ${
          (Mpti === "1" &&
            `rounded-full bg-green-200 text-black-700 py-0.5 px-2`) ||
          (Mpti === "0" &&
            `rounded-full bg-orange-200 text-blue-700 py-0.5 px-2`)
        }`}
      >
        {Mpti === "1" ? <FaCheck className="text-lg" /> : "none"}
      </p>
    </>
  );
};

export default Mpti;
