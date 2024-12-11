import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import Products from './../Products/Products';
import Cart from './../Cart/Cart';
import RecentProduct from '../RecentProduct/RecentProduct';
import MainSlider from '../MainSlider/MainSlider';
import CatagorySlider from '../CatagorySlider/CatagorySlider';
import {Helmet} from "react-helmet";


export default function Home() {
    
    useEffect(() => {

    })
    
    
    const [count, setcount] = useState(0)
  return (
    <>

<Helmet>      
      <title>Fresh Cart-Home</title>          
    </Helmet> 
    <div className='container mx-auto py-8 px-10 '>
      <MainSlider/>
      <CatagorySlider/>
      <RecentProduct/>
    </div>
    </>
  )
}
