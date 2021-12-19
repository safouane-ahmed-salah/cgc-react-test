import { Avatar, List, Skeleton, Typography } from "antd";
import { useState } from "react";
import { useParams } from "react-router";

export function SinglePostPage(){
    const {id} = useParams();
    const [data, setData] = useState(null);
    const [comments, setComments] = useState([]);

    useState(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/'+ id).then(res => res.json()).then(setData);
        fetch('https://jsonplaceholder.typicode.com/posts/'+ id + '/comments').then(res => res.json()).then(setComments);
    }, []);

    if(!data) return <Skeleton active />;

    return <div>
        <Typography.Title>{data.title}</Typography.Title>
        <Typography.Paragraph>{data.body}</Typography.Paragraph>
        <Typography.Title level={4}>Comments: </Typography.Title>
        <List 
            dataSource={comments}
            renderItem={(item)=> <List.Item key={item.id}>
            <List.Item.Meta 
                avatar={<Avatar size="large">U</Avatar>}
                title={item.name}
                description={item.body}
            />
            </List.Item>} 
        />
    </div>
}