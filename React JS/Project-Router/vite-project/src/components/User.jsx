import "../css/User.css"
import { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { UserForm } from "./UserForm";



export const User = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        let flag = false;
        fetch("https://65a147d0600f49256fb154ce.mockapi.io/users")
            .then((resStr) => {
                return resStr.json();
            })
            .then((res) => {
                if (!flag) {
                    setData(res);
                }
            })
            .catch((err) => {
                console.log('err', err);
            });
        return () => { flag = true }
    }, [])
    console.log("Data: ", data);

    return (
        <div className="User">

          
            <div className="User-Content">
                <h1>List User</h1>
                <table className="table-user">
                    <thead>
                        <tr>
                            <th>
                                ID
                            </th>
                            <th>
                                Avatar
                            </th>
                            <th>
                                Username
                            </th>
                            <th>
                                Fullname
                            </th>
                            <th>
                                Address
                            </th>
                            <th>
                                Phone
                            </th>
                            <th>
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((mydata,) => (

                            <tr>
                                <td key={mydata.id}>
                                    {mydata.id}
                                </td>
                                <td >
                                    <img src={mydata.avatar} />

                                </td>
                                <td>
                                    {mydata.username}
                                </td>
                                <td>
                                    {mydata.fullname}
                                </td>
                                <td>
                                    {mydata.address}
                                </td>
                                <td>
                                    {mydata.phone}
                                </td>
                                <td >
                                    <div className="user-action" >
                                        <FiEdit className="edit-action" />
                                        <MdDeleteForever className="delete-action" />
                                    </div>

                                </td>
                            </tr>
                        ))

                        }

                    </tbody>

                </table>
            </div>
            <UserForm />
        </div>
    );
}