import { Link, Outlet } from 'react-router-dom';
import "../css/Menu.css"
export const Menu = () => {
    return (
        <nav>    
            <ul className="main-menu">
                <li className="menu-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="menu-item">
                    <Link to="/user">User</Link>
                </li>
                <li className="menu-item">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
          
        </nav>


    );
}