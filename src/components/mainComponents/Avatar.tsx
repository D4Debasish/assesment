"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Avatars {
  id: number;
  name: string;
  image: string;
}

interface AvatarProps {
  avatars: Avatars[];
}

const Avatars: React.FC<AvatarProps> = ({ avatars }) => {
  return (
    <div className="flex items-center xl:gap-6 xl:ml-0 md:ml-0 gap-4 justify-center ml-20  ">
      {avatars.map((item, key) => {
        return (
          <div key={key} className="flex flex-col items-center    ">
            <div className=" border border-white rounded-full   xl:w-[110px] xl:h-[110px] w-[78px] h-[78px] flex items-center justify-center">
              <Avatar className="xl:w-[100px] xl:h-[100px] w-[68px] h-[68px] cursor-pointer">
                <AvatarImage
                  src={item.image}
                  alt={item.name}
                  className=" object-cover"
                />
              </Avatar>
            </div>
            <h1 className="mt-2 text-white/70 xl:text-md text-sm font-semibold">
              {item.name}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Avatars;
