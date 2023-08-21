import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import CitiesCards from '../Components/CitiesCards/CitiesCards'
import axios from 'axios'
import SearchCities from '../Components/SearchCities/SearchCities'

const Cities = () => {
  const params = useParams()
  const [cities, setCities] = useState()
  useEffect(()=>{
    axios('http://localhost:3000/api/cities')
    .then(res => setCities(res.data.response))
  }, [])
  return (
    <>
    <SearchCities setCities = {setCities}/>
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 bg-white">
      {
      cities?.map(city => <CitiesCards key={city._id} data={city}/>)
      }
    </div>
    </>
  )
}

export default Cities