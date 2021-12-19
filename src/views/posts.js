import { Avatar, List } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

export function PostsPage(){
    const [data, setData] = useState([]);

    useState(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(setData);
    }, []);

    return <List
        dataSource={data}
        renderItem={(item)=> <List.Item key={item.id}>
            <List.Item.Meta 
                avatar={<Avatar size="large" style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>}
                title={<Link to={"/"+ item.id}>{item.title}</Link>}
                description={item.body}
            />
        </List.Item>}
    />
}