import React, { Fragment } from 'react'
import Headermain from "../Components/Headermain/Headermain"
import Footermain from "../Components/Footermain/Footermain"
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <div className='h-screen flex flex-col'>
        <Headermain/>
        <Outlet/>
        <Footermain/>
    </div>
    </>
  )
}

export default MainLayout