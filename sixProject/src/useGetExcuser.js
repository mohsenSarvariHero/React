import {useQuery} from "@tanstack/react-query";
import Axios from "axios";
export const useGetExcuser = ()=>{
    const { data , isLoading , refetch , error} = useQuery({
        querykey : ["excuser"], 
        queryFn : () =>{
        return Axios.get("https://excuser-three.vercel.app/v1/excuse/party")
        .then((res)=> res.data[0]);
    },
});
    const refetchData =()=>{
        alert("data is refetch");
        refetch()
    }
    return {data , isLoading , refetchData, error} 
}