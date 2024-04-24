import { useParams } from "react-router-dom"
import { Descriptions,Avatar } from "antd";
import useFetch from "../customHooks/useFetch";
export const UserDetail = () => {
    const { id } = useParams();
    const url = `https://65a147d0600f49256fb154ce.mockapi.io/users`;
    const [data, setData] = useFetch(id, url);
    console.log(data)
    let items=[];
    data===null ? items=[] :
    ( items = [
        {
          key: '1',
          label: 'Avatar',
          children:  <Avatar src={data.avatar}/>,
          
        },
        {
          key: '2',
          label: 'User name',
          children: data.username,
        },
        {
          key: '3',
          label: 'Full Name',
          children: data.fullname,
        },
        {
          key: '4',
          label: 'Address',
          span: 2,
          children: data.address,
        },
     
      ]);
    console.log(id);
    return (
        <div>
            {data &&  <Descriptions title="User Info" layout="vertical" items={items} />}
        </div>
    )
}