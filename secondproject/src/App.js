// import logo from './logo.svg';
// import {Course} from '../src/components/1.js'
import {CourseItem} from '../src/components/1.js'
import './App.css';
import {useState} from "react";
// function App() {
// const [newCourse , setNewCourse] = useState("")
// const [courseList , setCourseList] = useState([])

// const handleChange = (e)=>{
//   setNewCourse(e.target.value)
// }
// const added =()=>{
//   const newCourse1 = {
//     id :courseList.length == 0 ? 1 :  courseList[courseList.length - 1].id + 1,
//     courseName : newCourse,
//     isComplete : false
//   }
//   const newCourseList = [...courseList , newCourse1];
//   setCourseList(newCourseList)

// }
// const deletCourse = (courseId) =>{
//   const newList = courseList.filter((course) =>{
//     if(course.id === courseId) return false
//     else return true
//    //  course !== courseName
//   })
//   setCourseList(newList)
//  }

//  const completeCourse =(courseId) => {
//   const newLists = courseList.map((course)=>{
//     if (course.id == courseId) return {...course , isComplete : !course.isComplete}
//     else return course
//   })

//   setCourseList(newLists)  
//  }
// const deletCourse = (courseName) =>{
//    
//   setCourseList(courseList.filter((course) => course !== courseName))
//  }
function App(){

const [courseList , setCourseList] = useState([])
const [newCourse , setNewCourse] = useState("")
const newInput = (e)=>{
  setNewCourse(e.target.value)
}
const addCourse = () =>{
  const newList = {
    id : courseList.length == 0 ? 1 :  courseList[courseList.length -1].id + 1 ,
    courseName : newCourse,
    isComplete : false
  }
  
  
  setCourseList([...courseList,newList])
}

const deleteCourse =(courseNameId) =>{
    const newListFilter = courseList.filter((course) =>{
      if(courseNameId === course.id) return false
      else return true
    })
    setCourseList(newListFilter)
}
const completeCourse =(courseId)=>{
  const newListTwo = courseList.map((course)=>{
      if(course.id == courseId) return {...course , isComplete : !course.isComplete}
      else return course
    
  })
  setCourseList(newListTwo)
}
  return (
    <div className="App">
    <h1>This is project for adding course </h1>
    <div>
      <label style={{fontSize : "20px"}}>adding your course : </label>
      <input type='text' placeholder="addind course" style={{padding : "5px",fontSize : "20px"}} onChange={newInput} />
      <br/>
      <br/>
      <button type="submit" style={{fontSize:"20px", cursor : "pointer"}} onClick={addCourse}>Add</button>

    </div>
    <div>
      <h2 style={{borderBottom : "2px solid black"}}>List Courses </h2>
      <ol>
      {courseList.map((course) => {
        return (
          <CourseItem course ={course} completeCourse={completeCourse} deleteCourse={deleteCourse} />
        )
      })}
      </ol>
      


    </div>



















    {/* <div className = "add-course">
      <input type = "text" onChange={handleChange}></input>
      <button onClick={added}>add course</button>
    </div>
    <div className = "list">
    {courseList.map((value,index)=>{
      return (
      <Course  key={index} value = {value} deletCourse = {deletCourse} completeCourse={completeCourse}  />
      )
    })}
    // </div> */}
    </div>
  );
}


export default App;
