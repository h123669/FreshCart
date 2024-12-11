import React, { useEffect, useState } from 'react'
import style from './MainSlider.module.css'
import Slider from "react-slick";

import photo1 from '../../imgs/images/slider-image-1.jpeg'
import photo2 from '../../imgs/images/slider-image-2.jpeg'
import photo3 from '../../imgs/images/slider-image-3.jpeg'
import photo4 from '../../imgs/images/grocery-banner-2.jpeg'
import photo5 from '../../imgs/images/grocery-banner.png'
import photo6 from '../../imgs/images/slider-2.jpeg'

export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

    
    useEffect(() => {

    })
    
    
    const [count, setcount] = useState(0)
  return (
    <>
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-3/4 ">
      <Slider {...settings}>
      <img className='h-[300px] md:h-[400px]' src={photo1} alt=""  />
      <img className='h-[300px] md:h-[400px]' src={photo2}  alt=""  />
      <img className='h-[300px] md:h-[400px]' src={photo3}  alt=""  />
      <img className='h-[300px] md:h-[400px]' src={photo4}  alt=""  />
      <img className='h-[300px] md:h-[400px]' src={photo5}  alt=""  />
      <img className='h-[300px] md:h-[400px]' src={photo6}   alt=""  />
      
      </Slider>
      
      </div>
      <div className='hidden md:block w-1/4 '>
      <img className='h-[200px]' src={photo4} alt=""  />
      <img className='h-[200px]' src={photo6} alt=""  />

      </div>

    </div>
    </>
  )
}