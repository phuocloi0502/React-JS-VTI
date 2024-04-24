import "../css/User.css"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserForm } from "./UserForm";
import useFetch from "../customHooks/useFetch"
import { Table, Avatar, Space, Button, Modal } from "antd"
import {
    DeleteOutlined,
    EditOutlined
} from '@ant-design/icons';



export const User = () => {
    const url = `https://65a147d0600f49256fb154ce.mockapi.io/users`;
    const [isChange, setIsChange] = useState(true)
    const [data, setData] = useFetch('', url, isChange);
    const [isModalOpen, setCloseModal] = useState(false);
    const [item, setItem] = useState(null)


    const columns = [
        {
            title: 'Avatar',
            dataIndex: 'avatar',
            key: 'avartar',
            render: (_, record) => {

                return (
                    <div key={record.id}>
                        <Avatar  src={_} />

                    </div>
                );
            },
        },
        {
            title: 'User Name',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullname',
            key: 'fullname',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, props) => (
                <Space size="middle">
                    <Link to={`/userdetail/${props.id}`}>
                        <Button type="primary"  >
                            Detail
                        </Button>
                    </Link>


                    <Button type="primary" danger onClick={() => handleDelete(props)}>
                        <DeleteOutlined />
                    </Button>
                </Space>


            ),
        },
    ];
    const handleCancel = () => {
        setCloseModal(!isModalOpen);
        setItem(null);
    }
    const handleOk = () => {
        fetch(`${url}/${item?.id}`, { method: 'DELETE' })
            .then(() => {
                setItem(null);
                // close modal
                setCloseModal(!isModalOpen);
            })
            .then(() => {
                // load list user
                setIsChange(!isChange);
            });
    }
    const handleDelete = (props) => {
        setCloseModal(!isModalOpen);
        console.log(props, 'props');
        setItem(props);
    };

    const handlDetail = (props) => {
        console.log(props);
        <Link to={`/userdetail/${props.id}`}></Link>
    }


    return (
        <div className="User">


            <div className="User-Content">
                <h1>List User</h1>
                {/* <table className="table-user">
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

                </table> */}

                <Table dataSource={data} columns={columns} />;
                <Modal
                    title="Delete item user"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <p>
                        are u sure delete item{' '}
                        <span style={{ color: 'red' }}>{item?.fullname}</span> ?
                    </p>
                </Modal>
            </div>
            <UserForm />
        </div>
    );
}