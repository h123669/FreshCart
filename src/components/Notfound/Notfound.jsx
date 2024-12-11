import React, { useEffect, useState } from 'react'
import style from './Notfound.module.css'
import {Helmet} from "react-helmet";


export default function Notfound() {
    
    useEffect(() => {

    })
    
    
    const [count, setcount] = useState(0)
  return (
    <>
    <Helmet>      
      <title>Fresh Cart-NotFound</title>          
    </Helmet> 
    <div>Notfound</div>
    </>
  )
}
