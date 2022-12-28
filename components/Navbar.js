import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" bg-white p-4 flex justify-between items-center border border-gray-200">
      <Link href="/">
        {" "}
        <h1 className=" text-3xl font-bold text-violet-500">Foodie</h1>
      </Link>

      <ul className="flex items-center">
        <Link href="/">
          {" "}
          <li className="mr-3 cursor-pointer hover:text-violet-500 text-gray-500">
            Home
          </li>
        </Link>

        <Link href="/recipes">
          {" "}
          <li className="mr-3 cursor-pointer hover:text-violet-500 text-gray-500">
            Recipes
          </li>
        </Link>

        <Link href="/grocery-list">
          {" "}
          <li className="mr-3 cursor-pointer hover:text-violet-500 text-gray-500">
            Grocery List
          </li>
        </Link>

        <Image
          src="/no-avatar.jpg"
          width={35}
          height={100}
          className=" rounded-full border border-gray-400"
        />
      </ul>
    </nav>
  );
};

export default Navbar;
