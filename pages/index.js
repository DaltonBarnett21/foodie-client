import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "../components/Navbar";
import Category from "../components/Category";
import RecipeCard from "../components/RecipeCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Foodie Recipes</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="p-4 bg-gray-50 h-full">
        <Category />
        <section className="mt-5 p-4 text-gray-500 bg-gray-50 h-full">
          <span className="mb-8">Recent Recipes</span>
          <div className="mt-2 grid grid-cols-5 ">
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
          </div>
        </section>
      </main>
    </>
  );
}
