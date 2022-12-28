import React from "react";
import CategoryCard from "./CategoryCard";
import Link from "next/link";

const category = [
  {
    img: "/breakfast.jpg",
    title: "Breakfast",
    link: "/breakfast",
  },
  {
    img: "/lunch.jpg",
    title: "Lunch",
    link: "/lunch",
  },
  {
    img: "/dinner.jpg",
    title: "Dinner",
    link: "/dinner",
  },
  {
    img: "/desert.jpg",
    title: "Desserts",
    link: "/dessert",
  },
  {
    img: "/snacks.jpg",
    title: "Snacks",
    link: "/snacks",
  },
];

const Category = () => {
  return (
    <section className="w-full">
      <div className="flex justify-between items-center p-4">
        <h2 className=" text-xl font-bold text-gray-500">Categories</h2>
        <Link href="/recipe/new">
          <button className="mr-3 cursor-pointer bg-violet-500 hover:bg-violet-600 p-2 text-white rounded-md">
            Create New Recipe
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-5 mt-5">
        {category.map((item, i) => (
          <Link href={item.link}>
            <CategoryCard item={item} key={i} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Category;
