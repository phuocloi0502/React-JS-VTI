import logo from './img/Logo-white.png';
import './header.scss'
export const Header = () => {
    return (
        <>
            <div>
                <img src={logo} alt='' />
            </div>
            <div className='title'>
                User Management
            </div>
        </>
    )
}