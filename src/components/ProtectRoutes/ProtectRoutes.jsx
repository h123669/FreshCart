import React, { useEffect, useState } from 'react'
import style from './ProtectRoutes.module.css'
import { Navigate } from 'react-router-dom';

export default function ProtectRoutes(props) {
    
    useEffect(() => {

    })
    
    if (localStorage.getItem("getToken")!==null) {
      return props.children
    }else{
        return <Navigate to='/login'/>
    }
    
    
    const [count, setcount] = useState(0)
  return (<>
    <div  className='p-32'>
      <p>lorem100</p>
    </div>
    
    </>
  )
}
