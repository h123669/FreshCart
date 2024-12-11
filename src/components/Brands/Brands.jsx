import React, { useEffect, useState } from 'react'
import style from './Brands.module.css'
import {Helmet} from "react-helmet";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios/unsafe/axios.js'



export default function Brands() {
    
    function GetBrand(){
      return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
    }

    let {data,isError,error,isFetching,isLoading}=useQuery({
      queryKey:"getBrand",
      queryFn:GetBrand,

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
      <title>Fresh Cart-Brands</title>          
    </Helmet>        
    <div className="row">
      {data?.data?.data.map((brand)=>{
        return <div key={brand._id}>
          <img src={brand.image} />
        </div>
      })}
    </div>
    </>
  )
}
