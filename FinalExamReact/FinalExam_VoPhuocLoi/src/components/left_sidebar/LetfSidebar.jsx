import { Menu } from "../Menu/Menu"
import "./leftSidebar.scss"
import { changeUserIdCurrent } from "../../redux/slide/userSlice";
import { useSelector } from "react-redux";

export const LeftSidebar = () => {
    //get user current
    const userNameCurrent = localStorage.getItem('userNameCurrent');
    return (
        <div className="left-sidebar">
            <div className="wrapper-sidebar">
                <h4>Welcome {userNameCurrent} !</h4>
                <Menu />
            </div>

        </div>
    )
}