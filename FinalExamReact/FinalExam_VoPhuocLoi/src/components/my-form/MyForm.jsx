import React, { useState } from 'react';
import { ErrorMessage, Formik, Field, Form } from 'formik';
import "./myform.scss";
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { editUserSchema } from "./validates/validate.ts";

import { useDispatch, useSelector } from 'react-redux';
import { changeStateUpdateModal, changeStateCreateModal } from '../../redux/slide/modalSlice';
import { getAll, deleteById, changeUserId, changeDeleteId, updateUser, createUser, getById } from '../../redux/slide/userSlice'
import { toast } from "react-toastify";
import axios from 'axios';
import { urlApi } from '../../utils/constants.jsx';
import { useEffect } from 'react';



export const MyForm = ({ data, type }) => {
    const navigate = useNavigate();
    const [avatar, setAvatar] = useState();

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.dataUser.loading);
    const listUsers = useSelector((state) => state.dataUser.dataApi);
    useEffect(() => {
        dispatch(getAll());

    }, []);


    return (
        <Formik
            initialValues={data}
            enableReinitialize={true}
            validationSchema={editUserSchema}

            onSubmit={(values) => {
                const body = {
                    username: values.username,
                    fullname: values.fullname,
                    phone: values.phone,
                    address: values.address,
                    avatar: avatar,
                    email: values.email
                }

                if (type == 'UPDATE') {
                    console.log('body update: ', body)

                    // dispatch(updateUser(data.id, body));

                    axios.put(urlApi + data.id, body)
                        .then(response => {
                            dispatch(getAll());
                            dispatch(getById(data.id));
                            toast.success("Updated !!!");
                            dispatch(changeStateUpdateModal(false));
                        });


                } else if (type == 'CREATE') {
                    const check = listUsers.some(item => { return item.username == values.username; })
                    if (!check) {
                        dispatch(createUser(body));
                        toast.success("Created !!!");
                        if (!loading) {
                            dispatch(changeStateUpdateModal(false));
                            dispatch(changeStateCreateModal(false))
                        }
                    } else {
                        toast.error('User is existed !')
                    }


                }

            }} >

            {({ errors, touched }) => (
                <Form className='MyForm'   >
                    <h2 >{type}</h2>
                    <div className="row">
                        <label >User name</label>
                        <Field
                            id="username"
                            name="username"

                        />
                        {errors.username && touched.username ? (
                            <ErrorMessage
                                name="username"
                                render={(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                            />
                        ) : null}
                    </div>
                    <div className="row">
                        <label >Full name</label>
                        <Field
                            id="fullname"
                            name="fullname"

                        />
                        {errors.fullname && touched.fullname ? (
                            <ErrorMessage
                                name="fullname"
                                render={(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                            />
                        ) : null}
                    </div>


                    <div className="row">
                        <label >Email</label>
                        <Field
                            id="email"
                            name="email"

                        />
                        {errors.email && touched.email ? (
                            <ErrorMessage
                                name="email"
                                render={(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                            />
                        ) : null}
                    </div>

                    <div className="row">
                        <label >Address</label>
                        <Field
                            id="address"
                            name="address"

                        />
                        {errors.address && touched.address ? (
                            <ErrorMessage
                                name="address"
                                render={(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                            />
                        ) : null}
                    </div>
                    <div className="row">
                        <label >Phone</label>
                        <Field
                            id="phone"
                            name="phone"

                        />
                        {errors.phone && touched.phone ? (
                            <ErrorMessage
                                name="phone"
                                render={(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                            />
                        ) : null}
                    </div>
                    <div className="row">
                        <label >Avatar</label>
                        <input id="avatar" name="avatar" type="file" onChange={(event) => {
                            setAvatar(URL.createObjectURL(event.currentTarget.files[0]))
                        }} />

                        {
                            !avatar ? (<img style={{ width: "100px", height: "100px" }} src={data.avatar} />)
                                : (<img style={{ width: "100px", height: "100px" }} src={avatar} />)
                        }

                    </div>

                    <div className='button-form'>

                        <Button type="primary" htmlType="submit" >
                            {type}
                        </Button>
                        <Button danger type="primary" onClick={() => {
                            dispatch(changeStateUpdateModal(false));
                            dispatch(changeStateCreateModal(false))
                            setAvatar(null)
                        }}>
                            Cancel
                        </Button>


                    </div>
                </Form>
            )}

        </Formik>

    );
};