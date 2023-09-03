import { createReducer } from "@reduxjs/toolkit";
import {getCitiesSync, getCityAsync, getCitiesAsync, getCitiesSearch} from '../actions/citiesActions'


const initialState = {
    cities: [],
    city: [],
    search: []
}

const citiesReducer = createReducer(initialState, 
    (builder)=> builder
        .addCase(getCitiesSync, (state, action)=>{
            const newState = {...state, cities : action.payload}
            return newState
        })
        .addCase(getCityAsync.fulfilled, (state, action)=>{
            console.log('fulfilled')
            console.log(action.payload)
            const newState = {...state, city : action.payload}
            return newState
        })
        .addCase(getCitiesSearch.fulfilled, (state, action)=>{
            console.log('fulfilled')
            console.log(action.payload)
            const newState = {...state, search : action.payload}
            return newState
        })
)

export default citiesReducer