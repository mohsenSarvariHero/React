import {useState , useReducer , useRef} from "react"
import { initialState, reduceForm } from "./useformReducer"
export function FormReduce(){
    const tagRef = useRef()
    // const [product , setProduct] = useState({
    //     title : "",
    //     description : "",
    //     price : 0 ,
    //     category : "",
    //     tags :[],
    //     quantity : 0
    // });
    const [state , dispatch] = useReducer(reduceForm , initialState)

    const handleInputchange = (e)=>{
        dispatch({type : "change_input" , data : {name : e.target.name , value : e.target.value}})
    
    }
    console.log(state)

    const handleTag = ()=>{
        const tags = tagRef.current.value.split(",")
        tags.forEach(t =>{
            dispatch({type : "add_tag" , data : t})
        })
    }
    return(
       <form>
        <input type="text" placeholder="عنوان... " name="title" onChange={handleInputchange}/>
        <input type="text" placeholder="توضیح... " name="description" onChange={handleInputchange}/>
        <input type="number" placeholder="قیمت ... " name = "price" onChange={handleInputchange} />
        <p>مجموعه</p>
        <select name="category" onChange={handleInputchange}>
            <option value = "bag">کیف</option>
            <option value = "shoes">کفش</option>
            <option value = "dress">لباس </option>
        </select>
        <p>تگ</p>
        <textarea placeholder="tags..." ref={tagRef} ></textarea>
        <br/>
        <button type="submit" onClick={handleTag}>انتخاب تگ </button>
        <br/>
        {state.tags.map((tag) =>{
            return <button key={tag} onClick={()=>dispatch({type : "remove_tag" , data:tag})}>
                {tag}</button>;
        })}
        <div style={{marginTop : "20px"}}>
            <button type="button" onClick = {()=> dispatch({type:"increase"})}>+</button>
            تعداد : {state.quantity}
            <button type="button" onClick = {()=> dispatch({type:"decrease"})}>-</button>
        </div>

       </form>
    )
}