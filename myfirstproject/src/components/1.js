export const User = (props) => {
  return(
    <div>
      <h1>{props.name} {props.lastName} {props.age}</h1>
  
    </div>
  )
}

export const Job = (props) => {
  return(
    <div>
      <h1>{props.salary} {props.position} {props.company}</h1>
    </div>
  )
}

export const Person =(props)=>{
  return (
    <li key = {props.index}> {props.name} : {props.age}</li>
  )
}


export const Course = (props) =>{
  return(
    <li>{props.name}</li>
  )
}