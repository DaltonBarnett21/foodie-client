import React from "react";
import Image from "next/image";

const CategoryCard = ({ item }) => {
  return (
    <div className=" cursor-pointer m-4 hover:opacity-70">
      <div className=" h-52 w-full relative p-4">
        <Image src={item.img} fill className=" object-cover" />
      </div>

      <div className=" bg-white shadow-md p-2 ">
        <span className="font-bold">{item.title}</span>
      </div>
    </div>
  );
};

export default CategoryCard;
