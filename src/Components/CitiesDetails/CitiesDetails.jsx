import React from 'react'

function CitiesDetails({data}) {
    const {name, description, image, _id} = data
  return (
    <h1>{name}</h1>
  )
}

export default CitiesDetails