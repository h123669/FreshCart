import { createContext, useEffect, useState } from "react";
import axios from 'axios/unsafe/axios.js'

export let CartContext=createContext()

export default function CartContextProvider(props) {

    let [cartId,setcartId]=useState(0)
  let [products,setproducts]=useState(null)
  let [totalCartPrice,settotalCartPrice]=useState(0)
  let [numOfCartItems,setnumOfCartItems]=useState(0)
    let header ={
        token:localStorage.getItem("getToken")

    }

    function addToCart(id) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,
            {
                productId:id
            },{
                headers:header
            }
        ).then((res)=>{
            getAddProduct()
            
            return res
        }).catch((err)=>{console.log(err);
            return err
        })
    }

    function getAddProduct() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
            headers :header
        }).then((res)=>{
            setcartId(res.data.cartId)
            setproducts(res.data.data.products)
            settotalCartPrice(res.data.data.totalCartPrice)
            setnumOfCartItems(res.data.numOfCartItems)
        }).catch((error)=>{
            console.log(error);
            
        })
    }
    function UpdateProduct(id,count) {
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
            count:count
        },{
            headers :header
        }).then((res)=>{
            setcartId(res.data.cartId)
            setproducts(res.data.data.products)
            settotalCartPrice(res.data.data.totalCartPrice)
            setnumOfCartItems(res.data.numOfCartItems)
        }).catch((error)=>{
            console.log(error);
            
        })
    }
    function DeleteProduct(id) {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
            headers :header
        }).then((res)=>{
            setcartId(res.data.cartId)
            setproducts(res.data.data.products)
            settotalCartPrice(res.data.data.totalCartPrice)
            setnumOfCartItems(res.data.numOfCartItems)
        }).catch((error)=>{
            console.log(error);
            
        })
    }
     useEffect(()=>{
        getAddProduct()
     },[])

    return <CartContext.Provider value={{addToCart,getAddProduct,cartId,products,setproducts,totalCartPrice,numOfCartItems,settotalCartPrice,setnumOfCartItems,UpdateProduct,DeleteProduct}}>
        {props.children}
    </CartContext.Provider>
}