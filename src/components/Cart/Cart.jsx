import React, { useContext, useState } from 'react'
import style from './Cart.module.css'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

export default function Cart() {
  let { getAddProduct, products, totalCartPrice, numOfCartItems, UpdateProduct, DeleteProduct } = useContext(CartContext);

  const [count, setcount] = useState(0);

  return (
    <>
      <Helmet>      
        <title>Fresh Cart-Cart</title>          
      </Helmet> 

      <div className="font-bold text-green-500 text-4xl p-10 lg:p-10">Shop Now</div>
      
      <div className="bg-gray-300 text-2xl py-1 my-2 flex justify-center items-center flex-col ">
        <h3>Num of Cart items:
          <span className='text-green-500 p-3'>{numOfCartItems}</span>
        </h3>
        <h3>Total Cart Price:
          <span className='text-green-500 p-3'>{totalCartPrice} EGP</span>
        </h3>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-4 py-3">
                Product
              </th>
              <th scope="col" className="px-4 py-3">
                Qty
              </th>
              <th scope="col" className="px-4 py-3">
                Price
              </th>
              <th scope="col" className="px-4 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((prod) => {
              return (
                <tr key={prod.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4">
                    <img src={prod.product.imageCover} className="w-16 sm:w-24 md:w-32 max-w-full max-h-full" alt="Product" />
                  </td>
                  <td className="px-4 py-4 font-semibold text-gray-900 dark:text-white break-words">
                    {prod.product.title}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center">
                      <button onClick={() => { UpdateProduct(prod.product._id, prod.count - 1) }} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                        <span className="sr-only">Decrease Quantity</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                        </svg>
                      </button>
                      <div>
                        <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={prod.count} required />
                      </div>
                      <button onClick={() => { UpdateProduct(prod.product._id, prod.count + 1) }} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                        <span className="sr-only">Increase Quantity</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-4 font-semibold text-gray-900 dark:text-white">
                    {prod.price} EGP
                  </td>
                  <td className="px-4 py-4">
                    <a href="#" onClick={() => { DeleteProduct(prod.product._id) }} className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link to='/Payment'>
          <button className='btn bg-green-500 w-full py-2 mt-4'>Pay Now</button>
        </Link>
      </div>
    </>
  );
}
