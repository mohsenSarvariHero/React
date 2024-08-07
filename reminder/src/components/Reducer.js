import Axios from 'axios'
import {useState,useReducer} from "react"
import { factReducer, initialState } from './factReducer'
import { ACTION_TYPE } from './ActionType'

export function Reducer(){
    // const [excuseText , setExcuseText] = useState({})
    // const [loading , setLoading] = useState(false)
    // const [fact , setFact] = useState("")
    // const [error , setError] = useState(false)

    const [state , dispatch] = useReducer(factReducer , initialState)
    const listenExcuse = ()=>{
        dispatch({type : ACTION_TYPE.fetch_start})
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/party`)
        .then((res)=>{
            dispatch({type : ACTION_TYPE.fetch_success , data : res.data[0].excuse} )
            console.log(res.data[0].excuse)
            // setExcuseText(res.data[0])
        })
        .catch((erorr)=>{
            dispatch({type : ACTION_TYPE.fetch_error})
            console.log(erorr)
        })
    }
    return(
       <div>
            <button onClick={listenExcuse}>
                {state.loading ? "is loading ..." : "fetch excuse data"}
            </button>
            {state.error && (<p>Error , some thing wrong ...</p>)}
            <h2>{state.excuse}</h2>
        </div>
 
    )
}