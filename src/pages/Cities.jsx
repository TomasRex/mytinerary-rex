import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import CitiesCards from '../Components/CitiesCards/CitiesCards'
import axios from 'axios'
import SearchCities from '../Components/SearchCities/SearchCities'
import { useDispatch, useSelector } from 'react-redux'
import { getCitiesAsync, getCitiesSearch } from '../redux/actions/citiesActions'


const Cities = () => {
  const dispatch = useDispatch()
  const cities = useSelector(store => store.citiesReducer.search)

  useEffect(()=>{
    dispatch(getCitiesSearch(""))
  }, [])
  
  return (
    <>
    <SearchCities/>
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 bg-white">
      {
      cities?.map(city => <CitiesCards key={city._id} data={city}/>)
      }
    </div>
    </>
  )
}

export default Cities