import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

export const SubmitForm = ()=>{

    const schema = yup.object().shape({
        name : yup.string().required("نام اجباری می باشد"), 
        email : yup.string().email("صحیح وارد نشده است").required("ایمیل اجباری می باشد"),
        age : yup.number().positive().min(18).max(100).required(),
        password : yup.string().min(4).max(15).matches(/[a-z]+/).matches(/[A-Z]+/).matches(/\d+/).required(),
        confirmPassword : yup.string().oneOf([yup.ref("password")] , "رمز عبور یکسان نمی باشد").required()
    })
    const {register , handleSubmit , formState : {errors}} = useForm({resolver : yupResolver(schema)})
    const onFormSubmit = (data)=>{
        
            console.log("form is submited")
            console.log(data)
        
    }
    return(
        
            <form onSubmit={handleSubmit(onFormSubmit)} style = {{maxWidth : "400px",margin : "10px auto"  }}>
                <input type="text" placeholder = "Name ..."  style = {{width : "270px" , fontSize : "23px"}}  {...register("name")}/> 
                {errors.name && (<p>{errors.name.message}</p>)}
                <input type="text" placeholder = "Email ..." style = {{width : "270px" , fontSize : "23px"}} {...register("email")}/> 
                {errors.email && (<p>{errors.email.message}</p>)}
                <input type="number" placeholder = "Age ..." style = {{width : "270px" , fontSize : "23px"}} {...register("age")}/> 
                {errors.age && (<p>{errors.age.message}</p>)}
                <input type="password" placeholder = "Password ..." style = {{width : "270px" , fontSize : "23px"}} {...register("password")}/> 
                {errors.password && (<p>{errors.password.message}</p>)}
                <input type="password" placeholder = "confirmPassword ..." style = {{width : "270px" , fontSize : "23px"}} {...register("confirmPassword")}/> <br/>
                {errors.confirmPassword && (<p>{errors.confirmPassword.message}</p>)}
                <br/>
                <input type="submit" style = {{width : "150px" , fontSize : "18px"}}/>
            </form>

        

    )
}