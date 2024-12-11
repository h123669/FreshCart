import React, { useEffect, useState } from 'react'
import style from './CatagorySlider.module.css'
import Slider from "react-slick";
import axios from 'axios/unsafe/axios.js'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function CatagorySlider() {
  const [catagory, setcatagory] = useState([])


  async function getcategory() {
    let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    setcatagory(data.data)
  }
    
    useEffect(() => {
      getcategory()
    })
    
     var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4, 
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3, 
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2, 
          }
        }
      ]
    };
    
  return (
    <>
    <h4 className='text-xl p-[15px]'>shop popular Category</h4>
    <Slider {...settings}>
  {catagory.map((prod) => {
    return (
      <div key={prod.id} className='flex flex-col items-center'>
        <img src={prod.image} className='h-[150px] w-full object-cover' alt="" />
        <h4>{prod.name}</h4>
      </div>
    );
  })}
</Slider>
    </>
  )
}
