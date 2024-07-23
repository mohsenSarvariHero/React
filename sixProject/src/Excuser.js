import { useGetExcuser } from "./useGetExcuser"

export const Excuser = () =>{
    const {data : excuserData , isLoading , refetchData} = useGetExcuser();
    
    if(isLoading) return <h2>isLoading ...</h2>

    return(
        <div>
            <button onClick={refetchData}>refetch Data</button>
            <h1>{excuserData?.excuse}</h1>
        </div>
    )
}