import {useParams} from "react-router-dom"
import { ChangeUserName } from "../components/ChangeUserName"
import { useContext } from "react"
import { profileContext } from "../App"
export const Profile = ()=>{
    const {name , id } = useParams()
    const {username} = useContext(profileContext)
    return(
        <div> 
            this is the page of  {name} by id {id}  ; this is {username} <br/>
            <ChangeUserName  />
        </div>
    )
}