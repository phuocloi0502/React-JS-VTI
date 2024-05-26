import React from 'react';
import {
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
    Card
} from 'antd';
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import './signup.scss'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getAll, createAccount } from '../../redux/slide/userSlice'
import { toast } from "react-toastify";



const SignUp = () => {

    const navigate = useNavigate();
    const listUsers = useSelector((state) => state.dataUser.dataApi);
    const loading = useSelector((state) => state.dataUser.loading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAll());

    }, []);
    const onFinish = async (values) => {

        const body = {
            username: values.username,
            email: values.email,
            password: values.password
        }





        try {
            const check = listUsers.some(item => {
                return item.username === values.username;
            })

            if (!check) {
                dispatch(createAccount(body));
                if (!loading) {
                    localStorage.setItem('isLogin', true)
                    toast.success("Sucess !!!");
                    navigate("/");
                }

            } else {
                toast.error('User is existed !')
            }

        } catch (error) {
            console.log("error::::", error);
        }
    };
    return (
        <div className="sign-page">
            <Card className="sign-card" title="SIGN UP" >
                <Form
                    name="register"
                    onFinish={onFinish}
                    style={{ maxWidth: 600 }}
                    scrollToFirstError
                >
                    <Form.Item
                        name="username"
                        label="Username"
                        rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The new password that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <div className='button-sign-up'>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                        <Link to={'/login'}>
                            <Button type="primary" danger>
                                Cancel
                            </Button></Link>

                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default SignUp;