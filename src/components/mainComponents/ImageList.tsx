"use client";
import React from "react";
import Image from "next/image";

interface Image {
  id: number;
  src: string;
}

interface ImageProps {
  images: Image[];
}

const ImageList: React.FC<ImageProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-3 gap-1 mb-10 md:mx-10 ">
      {images.map((img) => (
        <div key={img.id} className="  flex items-center justify-center">
          <Image
            src={img.src}
            alt={`images-${img.id}`}
            width={200}
            height={200}
            className=" cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageList;
