import {ShowItem} from "./R2"
import {useState} from "react"
export function Second(){
    const [courseList , setCourseList] = useState([])
    const [newCourse , setNewCourse] = useState()
    
    const valueInput = (e)=>{
        setNewCourse(e.target.value)
    }
    const addNew = ()=>{
        const addCourse = {
            id : courseList.length == 0 ? 1 : courseList[courseList.length - 1 ].id + 1 ,
            name : newCourse,
            isComplete : false,
            colorI : "red"

        }
        setCourseList([...courseList,addCourse])
    }
    const deleteCourse = (courseId) =>{
        const newFilter = courseList.filter((course)=>{
            if(courseId === course.id) return false
            else return true
        })
        setCourseList(newFilter)
    }
    const completeCourse = (courseId) =>{
        const newListTwo = courseList.map((course)=>{
            if(course.id == courseId) return {...course , isComplete : !course.isComplete , colorI : "green"}
            else return course
          
        })
        setCourseList(newListTwo)
    }
    return(
        <div>
            <h1 style={{borderBottom : "2px solid black" , textAlign:"center"}}>List Of Course : </h1>
            {courseList.map((course)=>{
                return(
                <ShowItem  item={course} deleteCourse = {deleteCourse} completeCourse={completeCourse}/>
                )
            })}
            
            <br />
            <input type="text" onChange={valueInput} style ={{fontSize : "18px"}}/>
            <button onClick={addNew} style ={{fontSize : "18px"}}>add</button>
            
            
        </div>
    )
}