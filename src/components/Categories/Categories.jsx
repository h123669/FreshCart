import React, { useEffect, useState } from 'react'
import style from './Categories.module.css'
import {Helmet} from "react-helmet";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios/unsafe/axios.js'


export default function Categories() {
  
  function getCategory() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }
  let {data,isError ,error,isLoading}=useQuery({
    queryKey:"gatCategories",
    queryFn:getCategory
  })
  console.log(data?.data?.data);
  
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
      <title>Fresh Cart-Categories</title>          
    </Helmet> 
    
<div className="row justify-center items-center gap-8">

{data?.data?.data?.map((Category)=>{
  return <div className='sm:w-1/2 md:w-1/3 lg:w-1/6 flex justify-center items-center flex-col' key={Category._id}>
  <img src={Category.image}/>
  
  <h2 className='text-2xl'>{Category.name}</h2>

</div>
        
        

      })}
</div>



    
    </>
  )
}
