import { ShowPerson} from "./showPerson"
export function Person(){
    return(
        <div>
            <ShowPerson 
                name={"mohsen"}
                email={"mohsen.sarvari@ut.ac.ir"}
                age = {23}
                isMaried = {false}
                courses = {["react" , "next" , "tailwind"]}
            
            />
        </div>
    )
}