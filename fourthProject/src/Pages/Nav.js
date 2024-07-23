import {Link} from "react-router-dom"
export function Nav(){
    return(
        <nav>
        <Link to="/" >Home</Link> | 
        <Link to="/about" >About</Link> | 
        <Link to="/contact" >Contact</Link> |
        <Link to="/profile" >Profile</Link> 
      </nav>
    )
}