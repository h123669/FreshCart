import { createContext, useEffect } from "react";
import CounterContextProvider from "./CounterContext";
import { useState } from "react";

export let UserContext = createContext(0)


export default function UsercontextProvider(props) {
    useEffect(()=>{
        if (localStorage.getItem("getToken")!==null) {
            setUserLogin(localStorage.getItem("getToken"))
        }

    },[])

    let [UserLogin,setUserLogin]=useState(null)

    return <UserContext.Provider value={{UserLogin,setUserLogin}}>
            {props.children}
    </UserContext.Provider>
}