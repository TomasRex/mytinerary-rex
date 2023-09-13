import React, { useRef } from 'react'
import { Link, useHref } from 'react-router-dom'
import GoogleLoginButton from '../Components/GoogleLoginButton'
import { server } from '../utils/enum'
import { useDispatch } from 'react-redux'
import { login } from '../redux/actions/authActions'
import { toast } from 'react-toastify'

function Login() {
    const dispatch = useDispatch()
    const inputEmail = useRef()
    const inputPass = useRef()

    const handleSubmitGoogle = async (data) => {
        const userData={...data}
        if(userData.terms)delete userData.terms
        const res = await server.post('/auth/in', userData)
        console.log(res)
        dispatch(login(res.data))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userData= {
            email: inputEmail.current.value,
            password: inputPass.current.value
        }
        if(userData.password === ""){
            toast.error("Password can't be empty", {
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
        if(userData.email === ""){
            toast.error("Email can't be empty", {
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
        const res = await server.post('/auth/in', userData)
        console.log(res)
        dispatch(login(res.data))
    }

  return (
    <section className='flex justify-center items-center h-full w-full fondo-main text-white font-poppins'>
        <div className='w-96 h-96 hero-main flex justify-center items-center border-2 rounded-lg border-gray-200'>
            <div >
                <form action="">
                    <h2 className='text-3xl text-center'>Login</h2>
                    <div className='w-72 flex flex-col my-2'>
                        <label>Email</label>
                        <input ref={inputEmail} className='px-4 w-full h-8 border-1 outline-0 text-white rounded-lg bg-gray-500' type="email" placeholder='name@company.com'/>
                    </div>
                    <div className='w-72 flex flex-col my-2'>
                        <label>Password</label>
                        <input ref={inputPass} className='px-4 w-full h-8 border-1 outline-0 text-white rounded-lg bg-gray-500' placeholder='password' type="password"/>
                    </div>
                    <button onClick={handleSubmit} className='w-full justify-center mb-8 border-1 rounded-lg bg-blue-700'>Login</button>
                    <div className='flex justify-center'>
                    <GoogleLoginButton fn={handleSubmitGoogle}/>
                    </div>
                    <div className='mt-6 text-center'>
                        <p>Don't have an account? <Link to="/signup">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Login