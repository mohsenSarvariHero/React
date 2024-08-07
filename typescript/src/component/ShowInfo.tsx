import { useState } from "react";
export interface Props {
    name : string ;
    email : string;
    age : number;
    isMarried? : boolean;
    courses : string[];
    country : Country
}
export enum Country {
    Iran = "Iran",
    Afghanestan = "Afghanestan",
    Tourkamanstan = "Tourkamanstan"
}
export function ShowInfo(props : Props){
    // const [name , setName] = useState<string>("mohsen")
    // setName(12)
    // const name  = "mohsen"
    // const name2 : String  = "mohsen"
    // const name3 : String  = 50
    return(
        <div>
        <h1>name is : {props.name}</h1>
        <h2>email is : {props.email}</h2>
        <h2>age is : {props.age}</h2>
        <h3>Married : {props.isMarried ? "yes" : "No" } </h3>
        {props.courses.map((course : string)=>(
            <h2>{course}</h2>
        ))}
        <h4>paersian country is : {props.country}</h4>
    </div>
    )
}