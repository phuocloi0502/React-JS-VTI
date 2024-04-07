import '../css/head.css'
export const Head = () => {
    return (
        <div>
            <div className="head">
                <div className="head-logo">
                    <div className="head-logo-icon">
                        <h5>B</h5>
                    </div>
                    <div className="head-logo-title">Pricing example</div>
                </div>
                <div className="head-menu">
                    <ul className="main-menu">
                        <li className="menu-item">Features</li>
                        <li className="menu-item">Enterprise</li>
                        <li className="menu-item">Support</li>
                        <li className="menu-item">Pricing</li>
                        <li className="menu-item">Dark-Mode</li>
                    </ul>
                </div>

            </div>
            <div><hr /></div>
        </div>
    )
}