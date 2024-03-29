import { useState } from "react";
import { Link } from "react-router-dom";

import { articles, projects } from "../constants.js";

import Button from "../components/Button.jsx";
import Projects from "../components/Projects.jsx";
import Articles from "../components/Articles.jsx";
import Footer from "../components/Footer.jsx";

import Header from "../components/Header.jsx";

// image
import HeroImage from "../Assets/hero-image.jpg";

export default function App() {
  return (
    <>
      <main className="bg-black text-white">
        <Header />

        <div className="container mx-auto mt-14 text-center ">
          <h1 className="text-6xl md:text-8xl text-[300] mb-8">
            Culture & Career
          </h1>

          <p className=" text-[#FFFFFFB2] text-xl w-2/3  mx-auto font-normal leading-6 tracking-wide text-center ">
            We're a diverse team fluent in Japanese, Chinese, Hindi, and
            English. Specializing in recruitment, registration support, online
            shop management, and English conversation services. Our mission is
            to bridge the gap between Nepal and Japan, addressing the rural
            talent shortage for Japan's development. Join us in making a
            meaningful impact.
          </p>

          <Button type="primary" alignment="center" className="mt-10">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* gradient section */}
        <section className="py-10 mt-20 relative overflow-hidden">
          {/* blur 1 */}
          <div className="w-32 h-32 md:w-56 md:h-56 bg-[#082FB2] absolute blur-3xl opacity-50 z-0 rounded-full bottom-10 left-32 "></div>
          <div className="w-32 h-32 md:w-56 md:h-56 bg-[#F34213] absolute blur-3xl opacity-50 z-0 rounded-full bottom-10 -left-20"></div>
          <div className="w-32 h-32 md:w-56 md:h-56 bg-[#FF0010] absolute blur-3xl opacity-50 z-0 rounded-full bottom-72 left-10 "></div>

          {/* blur 2 */}
          <div className="w-56 h-56 md:w-96 md:h-96  bg-[#F34213] absolute blur-3xl opacity-50 z-0 rounded-full bottom-56 right-20"></div>
          <div className="w-56 h-56 md:w-96 md:h-96  bg-[#082FB2] absolute blur-3xl opacity-50 z-0 rounded-full bottom-4 -right-4"></div>
          <div className="w-56 h-56 md:w-96 md:h-96  bg-[#FF0010] absolute blur-3xl opacity-50 z-0 rounded-full -bottom-4 right-60"></div>

          {/* gradient overlay */}
          <div className="max-h-[75vh] container mx-auto  z-20 relative overflow-hidden">
            <img
              src={HeroImage}
              alt="hero-image"
              className="object-cover w-full h-full lg:mx-auto rounded-md  md:rounded-3xl lg:w-[85%]"
            />
          </div>
        </section>

        {/* div for black background */}
      </main>

      <section className="container mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-4  mt-32">
        <h2 className="text-5xl md:text-8xl font-bold -mb-1 flex-1">
          Our Projects
        </h2>

        <p className="text-xl flex-1">
          Our aim is to help rural areas in Japan by bringing in young talent
          from overseas and contributing to the country's deve lopment.
          <span className="block w-fit border border-blue-500  px-4 py-5 rounded-full mt-2 scale-y-[.75]">
            {/* bottom arrow */}
            &#10515;
          </span>
        </p>
      </section>

      {/* supports */}
      <Projects projects={projects} />

      <div className="bg-black text-white mt-24 py-10">
        {/* recent articles */}
        <section className="relative z-20">
          <h2 className="mx-auto mb-10 w-fit text-4xl font-bold">
            Recent articles
          </h2>

          <Articles articles={articles} />

          <Link to="/articles" className="block w-fit mx-auto mt-14">
            <Button type="primary" alignment="center">
              Read all blogs
            </Button>
          </Link>
        </section>

        <Footer />
      </div>
    </>
  );
}
