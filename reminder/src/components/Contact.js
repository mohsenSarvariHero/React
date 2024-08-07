import { Connection } from "./RC"
import { useSelector } from "react-redux"
export function Contact(){
    const selector = useSelector((state) => state.user)
    return(
        <div>
             <h2>contact page {selector.username}</h2>
             <Connection />
        </div>
       
    )
}