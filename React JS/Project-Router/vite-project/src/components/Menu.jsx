import { Link, Outlet } from 'react-router-dom';
import "../css/Menu.css"
export const Menu = () => {
    return (
        <div>
            <ul className="main-menu">
                <li className="menu-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="menu-item">
                    <Link to="/help">Help</Link>
                </li>
                <li className="menu-item">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <Outlet></Outlet>
        </div>
    );
}