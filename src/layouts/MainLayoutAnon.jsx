import React, { Fragment } from 'react'
import HeaderMainAnon from "../Components/Headermain/HeaderMainAnon"
import Footermain from "../Components/Footermain/Footermain"
import { Outlet } from 'react-router-dom'

const MainLayoutAnon = () => {
  return (
    <>
    <div className='h-screen flex flex-col font-poppins'>
        <HeaderMainAnon/>
        <div className='flex-1'><Outlet/></div>
        <Footermain/>
    </div>
    </>
  )
}

export default MainLayoutAnon