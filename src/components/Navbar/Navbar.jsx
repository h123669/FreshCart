import React, { useContext, useEffect, useState } from 'react'
import style from './Navbar.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import Products from './../Products/Products';
import Home from './../Home/Home';
import Brands from './../Brands/Brands';
import Categories from './../Categories/Categories';
import Register from './../Register/Register';
import Login from './../Login/Login';
import Logout from './../Logout/Logout';
import photo from "../../imgs/freshcart-logo.svg"
import { CounterContext } from '../Context/CounterContext';
import { UserContext } from '../Context/UesrContext';
import { CartContext } from '../Context/CartContext';


export default function Navbar() {
  let {UserLogin,setUserLogin}=useContext(UserContext)
  
  let {numOfCartItems}=useContext(CartContext)
  useEffect(() => {
    
  })
  
  // let x =useContext(CounterContext)
  // console.log(x);
  let navigate = useNavigate()

  function Logout() {
    localStorage.removeItem("getToken");
    setUserLogin(null)
    navigate("/login")
  }
    
    const [count, setcount] = useState(0)
  return (
    <nav className='bg-gray-300 lg:fixed top-0 end-0 start-0 z-50'>
      <div className='p-4 flex flex-col lg:flex-row lg:justify-between' >
        <div className='logo flex flex-col lg:flex-row'>
          <h2 className='text-yellow-600'><img src={photo} alt="" /></h2>
          <ul className='flex flex-col lg:flex-row'>
            {UserLogin !==null?
            <>
            <li className='px-3 py-2'><NavLink to="">Home</NavLink></li>
            <li className='px-3 py-2'><NavLink to="products">Products</NavLink></li>
            <li className='px-3 py-2'><NavLink to="brands">Brands</NavLink></li>
            <li className='px-3 py-2'><NavLink to="categories">Categories</NavLink></li>
            <li className='px-3 py-2 relative'><NavLink to="cart">Cart</NavLink><span className="bg-pink-100 absolute top-[-8] end-[-30] text-pink-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">{numOfCartItems}</span>
            </li>
            </>
            :null}
          </ul>
        </div>
        <div className='links'>
          <ul className='flex flex-col lg:flex-row'>
            {UserLogin ==null ?
            <>
            <li className='px-3 py-2'><NavLink to='register'>Register</NavLink></li>
            <li className='px-3 py-2'><NavLink to='login'>Login</NavLink></li>
            </>
            :
            <li className='px-3 py-2' onClick={Logout}><span>Logout</span></li>
          }
            <li className='px-3 py-2'><i className='fab fa-facebook'></i>
            <i className='fab fa-youtube px-3 py-2'></i>
            <i className='fab fa-tiktok px-3 py-2'></i>
            <i className='fab fa-spotify px-3 py-2'></i>

            </li>
            
          </ul>

        </div>
      </div>
    </nav>
  )
}
