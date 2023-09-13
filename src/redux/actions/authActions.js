import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../utils/enum";
import { LS } from "../../utils/LS";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";

const login = createAction('login',(credentials) => {
    const reducerData = {
        user: credentials.userData,
        token: credentials.token,
        status: "online"
    }

    toast('Welcome ' + reducerData.user.name + '!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

    LS.set('token', credentials.token)
    return {
        payload: reducerData
    }
})

const signup = createAction('signup',(credentials) => {
    const reducerData = {
        user: credentials.userData,
        token: credentials.token,
        status: "online"
    }
    toast('Registration succesful ' + reducerData.user.name + '!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

    return {
        payload: reducerData
    }
})

const authenticate = createAsyncThunk('authenticate',async() => {
    try {
    const token = LS.getText('token')
    const {data} = await server.get('/auth/token', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })

    const reducerData = {
        user: data.userData,
        status: "online"
    }

    toast('Welcome back ' + reducerData.user.name + '!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

    return reducerData
} catch (error) {
        console.log(error);
}
})

const logout = createAction('logout', ()=>{
    LS.rm('token')
    //window.location.reload(true)
    return {
        payload: null
    }
})

export {login, signup, authenticate, logout}