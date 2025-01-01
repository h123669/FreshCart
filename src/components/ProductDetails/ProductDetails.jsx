import React, { useEffect, useState } from 'react'
import style from './ProductDetails.module.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios/unsafe/axios.js'
import Slider from "react-slick";
import { useContext } from 'react';
import { CartContext } from './../Context/CartContext';
import toast from './../../../node_modules/react-hot-toast/src/index';
import {Helmet} from "react-helmet";



export default function ProductDetails() {
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

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [ProductDetails, setProductDetails] = useState({})
  const [relatedProducts, setrelatedProducts] = useState([])


  let {id,category} = useParams()
  async function getSpecificProduct(id){
    let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    
    setProductDetails(data.data)
    
  }
  async function relatedProduct(){
    let res=await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    // console.log(res.data.data);

    let allProduct = res.data.data
    let relatedProducts = allProduct.filter((prod) => {
      return prod.category.name === category;
    });
    
    setrelatedProducts(relatedProducts)
  }
  
    
  useEffect(() => {
    getSpecificProduct(id);
    relatedProduct();
  }, [id, category]);
    
    
  return (
    <>
    <Helmet>      
      <title>Fresh Cart-Details</title>          
    </Helmet>



    <div className='flex flex-col md:flex-row gap-6 p-6 '>
      <div className='w-full md:w-1/3 p-3'>
        <Slider {...settings}>
          {ProductDetails?.images?.map((src) => (
            <div className='py-8' key={ProductDetails._id}>
              <img src={src} className='w-full' />
            </div>
            
        ))}
</Slider>
        
      </div>
      <div className='w-full md:w-2/3 p-20'>
      <h4 className='text-2xl font-bold'>{ProductDetails.title}</h4>
      <p className='text-gray-600 '>{ProductDetails.description}</p>
      <h3 className='text-green-600 text-xl'>{ProductDetails?.category?.name}</h3>
      <div className='row justify-between'>
            <p>{ProductDetails.price} EGP</p>
            <p><i className="fa-solid fa-star text-yellow-400"></i>{ProductDetails.ratingsAverage}</p>
      </div>
      <button onClick={()=>{
        addproductTocart(ProductDetails._id)
      }} className='btn bg-green-500 w-full'>add to cart</button>


      </div>

    </div>

    <div className="row">

    {relatedProducts.map((product) => {
  return (
      <div className='p-3 sm:w-1/2 md:w-1/3 lg:w-1/6' key={product.id} > 
      <Link to={`/ProductDetails/${product.id}/${product.category.name}`}>      
        <div className='shadow-md p-3'>
          <img src={product.imageCover} alt="" />
          <span className='text-green-300 text-xl'>{product.category.name}</span>
          <p>{product.title.split(" ").slice(0,2).join(" ")}</p>
          <div className='row justify-between'>
            <p>{product.price}EGP</p>
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
