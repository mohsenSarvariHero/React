import {useState,useEffect} from "react"
export const Text =()=>{

    const [textInput,setTextInput] = useState("")

    //mount components
    useEffect(()=>{
        console.log("component mount")

        return ()=>{
            console.log("components died")
        }
    },[])
    //updated components
    useEffect(()=>{
        console.log("components updated")
    },[textInput])


    return(

        <div>
            <input type="text" onChange={(e) =>setTextInput(e.target.value) }></input>
            <h1>{textInput}</h1>
        </div>

    )
}

