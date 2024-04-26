import { Form, Input, Button,Upload } from "antd";
import { useState } from "react";
import {UploadOutlined} from '@ant-design/icons'
export const CreateUser = () => {
    const url = `https://65a147d0600f49256fb154ce.mockapi.io/users`;
    const [formData, setFormData] = useState({
        username: "",
        fullname: "",
        phone: "",
        address: "",
        avatar: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState, [name]: value,
        }));
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    }
    const createUser = () => {
        console.log(JSON.stringify(formData))
        fetch(url, options)
            .then(response => response.json())
            .then(data => console.log(data, "success"))
            .catch(error => console.error(error));
    }

    return (
        <div style={{ textAlign: "center" }}>
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
                     <Upload
                        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                        listType="picture"
                       // defaultFileList={[...fileList]}
                        className="upload-list-inline"
                    >
                        <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                    <Input
                        name="avatar"
                        value={formData.avatar}
                        onChange={handleChange} />
                </Form.Item>
                <Button type="primary" onClick={createUser} htmlType="submit">
                    Create
                </Button>
            </Form>

        </div>
    )
}