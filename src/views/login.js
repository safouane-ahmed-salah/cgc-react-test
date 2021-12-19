import { Button, Form, Input, message, Typography } from "antd";
import { useUserContext } from "../UserProvider";
import users from '../users.json';

export function Login() {
    const [user, setUser] = useUserContext();
    
    function submit(data){
        var user = users.find(user=> user.username==data.username && user.password==data.password);        
        user ? setUser(user) : message.error('Wrong Username or Password');
    }


    return <div>
        <Typography.Title style={{textAlign:'center'}}>Login to CGC Test</Typography.Title>
        <Form labelCol={{ span: 2 }} onFinish={submit}>
            <Form.Item name="username" rules={[{required:true, message: 'Username Can\'t be empty'}]} label="Username"><Input /></Form.Item>
            <Form.Item name="password" rules={[{required:true, message: 'Password Can\'t be empty'}]} label="Password"><Input.Password /></Form.Item>
            <Form.Item style={{ textAlign: 'right' }}><Button htmlType="submit" type="primary">Login</Button></Form.Item>
        </Form>
    </div>
}