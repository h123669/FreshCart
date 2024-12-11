import React, { useEffect, useState } from 'react'
import style from './Footer.module.css'
import logo from "../../imgs/images/american-express.jpg"
import logo1 from "../../imgs/images/avhh2xqu4.webp"
import logo2 from "../../imgs/images/kisspng-logo-paypal-x-com-image-brand-1713901610285.webp"
import logo3 from "../../imgs/images/payment-logo-mastercard_width600.png"
import logo4 from "../../imgs/images/Download_on_the_App_Store_RGB_blk.svg.png"
import logo5 from "../../imgs/images/en_badge_web_generic.png"


export default function Footer() {
    
    useEffect(() => {

    })
    
    
    const [count, setcount] = useState(0)
  return (
    <>
    <div className='bg-[#e5e7eb] overflow-hidden'>
      <div className='p-6'>
        <h3 className='text-xl'>Get The FreshCart app</h3>
        <p className='text-sm text-gray-500 '>We will send you a link ,open it on your phone to download the app</p>  
      </div>

      <form className="w-[80%] m-auto py-5">   
        <div className="relative">
          <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Email ..." required />
          <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Share App Link</button>
        </div>
      </form>
      <div className='h-[2px] w-[100%] bg-[#d1d5db]'></div>
      <div className="flex justify-between flex-wrap p-10 lg:flex-row sm:flex-col">
        <div className='flex  '>
          <h3 className='text-xl text-gray-600 px-3'>payment partners</h3>
          <img src={logo} className='w-[20px] h-[20px] m-2 ' />
          <img src={logo1} className='w-[20px] h-[20px] m-2 '  />
          <img src={logo2} className='w-[20px] h-[20px] m-2 '  />
          <img src={logo3} className='w-[20px] h-[20px] m-2 '  />
        </div>
        <div className="flex">
          <p className='text-xl text-gray-600 px-3'>Get deliveries With FreshCart </p>
          <img src={logo4} className='w-[100px] h-[40px]'  />
          <img src={logo5} className='w-[120px] h-[40px]'  />

        </div>
      </div>
    </div>
    </>
  )
}
