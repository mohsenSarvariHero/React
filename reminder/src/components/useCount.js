import {useState} from 'react'
export const useCount = (initial = 0 )=>{
    const [number , setNumber] = useState(initial)

    const increase = ()=>{
        return(
            setNumber((prev)=> prev+1)
        )
    }
    const decrease = ()=>{
        return(
            setNumber((prev)=> prev-1)
        )
    }
    const reset = ()=>{
        return(
            setNumber(0)
        )
    }
    return[number , increase , decrease , reset]
}