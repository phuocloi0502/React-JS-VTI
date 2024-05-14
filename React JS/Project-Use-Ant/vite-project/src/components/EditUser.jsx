import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios"
import { Form, Input, Button, Alert, Space, Spin } from "antd";
import { UploadOutlined } from '@ant-design/icons'
import "../css/UserForm.scss"
import { UserForm } from "./UserForm";
import { UserForMik } from "./UserForMik";
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
            <UserForMik data={data}  type={'UPDATE'}/>

        </div>
    )
}