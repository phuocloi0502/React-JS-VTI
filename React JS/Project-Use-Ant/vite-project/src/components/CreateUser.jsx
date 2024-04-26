import { Form, Input, Button, Alert, Space,Spin } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";
import { UploadOutlined } from '@ant-design/icons'
export const CreateUser = () => {
    const url = `https://65a147d0600f49256fb154ce.mockapi.io/users`;
    const [formData, setFormData] = useState({
        username: "",
        fullname: "",
        phone: "",
        address: "",
        avatar: "",
    });
    const [avatar, setAvatar] = useState();
    const [isSpinning,setIsSpinning] =useState(false);
    const [showAlert, setShowAlert] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name == "avatar") {
            const file = e.target.files[0];
            file.preview = URL.createObjectURL(file);
            setAvatar(file);
            setFormData(pre => ({
                ...pre,
                avatar: file.preview
            }))

        } else {
            setFormData(prevState => ({
                ...prevState,

                [name]: value,
            }));
        }

    }

    console.log(formData)
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    }
    const createUser = () => {
        setIsSpinning(true);
        console.log(JSON.stringify(formData))  
        fetch(url, options)
            .then(response => response.json())
            .then((data) => {
                setIsSpinning(false)
                setShowAlert(true);

                console.log("sucess")
            })
            .catch(error => console.error(error));
    }

    return (
        <div style={{ textAlign: "center" }}>
              <Spin style={{  zIndex: "1233" }} tip="Loading" size="large" fullscreen={true} spinning={isSpinning}>
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


                                <Button size="small" type="primary" onClick={()=>(setShowAlert(false))}>
                                    Close
                                </Button>

                            </Space>
                        }

                    />
                )
            }
            <h1 style={{ marginBottom: "20px" }}>Create user</h1>

            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                    margin: "auto"
                }}
                initialValues={{
                    remember: true,
                }}

            >
                <Form.Item
                    label="Username"

                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input
                        name="username"
                        value={formData.username}
                        onChange={handleChange} />
                </Form.Item>
                <Form.Item
                    label="Fullname"

                    rules={[
                        {
                            required: true,
                            message: 'Please input your fullname!',
                        },
                    ]}
                >
                    <Input
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange} />
                </Form.Item>
                <Form.Item
                    label="Phone"

                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone!',
                        },
                    ]}
                >
                    <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange} />
                </Form.Item>
                <Form.Item
                    label="Address"

                    rules={[
                        {
                            required: true,
                            message: 'Please input your addres!',
                        },
                    ]}
                >

                    <Input
                        name="address"
                        value={formData.address}
                        onChange={handleChange} />
                </Form.Item>
                <Form.Item
                    label="Avatar"

                    rules={[
                        {
                            // required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <input
                        name="avatar"
                        type="file"
                        accept="image/*"
                        onChange={handleChange} />

                    {
                        avatar && (
                            <img src={avatar.preview} />
                        )
                    }



                </Form.Item>
                <Button type="primary" onClick={createUser} htmlType="submit">
                    Create
                </Button>
            </Form>

        </div>
    )
}