
export function ShowItem (props) {
    
    return(
        <div>
            <li style={{backgroundColor : props.item.colorI , color : "white" , fontSize : "20px" , padding : "12px"}}>
                {props.item.name} 
                <button onClick={ () => props.deleteCourse(props.item.id)} style={{margin: "0px 8px" , fontSize:"15px"}}> x  </button>

                <button onClick={ () => props.completeCourse(props.item.id)} style={{margin: "0px 8px" , fontSize:"15px"}}> complete </button>
                
                
            </li> 
            <br/>
        </div>
        
    )
}