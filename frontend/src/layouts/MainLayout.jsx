import {Outlet} from 'react-router-dom'
import Navbar from '../components/navbar'
import React from 'react'

const MainLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet/>
    </>
  )
}

export default MainLayout