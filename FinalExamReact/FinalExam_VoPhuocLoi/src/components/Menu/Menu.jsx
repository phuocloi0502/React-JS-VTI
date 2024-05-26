import "./menu.scss"
import { Link, useNavigate } from "react-router-dom"
import { FaHome, FaUser, FaSignInAlt } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { changeUserId } from "../../redux/slide/userSlice";
export const Menu = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const handleSignOut = () => {
        dispatch(changeUserId(-1))
        navigate('/login')
        localStorage.removeItem('isLogin')
        localStorage.removeItem('idCurrent')
        localStorage.removeItem('userNameCurrent');
    }
    const handleMyUser = () => {

        dispatch(changeUserId(localStorage.getItem('idCurrent')));

    }

    return (
        <div className="wrapper-menu">
            <ul className="main-menu">
                <li className="item" onClick={handleMyUser}>
                    <div><FaUser /></div>
                    <div >
                        My User
                    </div>
                </li>
                <li className="item" onClick={handleSignOut}>
                    <div><FaSignInAlt /></div>
                    <div >Sign out</div>
                </li>
            </ul>
        </div>
    )
}