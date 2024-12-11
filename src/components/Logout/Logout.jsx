import React, { useEffect, useState } from 'react'
import style from './Logout.module.css'
import {Helmet} from "react-helmet";


export default function Logout() {
    
    useEffect(() => {

    })
    
    
    const [count, setcount] = useState(0)
  return (
    <>
    <Helmet>      
      <title>Fresh Cart-Logout</title>          
    </Helmet> 
    <div>Logout</div>
    </>
  )
}
