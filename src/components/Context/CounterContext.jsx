import { createContext, useState } from "react";
import App from './../../App';

export let CounterContext = createContext(0)

export default function CounterContextProvider(props) {
    
let [counter,setcounter]=useState(0)
let [username,setusername]=useState("ahmed")

    return <CounterContext.Provider value={{counter,username}}>
        {props.children}
    </CounterContext.Provider>
}