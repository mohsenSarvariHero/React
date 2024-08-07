import React, { useState } from "react"
import { login , logout } from "./Store"
import {useDispatch , useSelector} from "react-redux"

export function Login(){
    const [newUserName , setNewUserName] = useState("")
    const dispatch = useDispatch()
    const selector = useSelector((state) => state.user)
    return(
        <div>
            <h1>Login {selector.username}</h1>
            <input onChange={(e)=> setNewUserName(e.target.value)} />
            <button onClick={() =>dispatch(login({username : newUserName})) }>login</button> 
            <button onClick={() =>dispatch(logout()) }>logout</button> 
        </div>
    )
}