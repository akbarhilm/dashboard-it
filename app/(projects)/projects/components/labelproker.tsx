/* eslint-disable react/no-children-prop */
import React from "react";
import { FaCheck } from "react-icons/fa6";

const Proker = (props: { name: any }) => {
  return (
    <LabelProker proker={props.name} tooltipsText={props.name}></LabelProker>
  );
};

const LabelProker = ({
  tooltipsText,
  proker,
}: {
  tooltipsText: string;
  proker: string;
}) => {
  return (
    <>
      <p
        className={`inline-flex ${
          (proker === "1" &&
            `rounded-full bg-green-200 text-black-700 py-0.5 px-2`) ||
          (proker === "0" &&
            `rounded-full bg-orange-200 text-blue-700 py-0.5 px-2`)
        }`}
      >
        {proker === "1" ? <FaCheck className="text-lg" /> : "none"}
      </p>
    </>
  );
};

export default Proker;
