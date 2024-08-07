import React , {useState} from 'react'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useCount } from './useCount'

export function Hook(){
    const schema = yup.object().shape({

        age : yup.number().positive().min(0).max(100).required(),

    })
    const [value , setValue] = useState()
    const [value2 , setValue2] = useState()
    const {register  , formState : {errors}} = useForm({resolver : yupResolver(schema)})
    const [number , increase , decrease , reset] = useCount(20)
    return(
        <React.Fragment>
           <form  style = {{maxWidth : "400px",margin : "10px auto"  }}>
                
                <input type="number" onChange={(e)=>setValue(e.target.value) } placeholder = "Age ..." style = {{width : "270px" , fontSize : "23px"}} {...register("age")}/> 
                {errors.age && (<p>{errors.age.message}</p>)}
                <br/>
                <input type="submit" onClick={()=>setValue2(value)} style = {{width : "150px" , fontSize : "18px"}}/>
            </form>

          <button onClick={increase}>increase</button>
          <button onClick={decrease}>decrease</button>
          <button onClick={reset}>reset</button>
          <h2>{number}</h2>
          <h2>{value2}</h2>
        </React.Fragment>
        
    )
}