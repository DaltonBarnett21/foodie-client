import React from "react";
import Image from "next/image";
import Link from "next/link";

const RecipeCard = () => {
  return (
    <Link href="/recipe/123">
      <div className="cursor-pointer p-2  hover:opacity-70 mb-20 h-44 w-60 rounded-md">
        <div className=" h-52 w-full relative p-4">
          <Image src="/chicken.jpg" fill className=" object-cover" />
        </div>
        <div className=" bg-white shadow-md p-2 flex justify-between items-center ">
          <span className="font-bold">Fried Chicken</span>
          <span className="text-sm">20 min ago</span>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
