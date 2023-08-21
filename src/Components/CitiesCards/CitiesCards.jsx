import React from 'react'
import './citiescards.css'
import { Link } from 'react-router-dom'

function CitiesCards({data}) {
    const {name, description, image, _id} = data
  return (
    <div className="rounded overflow-hidden shadow-lg my-3 mx-2 bg-white">
      <img className="w-full h-80" src={image} alt="Mountain"></img>
      <div className="px-4 py-2">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base line-clamp-3 overflow-hidden">
            {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-center">
        <Link className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' to={'/cities/' + _id}>Details</Link>
      </div>
    </div>
  )
}

export default CitiesCards