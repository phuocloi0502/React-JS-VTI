import { Button, Card, Checkbox, Form, Input } from "antd";
import "./Login.css";
import { getAll, changeUserIdCurrent } from '../../redux/slide/userSlice'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import userService from '../../services/userService';
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const listUsers = useSelector((state) => state.dataUser.dataApi);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAll());

    }, []);


    const onFinish = async (values) => {

        try {

            listUsers.map(item => {
                if (item.username == values.username && item.password == values.password) {
                    localStorage.setItem('idCurrent', item.id);
                    localStorage.setItem('userNameCurrent', item.username);
                }
            });


            const check = listUsers.some(item => {
                return item.username == values.username && item.password == values.password;
            })
            if (check) {
                toast.success('login thanh cong')
                localStorage.setItem('isLogin', true)
                navigate("/");

            } else {
                toast.error('login that bai')
            }
            // navigate("/");
        } catch (error) {
            console.log("error::::", error);
        }
    };

    return (
        <div className="login-page">
            <Card className="login-card" title="LOGIN" style={{ width: 400 }}>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Username!",
                            },
                        ]}
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Username"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Password!",
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>


                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            Log in
                        </Button>
                        Or <Link to='/signup' >register now!</Link>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default LoginPage;
