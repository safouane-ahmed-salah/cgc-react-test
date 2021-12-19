import { Button } from "antd";
import { useUserContext } from "./UserProvider";

export default function LogoutButton(){
    const [user, setUser] = useUserContext();
    if(!user) return null;

    function logout(){
        setUser(null);
    }

    return <Button onClick={logout}>Logout</Button>
}