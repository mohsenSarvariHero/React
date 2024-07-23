import React from "react"
import {useNavigate} from "react-router-dom"
export const About = ()=>{
    let navigate = useNavigate()
    const goHome=()=>{
        navigate("/")
    }
    return(
        <React.Fragment>
        <div>About Page</div>
        <button onClick={goHome}>go to Home </button>
        </React.Fragment>
    )
}