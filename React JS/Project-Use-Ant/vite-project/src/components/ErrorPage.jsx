import { Link } from 'react-router-dom';
import { FaFaceSadCry } from "react-icons/fa6";
import "../css/ErrorPage.css"
export const ErrorPage=()=>{
    return(
        <div className='error-page'>
            <FaFaceSadCry className='error-icon'/>
            <div>404</div>
            <h1>Page Not Found</h1>
            <button type="button"><Link to="/">Go to home</Link></button>
        </div>
    );
}