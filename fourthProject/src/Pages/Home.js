import { useContext } from "react"
import {useQuery} from 'react-query'
import Axios from "axios"
import { profileContext } from "../App"

export function Home (){
    const {data : officeEx, isLoading , isError , error , refetch} = useQuery(["excuse"] , ()=>{
        return Axios.get("https://excuser-three.vercel.app/v1/excuse/office").then((res)=> res.data[0])
    });
    if(isLoading) return <h2>Loading ... </h2>
    if(isError) return <h2>sorry that is not found ...! is error is {error.message}</h2>
    const {username} = useContext(profileContext)
    return(
        <div>
            <h1>Home Page  ; user name iss {username}</h1>
            <h1>{officeEx?.excuse}</h1>
            <button onClick= {refetch}>update</button>
        </div>
    )
}