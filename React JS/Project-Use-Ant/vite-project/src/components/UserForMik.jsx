import React from 'react';
import { useFormik, ErrorMessage, Formik, Field, Form } from 'formik';
import "../css/UserForm.scss";
import axios from "axios"
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

import { editUserSchema } from "./Formik/validate";
import { EditUser } from './handleForm/Edit'

export const UserForMik = ({ data,type }) => {
    let navigate = useNavigate();

    return (
        <Formik
            initialValues={data}
            enableReinitialize={true}
            validationSchema={editUserSchema}
            onSubmit={(values) => {

                // call api
                const dataList = {
                    username: values.username,
                    fullname: values.fullname,
                    phone: values.phone,
                    address: values.address,
                }

                let myUrl = `https://65a147d0600f49256fb154ce.mockapi.io/users/${values.id}`
                //call api use axios
                if(type=='UPDATE')
                {
                    axios.put(myUrl, dataList)
                    .then(res => {
                       navigate('/user')
                    })
                    .catch(err => {
                        console.error(err)
                    })
                } else if(type=='CREATE') {
                    let myUrlCreate = `https://65a147d0600f49256fb154ce.mockapi.io/users/`
                    axios.post(myUrlCreate, dataList)
                    .then(res => {
                       navigate('/user')
                    })
                    .catch(err => {
                        console.error(err)
                    })
                }

            }}  >
            {({ errors, touched }) => (
                <Form className='MyForm'  >
                    <h1>{type} USER</h1>
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
                        <input type='file'
                        />

                        {/* <img style={{ width: "100px", height: "100px" }} src={data.avatar} /> */}


                    </div>
                    <div>

                        <Button type="primary" htmlType="submit">
                            {type}
                        </Button>
                        <Link to="/user">
                            <Button danger type="primary">
                                Cancel
                            </Button>
                        </Link>

                    </div>


                </Form>
            )}

        </Formik>

    );
};