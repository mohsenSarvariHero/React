import React, { useContext }  from "react"
import { useState } from "react"
import { profileContext } from "../App"
export const ChangeUserName = () =>{
    const {setUsername} = useContext(profileContext)
    const [inputVal , setInputVal] = useState("")
    const inputValue = (e)=>{
        setInputVal(e.target.value)
    }
    const change = ()=>{
        setUsername(inputVal)
    }
    return(
        <React.Fragment>
        <input  onChange={inputValue}/>
        <button onClick = {change}>change user name : </button>

        </React.Fragment>
    )
}