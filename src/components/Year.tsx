import React, { JSX } from "react";

interface YearProps {
  year: string;
}

const Year = ({ year }: YearProps): JSX.Element => {
  console.log(year);
  return (
    <div className="w-full flex justify-center" id={`${year}`}>
      <div
        className="text-4xl font-merri font-bold text-white bg-orange-200/20 p-2 px-4 rounded-full w-fit"
        style={{
          animation: "expand 1s ease-out",
        }}
      >
        {year}0
      </div>
    </div>
  );
};

export default Year;
