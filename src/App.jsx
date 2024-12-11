import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home'
import Products from './components/Products/Products';
import Brands from './components/Brands/Brands';
import Cart from './components/Cart/Cart';
import Categories from './components/Categories/Categories';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Navbar from './components/Navbar/Navbar';
import Notfound from './components/Notfound/Notfound';
import Register from './components/Register/Register';
import CounterContextProvider from './components/Context/CounterContext'
import UsercontextProvider, { UserContext } from './components/Context/UesrContext'
import ProtectRoutes from './components/ProtectRoutes/ProtectRoutes'
import ProductDetails from './components/ProductDetails/ProductDetails';
import CartContextProvider from './components/Context/CartContext'
import Payment from './components/Payment/Payment'
import Allorders from './components/Allorders/Allorders';
import { Offline, Online } from "react-detect-offline";
import { QueryClient ,QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from './../node_modules/@tanstack/react-query-devtools/src/index';





let x= createBrowserRouter([
  {path: "",element:<Layout/>,children:[
    {index:true,element:<ProtectRoutes><Home/></ProtectRoutes>},
    {path:"products",element:<ProtectRoutes><Products/></ProtectRoutes> },
    {path:"brands",element: <ProtectRoutes><Brands/></ProtectRoutes>},
    {path:"ProductDetails/:id/:category",element: <ProtectRoutes><ProductDetails/></ProtectRoutes>},
    {path:"cart",element: <ProtectRoutes><Cart/></ProtectRoutes> },
    {path:"categories",element:<ProtectRoutes><Categories/></ProtectRoutes>},
    {path:"allorders",element:<ProtectRoutes><Allorders/></ProtectRoutes>},
    {path:"Payment",element:<ProtectRoutes><Payment/></ProtectRoutes>},
    {path:"login",element:<Login/>},
    {path:"register",element:<Register/>},
    {path:"*",element:<Notfound/>},
  ]}
])
const queryClient = new QueryClient()
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

  < QueryClientProvider client={queryClient}>
  <CartContextProvider>
      <UsercontextProvider>
        <CounterContextProvider>
          <RouterProvider router={x}></RouterProvider>
          <ReactQueryDevtools/>
        </CounterContextProvider>
      </UsercontextProvider>
    </CartContextProvider>
  
  </QueryClientProvider>

<Offline><div className='fixed bottom-0 start-[50%] bg-red-400 py-2 px-2 rounded-xl text-xl'>Network Issue</div></Offline>

    
    
    </>
  )
}

export default App
