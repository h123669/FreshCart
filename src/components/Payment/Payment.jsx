import React, { useContext, useEffect, useState } from 'react'
import style from './Payment.module.css'
import { useFormik } from 'formik'
import axios from 'axios'
import { CartContext } from './../Context/CartContext';
import { date } from 'yup';
import toast from './../../../node_modules/react-hot-toast/src/index';
import { useNavigate } from 'react-router-dom';
import {Helmet} from "react-helmet";





export default function Payment() {
  const [isOnline, setIsOnline] = useState(false)

  let {cartId,products,setproducts,settotalCartPrice,setnumOfCartItems}=useContext(CartContext)
  let navigate =useNavigate()


  async function cashOrder(val) {
    // console.log(val);
  
    let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`, {
      shippingAddress: val
    }, {
      headers: {
        token: localStorage.getItem("getToken")
      }
    })

    if(data.status=="success"){
      toast.success('product will come soon ...!')
      navigate('/cart')
      setproducts(null)
      settotalCartPrice(0)
      setnumOfCartItems(0)


    }
  
    // console.log(data);
  }


  async function OnlineOrder(val) {
    // console.log(val);
  
    let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5173`, {
      shippingAddress: val
    }, {
      headers: {
        token: localStorage.getItem("getToken")
      }
    })
    console.log(data);

    if(data.status=="success"){
      console.log(data.session.url);
      window.open(data.session.url)
    }
  }

  function detectedProduct(val) {
    if (isOnline) {
      OnlineOrder(val)
    } else {
      cashOrder(val)
    }
  } 
  
  
  

  let formik = useFormik({
    initialValues: {
        "details": '',
        "phone": '',
        "city": ''} ,
    onSubmit:detectedProduct
          })
          
    
    useEffect(() => {

    })
    
    
    
  return (
    <>

<Helmet>      
      <title>Fresh Cart-Payment</title>          
    </Helmet> 
    <div className='m-auto py-12'>
      <h1 className='font-bold text-green-500 text-4xl'>pay Now!</h1>

      <form className="max-w-md mx-auto" onSubmit={formik.handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
            <input type="text" onChange={formik.handleChange} value={formik.values.details} onBlur={formik.handleBlur} name="details" id="details" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
            <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your details</label>
        </div>
        
        <div className="relative z-0 w-full mb-5 group">
            <input type="tel" onChange={formik.handleChange} value={formik.values.phone} onBlur={formik.handleBlur} name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
            <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your phone</label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
            <input type="text" onChange={formik.handleChange} value={formik.values.city} onBlur={formik.handleBlur} name="city" id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
            <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your city</label>
        </div>
       
        <div className='flex justify-around'>
            <button type='submit' onClick={() => setIsOnline(false)} className='btn bg-green-500'>Pay Cash</button>
            <button type='submit' onClick={() => setIsOnline(true)} className='btn bg-green-500'>Pay Online</button>
          </div>
</form>

    </div>

    </>
  )
}
