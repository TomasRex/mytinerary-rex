import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from '../../utils/enum.js'

const getCitiesSync = createAction('getCitiesSync', (data)=>{
    return {
        payload: 'algo'
    }
})

const getCityAsync = createAsyncThunk('getCityAsync', async (params)=>{
    try {
        const res = await server.get("/cities/" + params._id)
        console.log(res)
        return res.data.response
    } catch (error) {
        console.log(error)
        return []
    }
})

const getCitiesAsync = createAsyncThunk('getCitiesAsync', async (params)=>{
    try {
        const res = await server.get("/cities/")
        console.log(res)
        return res.data.response
    } catch (error) {
        console.log(error)
        return []
    }
})

const getCitiesSearch = createAsyncThunk('getCitiesSearch', async (search)=>{
    try {
        const res = await server.get('/cities?name=' + search)
        return res.data.response
    } catch (error) {
        console.log(error)
        return []
    }
})

export {getCitiesSync, getCityAsync, getCitiesAsync, getCitiesSearch}