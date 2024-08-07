import propTypes from 'prop-types'
export function ShowPerson(props){

    return(
        <div>
            <h1>name is : {props.name}</h1>
            <h2>email is : {props.email}</h2>
            <h2>age is : {props.age}</h2>
            <h3>Married : {props.isMarried ? "yes" : "No" } </h3>
            {props.courses.map((course)=>(
                <h2 key={course}>{course}</h2>
            ))}
        </div>
    )
}

ShowPerson.propTypes = {
    name: propTypes.string,
    email: propTypes.string,
    number: propTypes.number,
    isMarried : propTypes.bool,
    courses : propTypes.arrayOf(propTypes.string)
}