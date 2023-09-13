import React from "react";
import Carousel from "../Components/Carousel/Carousel";
import { Link } from "react-router-dom";


function Home() {
  return (
    <main className="antialiased flex flex-col flex-grow fondo-main h-full">
      <div className="mx-auto flex items-center max-w-screen-xl justify-center py-4">
        <div className="mx-auto text-center py-1 px-4 sm:py-6 rounded-3xl sm:px-12 hero-main border-solid border-2 mx-12">
          <h1 className="text-2xl font-extrabold sm:text-3xl text-white">
            My Tinerary
            <strong className="font-bold text-white block py-2">
              Find your perfect trip, designed by insiders who know and love
              their cities!
            </strong>
          </h1>
          <div className="mt-4 flex flex-wrap justify-center py-1">
            <Link
              className="border-solid border-2 border-white tracking-wider antialiased w-1/2 bg-gradient-to-r from-[#25c229] to-[#ffd700] hover:bg-gradient-to-br rounded-full text-xl text-white shadow py-2 font-medium"
              href=""
            >
              START PLANNING
            </Link>
          </div>
        </div>
      </div>
      <Carousel />
    </main>
  );
}

export default Home;
