"use client";
import { useState } from "react";
import Avatars from "@/components/mainComponents/Avatar";
import Image from "next/image";
import data from "../data/data.json";
import Fourbuttons from "@/components/mainComponents/Fourbuttons";
import Categories from "@/components/mainComponents/Categories";
import ImageList from "@/components/mainComponents/ImageList";

export default function Home() {
  return (
    <main className="mt-10 xl:mx-[430px] md:mx-[100px] xl:overflow-visible flex flex-col gap-4 overflow-hidden ">
      <Avatars avatars={data.avatars} />
      <hr className="text-md text-white" />
      {/* Buttons.................................... */}
      <Fourbuttons />
      {/* categories......................................... */}
      <Categories categories={data.categories} />
      {/* Images.................................. */}
      <ImageList images={data.images} />
    </main>
  );
}
