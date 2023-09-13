import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import countries from 'i18n-iso-countries'
import enLocale from 'i18n-iso-countries/langs/en.json'
import { server } from '../utils/enum.js';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import GoogleLoginButton from '../Components/GoogleLoginButton.jsx';
import { useDispatch } from 'react-redux';
import { signup, login } from '../redux/actions/authActions.js';
import { toast } from 'react-toastify';


countries.registerLocale(enLocale);
const countriesObj = countries.getNames("en", {select: "official"})
const countriesArr = Object.entries(countriesObj).map(([key, value])=>{
    return {
        label: value,
        value: key
    }
})

function Signup() {
    // const [selectedCountry, setSelectedCountry] = useState("")
    // const selectCountryHandler = (value) => setSelectedCountry(value)

   const [data, setData] = useState({
        email: "",
        name:"",
        password: "",
        terms: false,
        photo: "",
    })

    const dispatch = useDispatch()

    const handleChangeData = (e)=>{
        setData((prevState)=> {
            return e.target.name === 'terms' ? { ...prevState, [e.target.name]:e.target.checked} : {...prevState, [e.target.name]:e.target.value}
        })
    }
    const handleSubmitData = async (e)=>{
        e.preventDefault()
        const userData = {...data}
        if(!userData.terms){
                toast.error("You need to accept the terms.", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
        }
        if(userData.terms){
            delete userData.terms
            if(userData.photo === ''){
                userData.photo = undefined
            }
            if(userData.name === '' || userData.password === '' || userData.email === ''){
                toast.error("Fill all the form to continue", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            }
            const res = await server.post('/auth/up', userData)
            console.log(res)
            dispatch(login(res.data))
        }
    }

    const handleSubmitGoogle = async (data) => {
        const userData={...data}
        if(userData.terms){
            delete userData.terms
            const res = await server.post('/auth/up', userData)
            console.log(res)
            dispatch(login(res.data))
        }
    }

    return (
        <section className='flex justify-center items-center h-full w-full fondo-main text-white font-poppins'>
            <div className='w-96 h-auto hero-main flex justify-center items-center border-2 rounded-lg border-gray-200'>
                <div >
                    <form onSubmit={handleSubmitData}>
                        <h2 className='text-3xl text-center mt-4'>Register</h2>
                        <div className='w-72 flex flex-col my-2'>
                            <label>Name</label>
                            <input name='name' onChange={handleChangeData} value={data.name} className='px-4 w-full h-8 border-1 outline-0 text-white rounded-lg bg-gray-500' type="text" placeholder='John Smith'/>
                        </div>
                        <div className='w-72 flex flex-col my-2'>
                            <label>Email</label>
                            <input name='email' onChange={handleChangeData} value={data.email} className='px-4 w-full h-8 border-1 outline-0 text-white rounded-lg bg-gray-500' placeholder='name@company.com' type="email"/>
                        </div>
                        <div className='w-72 flex flex-col my-2'>
                            <label>Password</label>
                            <input name='password' onChange={handleChangeData} value={data.password} className='px-4 w-full h-8 border-1 outline-0 text-white rounded-lg bg-gray-500' placeholder='Password' type="password"/>
                        </div>
                        <div className='w-72 flex flex-col my-2'>
                            <label>Photo</label>
                            <input name='photo' onChange={handleChangeData} value={data.photo} className='px-4 w-full h-8 border-1 outline-0 text-white rounded-lg bg-gray-500' placeholder='Photo URL' type="text"/>
                        </div>
                        <div className='w-72 flex flex-col my-2'>
                            <label>Country</label>
                            <select name='country' className="text-black rounded-lg py-1" value={data.country} onChange={handleChangeData}>
                                {countriesArr.map(({label, value})=>(
                                        <option className="text-black" value={value}>
                                            {label}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <div className='my-2'>
                            <input name='terms' onChange={handleChangeData} value={data.terms} type="checkbox"/>
                            <label className="px-2">Accept terms and conditions</label>
                        </div>
                        <button type="submit" className='w-full justify-center mb-8 border-1 rounded-lg bg-blue-700'>Sign up</button>
                                    <div className='flex justify-center'>
                                <GoogleLoginButton fn={handleSubmitGoogle}/>
                                </div>
                        <div className='mt-6 text-center mb-6'>
                            <p>Have an account? <Link to="/login">Log in</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
      )
    }

export default Signup