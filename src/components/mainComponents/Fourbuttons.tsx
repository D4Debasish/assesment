"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { IoShirtSharp } from "react-icons/io5";
import { RiArrowUpDownLine } from "react-icons/ri";
import { MdTune } from "react-icons/md";

const buttons = [
  {
    id: "1",
    name: "Gender",
    logo1: <BsGenderFemale />,
    logo2: <BsGenderMale />,
  },
  {
    id: "2",
    name: "Collection",
    logo1: <IoShirtSharp className="text-white bg-black bg-transparent" />,
  },
  {
    id: "3",
    name: "Sort By",
    logo1: <RiArrowUpDownLine className="text-white bg-black bg-transparent" />,
  },
  {
    id: "4",
    name: "Filter",
    logo1: (
      <MdTune className="transform rotate-90 text-white bg-black bg-transparent" />
    ),
  },
];

const Fourbuttons = () => {
  return (
    <div className="flex items-center  flex-row gap-2 justify-center xl:gap-5 xl:ml-0 md:ml-0 md:gap-5 mt-2 ">
      {buttons.map((btns, key) => {
        return (
          <div className="flex justify-around" key={key}>
            <Button
              variant="outline"
              className="flex gap-2 "
              size="default"
              data-testid="button"
            >
              <div className="flex font-bold xl:text-xl text-[13px]">
                {btns.logo1}
                {btns.logo2}
              </div>
              <div className="text-[13px] xl:text-md">{btns.name}</div>
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default Fourbuttons;
