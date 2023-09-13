import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Itineraries from "../Components/Itineraries/Itineraries";
import { useDispatch, useSelector } from 'react-redux'
import { getCityAsync } from '../redux/actions/citiesActions'

const CitiesDetails = () => {
  const params  = useParams()
  const dispatch = useDispatch()
  const city = useSelector(store => store.citiesReducer.city)

  useEffect(() => {
    dispatch(getCityAsync(params))
  }, []);

  return (
    <section class="bg-gray-900 flex h-full">
      <div className="grid grids-col-1 w-full">
        <Link
          className="text-xl text-white bg-green-500 py-1 px-3 mx-16 mt-2 rounded inline-flex items-center w-fit h-fit"
          to="/cities"
        >
          Back to cities
        </Link>
        <div class="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 mb-auto content-center">
          <div class="mr-auto place-self-center lg:col-span-7 mr-12 px-4">
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
          <div className="text-white col-span-12">{city.itinerary?.map((city) => (<Itineraries key={city._id} data={city} />))}</div>
        </div>
      </div>
    </section>
  );
};

export default CitiesDetails;
