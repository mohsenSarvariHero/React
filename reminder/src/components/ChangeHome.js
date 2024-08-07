import React from "react"
import {useState,useContext} from "react"
import { profileContext } from "./Home"
export function ChangeHome(props){
    const [newPage , setNewPage] = useState("")
    const {homeN,setHomeN} = useContext(profileContext)
    return(
        <React.Fragment>
            <input type="text" onChange={(e)=>setNewPage(e.target.value)}/>
            <button onClick={()=>setHomeN(newPage)}>change</button>
            <h3>{homeN}</h3>
        </React.Fragment>
    )
}