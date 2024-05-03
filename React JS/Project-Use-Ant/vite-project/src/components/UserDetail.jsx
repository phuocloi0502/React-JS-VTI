import { useParams } from "react-router-dom"
import { useState,useEffect } from "react";
import { Descriptions, Avatar, Card, Image, Row, Col } from "antd";
import useFetch from "../customHooks/useFetch";
import "../css/UserDetail.css"
export const UserDetail = () => {
  const { id } = useParams();
  const url = `https://65a147d0600f49256fb154ce.mockapi.io/users`;
  const [data, setData] = useFetch(id, url);
  const [loading, setLoading] = useState(true);
  // data && (setLoading(!loading));
  useEffect(()=>{
    Object.keys(data).length ==0  ?(setLoading(!loading)):(setLoading(loading));
    console.log("second")
  },[data])
  const { Meta } = Card;
  console.log("first")
  return (
    <div className="UserDetail">
      <Row gutter={16}>
        <Col span={8}>
          <Card
            style={{
              width: 500,           
              marginTop: 16,
            }}
             loading={loading}
          >
            <Meta
              avatar={<Avatar src={data?.avatar} />}
              title={data?.fullname}
              description={data?.address}
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}