import React, { Fragment } from 'react'
import Headermain from "../Components/Headermain/Headermain"
import Footermain from "../Components/Footermain/Footermain"
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <div className='h-screen flex flex-col font-poppins'>
        <Headermain/>
        <div className='flex-1'><Outlet/></div>
        <Footermain/>
    </div>
    </>
  )
}

export default MainLayout