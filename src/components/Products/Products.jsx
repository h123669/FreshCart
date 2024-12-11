import React, { useContext, useEffect, useState } from 'react'
import style from './Products.module.css'
import {Helmet} from "react-helmet";
import axios from 'axios/unsafe/axios.js'
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import toast from './../../../node_modules/react-hot-toast/src/index';
import { useQuery } from '@tanstack/react-query';


export default function Products() {
  let{addToCart} = useContext(CartContext)
  async function addproductTocart(id) {
    let {data} = await addToCart(id)
    console.log(data);

    
    
    if (data.status === 'success') {
      toast.success(data.message,{position:"top-right"})

      
    }else{
      toast.error(data.message,{position:"top-right"})
      
    }
    
  }

  function getData() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  }

  let {data,isError,error,isFetching,isLoading}=useQuery({
    queryKey:"getAllProducts",
    queryFn:getData
  })
  console.log(data);
  console.log(isError);
  console.log(isFetching);
  console.log(error);
  
  if (isError) {
    return <h2>error</h2>
  }
  if(isLoading){


    return <div className="flex justify-center items-center h-screen">
      
      <span className="loader "></span>
    </div>
  
  
  
  }
    
    
    
    
    
    return (
      <>
       <Helmet>      
      <title>Fresh Cart-Products</title>          
    </Helmet> 

  
      <div className="row">
  
  {data?.data?.data?.map((product) => {
  return (
  
    <div className='p-3  sm:w-1/2 md:w-1/3 lg:w-1/6' key={product.id} > 
    <Link to={`../ProductDetails/${product.id}/${product.category.name}`}>
    <div className='shadow-md p-3'>
        <img src={product.imageCover} alt="" />
        <span className='text-green-300 text-xl'>{product.category.name}</span>
        <p>{product.title.split(" ").slice(0,2).join(" ")}</p>
        <div className='row justify-between'>
          <p>{product.price} EGP</p>
          <p><i className="fa-solid fa-star text-yellow-400"></i>{product.ratingsAverage}</p>
        </div>
      </div>
    </Link>
    <div className="flex justify-center items-center">
    <button onClick={()=>{
      addproductTocart(product._id)
    }} className='btn bg-green-500 group-hover:opacity-100 transition-all my-2'>Add To Cart</button>
      </div>  
    
    </div>
  )
  })}
  
    
  </div>
      </>
    )
}