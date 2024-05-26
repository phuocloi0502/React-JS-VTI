import './detailCard.scss'
import { MyForm } from "../my-form/MyForm.jsx";
import { Card, Modal, Avatar, Button } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { getById } from '../../redux/slide/userSlice';
import { changeStateUpdateModal } from '../../redux/slide/modalSlice';
import { useState, useEffect } from 'react';

export const DetailCard = () => {
    const dispatch = useDispatch();

    const stateModal = useSelector((state) => state.modalSlice.updateModal);

    // get user by id
    const item = useSelector((state) => state.dataUser.dataByIdApi);


    // get state
    const loading = useSelector((state) => state.dataUser.loading);


    //get all

    // get id
    const detailId = useSelector((state) => state.dataUser.userId);
    const deleteId = useSelector((state) => state.dataUser.deleteId);



    useEffect(() => {
        if (detailId !== -1) {
            dispatch(getById(detailId));
        }
    }, [detailId]);

    const { Meta } = Card;

    return (
        <div className='user-detail'>
            <Modal
                footer={null}
                open={stateModal}
            >
                {/* My Form*/}
                <MyForm data={item} type={"UPDATE"} />

            </Modal>

            <Card
                loading={loading}
                title={"User Detail"}
            >

                {
                    detailId == -1 || detailId == deleteId ? (<></>) : (
                        <div className='user-detail'>
                            <div className='row-1'>
                                <div className='wrapper-avatar'>
                                    <Meta
                                        avatar={<Avatar src={item?.avatar}
                                            className='my-avatar' />}
                                    />
                                </div>

                                <div className='infor-1'>
                                    <div className='item-info'>
                                        <span>User Name: </span>
                                        {item.username}
                                    </div>
                                    <div className='item-info'>
                                        <span>Full name: </span>
                                        {item.fullname}
                                    </div>
                                </div>
                            </div>
                            <div className='row-2'>
                                <div className='item-info'>
                                    <span>Email: </span>
                                    {item.email}
                                </div>
                                <div className='item-info'>
                                    <span>Address: </span>
                                    {item.address}
                                </div>
                                <div className='item-info'>
                                    <span>Phone: </span>
                                    {item.phone}
                                </div>

                            </div>
                            <div className='button-style'>
                                <Button type="primary" onClick={() => {

                                    dispatch(changeStateUpdateModal(true))
                                }} >
                                    Edit
                                </Button>
                            </div>
                        </div>
                    )
                }


            </Card>
        </div>
    )
}