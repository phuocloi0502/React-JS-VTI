import "../css/User.css"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserForm } from "./UserForm";
import { CreateUser } from "./CreateUser";
import useFetch from "../customHooks/useFetch"
import { Table, Avatar, Space, Button, Modal, Flex, Spin } from "antd"
import {
    DeleteOutlined,
    EditOutlined
} from '@ant-design/icons';



export const User = () => {
    const url = `https://65a147d0600f49256fb154ce.mockapi.io/users`;
    const [isChange, setIsChange] = useState(true)
    const [isSpinning, setIsSpinning] = useState(false);
    const [data, setData] = useFetch('', url, isChange);
    const [isModalDeleteOpen, setCloseModalDelete] = useState(false);
    const [isModalCreateOpen, setCloseModalCreate] = useState(false);
    const [item, setItem] = useState(null)


    const columns = [
        {
            title:"ID",
            dataIndex:'id',
            key:'id',
            sorter: (a, b) => a.id-b.id,
            defaultSortOrder: 'descend',
        },
        {
            title: 'Avatar',
            dataIndex: 'avatar',
            key: 'avartar',
            render: (_, record) => {

                return (
                    <div key={record.id}>
                        <Flex vertical={"column"} justify={"center"} align={"center"}>
                            <Avatar src={_} />
                            <p>{record.fullname}</p>
                        </Flex>


                    </div>
                );
            },
        },
        {
            title: 'User Name',
            dataIndex: 'username',
            key: 'username',
        },
        // {
        //     title: 'Full Name',
        //     dataIndex: 'fullname',
        //     key: 'fullname',
        // },
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
        setItem(null);
        setCloseModalDelete(false)
    }
    const handleOk = () => {

        setIsSpinning(true);
        fetch(`${url}/${item?.id}`, { method: 'DELETE' } )
            .then(() => {
                setItem(null);
                // close modal
                setCloseModalDelete(!isModalDeleteOpen);
            })
            .then(() => {
                // load list user
                setIsSpinning(false);
                setIsChange(!isChange);
            });
    }
    const handleDelete = (props) => {
        setCloseModalDelete(!isModalDeleteOpen);
        console.log(props, 'props');
        setItem(props);
    };

    const handleCreate = () => {
        setCloseModalCreate(!isModalCreateOpen);
    }



    return (
        <div className="User">
            <div className="User-Content">

                <h1>List User</h1>
                <div
                    style={{ textAlign: "right", margin: "10px" }}
                    onClick={handleCreate}

                >
                    <Link to={"/user/add"}>
                        <Button type="primary"  >
                            + Create user
                        </Button>
                    </Link>

                </div>
                {
                    data === null ? (<Spin tip="Loading" size="large" fullscreen={true} >
                        <div className="content" />
                    </Spin>) : (<Table dataSource={data} columns={columns} size="small" />)
                }
                <Modal
                    title="Delete item user"
                    open={isModalDeleteOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <p>
                        Are u sure delete item{' '}
                        <span style={{ color: 'red' }}>{item?.fullname}</span> ?
                    </p>
                </Modal>


                <Spin style={ { zIndex: "1233" }} tip="Loading" size="large" fullscreen={true} spinning={isSpinning}>
                    <div className="content" />

                </Spin>
            </div>
            {/* <UserForm /> */}
        </div>
    );
}