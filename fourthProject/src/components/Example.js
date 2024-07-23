import {useState} from "react"
const TopComponent = ()=>{
    const [state , setState] = useState();
    return(
        <MiddleComponent state={state} />
    )
}

const MiddleComponent = (state)=>{
    return(
        <BottomComponent state={state} />
    )
}

const BottomComponent = (state)=>{

    return(
        <h1>{state}</h1>
    )
}