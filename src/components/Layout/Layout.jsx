import React, { useEffect, useState } from 'react'
import style from './Layout.module.css'
import Navbar from './../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './../Footer/Footer';
import { Toaster } from './../../../node_modules/react-hot-toast/src/components/toaster';


export default function Layout() {
    
    useEffect(() => {

    })
    
    
    const [count, setcount] = useState(0)
  return (
    <>
    <Navbar/>
    <div className='container mx-auto p-10'>

    <Outlet/>
    <Toaster/>

    </div>
    <Footer/>
    </>
  )
}
