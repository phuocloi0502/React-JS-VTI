import { Form, Input, Button, Alert, Space, Spin } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";
import { UploadOutlined } from '@ant-design/icons'
import "../css/UserForm.scss"

import { UserForMik } from "./UserForMik";
import { date } from "yup";
export const CreateUser = () => {
    const url = `https://65a147d0600f49256fb154ce.mockapi.io/users`;
    const [formData, setFormData] = useState({

    });
    const data = {
        username: '',
        fullname: '',
        phone:'',
        address: '',
    }
 
    const [avatar, setAvatar] = useState();
    const [isSpinning, setIsSpinning] = useState(false);
    const [showAlert, setShowAlert] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name == "avatar") {
            const file = e.target.files[0];
            file.preview = URL.createObjectURL(file);
            setAvatar(file.preview);
            setFormData(pre => ({
                ...pre,
                avatar: file.preview
            }))


        } else {
            setFormData(pre => ({
                ...pre,

                [name]: value,
            }));
        }

    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    }
    const createUser = () => {
        console.log("Form data: ", formData)
        if (Object.keys(formData).length > 4) {
            setIsSpinning(true);
            fetch(url, options)
                .then(response => response.json())
                .then((data) => {
                    setIsSpinning(false)
                    setShowAlert(true);
                })
                .catch(error => console.error(error));
        }

    }

    return (
        <div style={{ textAlign: "center" }}>
            <Spin style={{ zIndex: "1233" }} tip="Loading" size="large" fullscreen={true} spinning={isSpinning}>
                <div className="content" />

            </Spin>
            {
                showAlert && (
                    <Alert
                        message="Created"
                        type="success"
                        description={formData.username}
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
        <UserForMik data={data} type={'CREATE'}/>
            

        </div>
    )
}