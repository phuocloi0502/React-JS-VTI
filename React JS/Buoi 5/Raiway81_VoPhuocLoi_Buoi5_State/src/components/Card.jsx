import "../css/card.css"
export const Card = ({ type, price, desc, action }) => {
    return (
        <div className="card">
            <div className="card-head">{type}</div>
            <div className="card-main">
                <div className="card-main-price">
                    <span className="price">{price}</span>
                    <span className="month"> /mo</span>
                </div>
                <div className="card-main-desc">
                    <ul>
                        {
                            desc.map(
                                (item) => (
                                    <li>{item}</li>
                                )
                            )
                        }
                        {/* <li>10 users included</li>
                        <li>12 GB of storage</li>
                        <li>Email support</li>
                        <li>Help center access</li> */}
                    </ul>
                </div>

                <div className="card-main-button">
                    <button type="button"> {action}</button>
                </div>
            </div>
        </div>
    )
}