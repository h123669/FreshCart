import React, { useEffect, useState } from 'react'
import style from './Login.module.css'
import { useFormik, Formik } from 'formik';
import * as Yup from 'yup';
import axios from './../../../node_modules/axios/lib/axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../Context/UesrContext';
import { CartContext } from './../Context/CartContext';
import {Helmet} from "react-helmet";




export default function Login() {
    let {setUserLogin}=useContext(UserContext)
    let {getAddProduct} =useContext(CartContext)
    
    
    const [count, setcount] = useState(0) 
    let navigate = useNavigate()
    useEffect(() => {

    })

    const [error, seterror] = useState(null)
    const [loading, setloading] = useState(false)

    let validated =Yup.object().shape({
      email:Yup.string().required('email is required').email("email is valid"),
      password:Yup.string().required("password is required").matches(/^[A-Z][a-z0-9]{5,8}/,"password is required"),
      
    })

    let  user ={
      "email":'',
      "password":'',
      
  }

  
  async function submitForm(val) {
    setloading(true)
    console.log(val);
      
    let respone = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,val)
    .then((resp)=>{console.log(resp);
      navigate('/')
      setloading(false)
      getAddProduct()
      localStorage.setItem("getToken",resp.data.token)
      setUserLogin(resp.data.token)

    })
    .catch((resp)=>{

      seterror(resp?.response?.data.message

      );
      setloading(false)
      
    })
    
  }
  let formik = useFormik({
    initialValues: user ,
    onSubmit:submitForm,
    validationSchema:validated
    })
    
    

  
  return (
    <>
<Helmet>      
      <title>Fresh Cart-Login</title>          
    </Helmet> 

    <div className='m-auto py-12'>
      <h1 className='font-bold text-green-500 text-4xl'>Login</h1>

      <form className="max-w-md mx-auto" onSubmit={formik.handleSubmit}>
        
        <div className="relative z-0 w-full mb-5 group">
            <input type="text" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
            <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Email</label>
        </div>
        
        {formik.errors.email &&formik.touched.email? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <p>{formik.errors.email}</p>
        </div>:null}
        
        <div className="relative z-0 w-full mb-5 group">
            <input type="password" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
            <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Password</label>
        </div>
        
        {formik.errors.password && formik.touched.password? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <p>{formik.errors.password}</p>
        </div> :null}

        

          {error?
          <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        {error}
        </div>
          :null}
        
  <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">{loading?<i className='fa-solid fa-spinner fa-spin px-1'></i> :"Submit"} </button>
</form>

    </div>

    




    </>
    
  )
}

