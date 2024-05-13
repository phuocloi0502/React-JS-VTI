import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Descriptions, Avatar, Card, Image, Row, Col, Button } from "antd";
import {
  DeleteOutlined,
  EditOutlined
} from '@ant-design/icons';
import useFetch from "../customHooks/useFetch";
import "../css/UserDetail.scss"
export const UserDetail = () => {
  const { id } = useParams();
  const url = `https://65a147d0600f49256fb154ce.mockapi.io/users`;
  const [data, setData] = useFetch(id, url);
  const [loading, setLoading] = useState(true);
  // data && (setLoading(!loading));
  useEffect(() => {
    Object.keys(data).length == 0 ? (setLoading(!loading)) : (setLoading(loading));
    console.log("second")
  }, [data])
  const { Meta } = Card;
  const items = [
    {
      key: '1',
      label: 'UserName',
      children: data?.username,
    },
    {
      key: '2',
      label: 'FullName',
      children: data?.fullname,
    },
    {
      key: '3',
      label: 'Telephone',
      children: '1810000000',
    },
    {
      key: '4',
      label: 'Address',
      children: data?.address,
    },
  ];
  return (
    <div className="UserDetail">
      <Card
        loading={loading}
        title={"User Infomation"}
      >
        <Meta
          avatar={<Avatar src={data?.avatar} />}
        />
        <Descriptions items={items} />
        
      </Card>
      <div className="detail-button">
          <Link to="/user">
            <Button danger size="small" type="primary">
              Back
            </Button>
          </Link>
          <Link to={`/user/edit/${id}`}>
            <Button type="primary" style={{ background: "green" }} >
              Edit

            </Button>
          </Link>
        </div>
    </div>
  )
}