import {ShowInfo , Country} from "./ShowInfo"

export function Info(){

    return(
        <ShowInfo 

        name={"mohsen"}
        email={"mohsen.sarvari@ut.ac.ir"}
        age = {23}
        isMarried = {false}
        courses = {["react" , "next" , "tailwind"]}
        country = {Country.Afghanestan}
        />
    )
}