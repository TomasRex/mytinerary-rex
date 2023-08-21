import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const CitiesDetails = () => {
  const params = useParams();
  const [city, setCity] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/api/cities/" + params._id).then((res) =>
      setCity(res.data.response)
    );
  }, []);
  console.log(city);
  return (
    <section class="bg-gray-900 flex grow">
      <div className="grid grids-col-1 w-full">
      <Link className="text-xl text-white bg-green-500 py-2 px-4 mx-20 my-5 rounded inline-flex items-center w-fit" to="/cities">Back to cities</Link>
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 my-auto content-center">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Welcome To {city.name}
          </h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            {city.description}
          </p>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
          <img
            src={city.image}
            alt="mockup"
            class="rounded-lg w-full h-80"
          ></img>
        </div>
        <h1 className="text-white col-span-12 place-self-center py-44">UNDER CONSTRUCTION</h1>
      </div>
      </div>
    </section>
    
  );
};

export default CitiesDetails;
