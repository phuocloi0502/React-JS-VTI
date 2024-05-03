import "../css/UserForm.css"
import { Form, Input, Button} from "antd"
import { Link } from "react-router-dom"
export const UserForm = ({data, handleInput,handleAction,avatar,text}) => {
   return (
      <Form
         className="MyForm"
         name="basic"
         labelCol={{
            span: 8,
         }}
         wrapperCol={{
            span: 16,
         }}

         initialValues={{
            remember: true,
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
               onChange={ handleInput}
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
               />

            {
               avatar && (
                  <img style={{ width: "100px", height: "100px" }} src={avatar} />
               )
            }
         </Form.Item>
         <Button type="primary" onClick={ handleAction} htmlType="submit">
            {text}
         </Button>
         <Link to="/user">
            <Button  danger size="small" type="primary">
               Cancel
            </Button>
         </Link>

      </Form>
   )
}