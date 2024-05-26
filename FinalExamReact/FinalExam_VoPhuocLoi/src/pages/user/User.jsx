import './user.scss'
import { getAll, deleteById, changeUserId, changeDeleteId } from '../../redux/slide/userSlice'
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import { Table, Space, Button, Avatar, Spin, Modal } from 'antd';
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
import { MyForm } from '../../components/my-form/MyForm';
import { changeStateCreateModal } from '../../redux/slide/modalSlice';

export const User = () => {
    // dispatch
    const dispatch = useDispatch();

    // useState
    const [showModal, setshowModal] = useState({
        deleteModal: false,
        createModal: false,
    });
    const [deleteId, setDeleteId] = useState();
    const stateModal = useSelector((state) => state.modalSlice.createModal);


    // get data
    const listUsers = useSelector((state) => state.dataUser.dataApi);
    const loading = useSelector((state) => state.dataUser.loading);





    useEffect(() => {
        dispatch(getAll());

    }, []);

    //set user id
    const setUserId = (id) => {
        dispatch(changeUserId(id))
    }

    // delete user
    const handleDelete = (id) => {
        const idCurrent = localStorage.getItem('idCurrent');
        if (idCurrent != id) {
            dispatch(changeDeleteId(id));
            dispatch(deleteById(id));

            setshowModal(pre => ({
                ...pre, deleteModal: false
            }))
            toast.success('Xoa thanh cong !!!')
        } else {
            toast.error('Không thể xóa user đã đăng nhập !!!')
        }


    }

    const myTable = [
        {
            title: "ID",
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id - b.id,
            defaultSortOrder: 'descend',
        },
        {
            title: 'Avatar',
            dataIndex: 'avatar',
            key: 'avartar',
            render: (_, record) => {

                return (
                    <div >
                        <Avatar src={_} />
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
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, props) => (
                <Space size="middle">
                    <Button type="primary" size="small" onClick={() => {
                        setUserId(props.id)
                    }}>
                        <EyeOutlined />
                    </Button>

                    <Button type="primary" danger size="small" onClick={() => {
                        setDeleteId(props.id);
                        setshowModal(pre => ({
                            ...pre, deleteModal: true
                        }))

                    }}>
                        <DeleteOutlined />
                    </Button>
                </Space>
            ),
        },
    ];
    const data = {
        username: '',
        fullname: '',
        phone: '',
        address: '',
        email: '',
        avatar: ''
    }

    return (
        <div className='wrapper-user' >
            {/* Modal new user */}
            <Modal
                footer={null}
                open={stateModal}
            >
                {/* My Form*/}
                <MyForm data={data} type={"CREATE"} />
            </Modal>


            <Modal
                title="Delete item user"
                open={showModal.deleteModal}
                onOk={() => {
                    handleDelete(deleteId)
                }}
                onCancel={() => {
                    setshowModal(pre => ({
                        ...pre, deleteModal: false
                    }))
                }}
            >
                <p>  Are you sure delete ? </p>
            </Modal>



            <div>
                <Button type='link' size='large' onClick={() => {
                    dispatch(changeStateCreateModal(true))
                }}>
                    + New user
                </Button>
            </div>

            <Table
                dataSource={listUsers}
                columns={myTable} size="small"
                pagination={{
                    pageSize: 15,
                }}
                loading={loading}
            />

        </div>
    )
}