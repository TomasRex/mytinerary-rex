import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SearchCities = (props) => {
    
    useEffect(()=>{
        axios('http://localhost:3000/api/cities?name=' + document.getElementById('searchCity').value)
        .then(res => props.setCities(res.data.response))
      },)

  return (
    <div class="space-y-10 flex justify-center my-8">    
    <div class="flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl">
      <div class="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input class="bg-gray-100 outline-none" type="text" id="searchCity"/>
      </div>
    </div>
</div>
  )
}

export default SearchCities