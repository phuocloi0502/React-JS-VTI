import { Card } from './Card.jsx'
import '../css/content.css'
export const MainContent = ({ data }) => {

    return (
        <div className='main-content'>

            {
                data.length > 0 ? (
                    <>
                        {

                            data.map(
                                (item) => (

                                    <Card

                                        type={item.type}
                                        price={item.price}
                                        desc={item.desc}
                                        action={item.action}
                                    />


                                )
                            )
                        }
                    </>

                ) : (
                    <h1>No Data</h1>
                )
            }
        </div>
    )
}