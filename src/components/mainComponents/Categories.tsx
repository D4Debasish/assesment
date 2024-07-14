"use client";
import React, { useState } from "react";

interface Category {
  id: number;
  name: string;
}

interface CategoryProps {
  categories: Category[];
}

const Categories: React.FC<CategoryProps> = ({ categories }) => {
  const [active, setActive] = useState<number>(1);

  const handleSelectCategory = (category: Category) => {
    setActive(category.id);
  };

  return (
    <div className="flex xl:gap-3 items-center xl:justify-center md:justify-center md:gap-3 xl:ml-0 mr:10 mt-2">
      {categories.map((category) => (
        <div
          key={category.id}
          className={`cursor-pointer bg-custom1 px-4 py-1 xl:text-md text-sm rounded-[5px] ${
            active === category.id ? "border-b-2 border-white" : ""
          }`}
          onClick={() => handleSelectCategory(category)}
        >
          <div>{category.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
