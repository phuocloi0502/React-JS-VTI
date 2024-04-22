import { Link } from "react-router-dom"
import { Menu } from "./Menu"
import "../css/Header.css"
import logo from "../assets/Logo-white.png"
export const Header =() =>{
    
    return(
     <>
     <div className="logo">
        <img src={logo} alt="" />
     </div>
       <nav>    
        <ul className="main-menu">
            <li className="menu-item">
                <Link to="/">Home</Link>
            </li>
            <li className="menu-item">
             <a > Example
             <ul className="sub-menu">
                    <li className="sub-menu-item"> <Link to="/user">User</Link></li>
                    <li className="sub-menu-item"> <Link to="/example1">Example 2</Link></li>
                    <li className="sub-menu-item"> <Link to="/example1">Example 3</Link></li>

                </ul>
             </a>
            
             
            </li>
            <li className="menu-item">
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
      
    </nav>
     </>
      
    )
}