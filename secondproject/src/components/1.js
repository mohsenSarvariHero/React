// export const Course =(props)=>{
//     return (
//         <table style= {{borderBottom : "2px solid black ", borderCollapse: "collapse " ,padding:"30px", maxWidth : "500px" , margin : "0px auto"}}>
//         <tr style= {{maxWidth : "200px" ,border : "2px solid black" , backgroundColor : props.value.isComplete ? "green" : "white"}} >
//           <td style= {{border : "2px solid black" }} >{props.value.courseName}
//           <button  onClick={() => props.deletCourse(props.value.id)}>delete</button>
//           <button  onClick={() => props.completeCourse(props.value.id)}>complete</button>
//           </td>
//         </tr>
        
//       </table>
//     )
// }
export const CourseItem = (props)=>{
  return(
    <li style={{fontSize : "30px" , borderBottom : "1px solid black", backgroundColor : props.course.isComplete == true ? "green" : "white", color : props.course.isComplete == true ? "white" : "black" }}>{props.course.courseName}
    <br/>
    <button type = "submit" style={{fontSize : "20px"}} onClick={() => props.deleteCourse(props.course.id)}>delete</button>
    <button type = "submit" style={{fontSize : "20px"}} onClick={()=> props.completeCourse(props.course.id)}>complete</button>
    <br/>
    </li>
  )
}
// export default Course