import { useState } from "react"
export const useCount = (initialValue = 0)=>{
const [valueF , setValueF] = useState(initialValue)
     const increase = ()=>{
                //setValueF(valueF+1)
                setValueF((prev) => prev+1)
            }
     const decrease = ()=>{
                setValueF(valueF-1)
            }
     const reset = ()=>{
                setValueF(0)
            }


    return {increase , decrease , reset , valueF}
}

