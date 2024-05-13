import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios"
import { Form, Input, Button, Alert, Space, Spin } from "antd";
import { UploadOutlined } from '@ant-design/icons'
import "../css/UserForm.css"
import { UserForm } from "./UserForm";
import useFetch from "../customHooks/useFetch";
export const EditUser = () => {

    const url = `https://65a147d0600f49256fb154ce.mockapi.io/users`;
    const { id } = useParams();
    const [data, setData] = useFetch(id, url);
    const [isSpinning, setIsSpinning] = useState(true);
    const [showAlert, setShowAlert] = useState(false);
    useEffect(() => {
        Object.keys(data).length == 0 ? (setIsSpinning(!isSpinning)) : (<></>);
    }, [data])

    console.log("data: ", data)

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name == "avatar") {
            const file = e.target.files[0];
           
            setData(pre => ({
                ...pre,
                avatar: URL.createObjectURL(file)
            }))
        }
        else {
            setData(pre => ({
                ...pre,
                [name]: value,
            }));
        }
    }

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }
    const updateUser = () => {
        let myUrl = `https://65a147d0600f49256fb154ce.mockapi.io/users/${id}`
        //call api use axios
        if (Object.keys(data).length > 4) {
            setIsSpinning(true);
            axios.put(myUrl,data)
            .then(res=>{
                setIsSpinning(false)
                setShowAlert(true);
            })
            .catch(err =>{
                console.error(error)
            })
        }

        // if (Object.keys(data).length > 4) {
        //     setIsSpinning(true);
        //     fetch(myUrl, options)
        //         .then(response => response.json())
        //         .then((data) => {
        //             setIsSpinning(false)
        //             setShowAlert(true);
        //         })
        //         .catch(error => console.error(error));
        // }

    }

    return (
        <div style={{ textAlign: "center" }}>
            <Spin style={{ zIndex: "1233" }} tip="Loading" size="large" fullscreen={true} spinning={isSpinning}>
                <div className="content" />

            </Spin>
            {
                showAlert && (
                    <Alert
                        message="Updated"
                        type="success"
                        description={data.username}
                        showIcon
                        action={
                            <Space direction="vertical">
                                <Link to="/user">
                                    <Button size="small" type="primary">
                                        View List
                                    </Button>
                                </Link>


                                <Button size="small" type="primary" onClick={() => (setShowAlert(false))}>
                                    Close
                                </Button>

                            </Space>
                        }

                    />
                )
            }
            <UserForm
                data={data}
                handleInput={handleChange}
                handleAction={updateUser}
                avatar={data.avatar}
                text={"Update"}
                required={false}
            >
            </UserForm>
        </div>
    )
}