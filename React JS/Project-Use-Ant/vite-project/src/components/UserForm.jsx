import "../css/UserForm.css"
import { Input, Button } from "antd"
import { Link } from "react-router-dom"
import { Form, Field, Formik, ErrorMessage } from 'formik';
import { editUserSchema } from "./Formik/validate"
export const UserForm = ({ data, handleInput, handleAction, avatar, text, required }) => {
   return (

      <Formik
         initialValues={data}
         validationSchema={editUserSchema}
         onSubmit={(values) => {
            // handleAction
         }}
      >
         {({ errors, touched }) => (
            <Form>
               <div>
                  <label htmlFor="name">name</label>
                  <br />
                  <Field id="name" name="name" />
                  {errors.name && touched.name ? (
                     <ErrorMessage
                        name="name"
                        render={(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                     />
                  ) : null}

                  <br />
                  <br />
               </div>
               <div>
                  <label htmlFor="phone">phone</label>
                  <br />
                  <Field id="phone" name="phone" />
                  {errors.phone && touched.phone ? (
                     <ErrorMessage
                        name="phone"
                        render={(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                     />
                  ) : null}
                  <br />
                  <br />
               </div>
               <div>
                  <label htmlFor="address">address</label>
                  <br />
                  <Field id="address" name="address" />
                  {errors.address && touched.address ? (
                     <ErrorMessage
                        name="address"
                        render={(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                     />
                  ) : null}
                  <br />
                  <br />
               </div>
               <button type="submit">Submit</button>
            </Form>
         )}
         {/* {({ errors, touched }) => (
            <Form
               className="MyForm"
               name="basic"
               labelCol={{
                  span: 8,
               }}
               wrapperCol={{
                  span: 8,
               }}

               initialValues={{
                data
               }}

            >
               <h1 style={{ marginBottom: "20px" }}>{text} user</h1>

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
                     value={data.username}
                     onChange={handleInput}
                     required />
                  {errors.username && touched.username ? (
                     <ErrorMessage
                        name="username"
                        render={(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                     />
                  ) : null}
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
                     value={data.fullname}
                     onChange={handleInput}
                     required />
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
                     value={data.phone}
                     onChange={handleInput}
                     required />
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
                     value={data.address}
                     onChange={handleInput}
                     required />
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
                  <input
                     name="avatar"
                     type="file"
                     accept="image/*"
                     onChange={handleInput}
                     required={required}
                  />

                  {
                     avatar && (
                        <img style={{ width: "100px", height: "100px" }} src={avatar} />
                     )
                  }
               </Form.Item>
               <Button type="primary" onClick={handleAction} htmlType="submit">
                  {text}
               </Button>
               <Link to="/user">
                  <Button danger size="small" type="primary">
                     Cancel
                  </Button>
               </Link>

            </Form>
         )} */}

      </Formik>
     

   )
}