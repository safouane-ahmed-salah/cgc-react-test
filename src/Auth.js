import { Navigate } from "react-router";
import { useUserContext } from "./UserProvider";

export function RequiredAuth({children}){
    const [user] = useUserContext();

    if(!user) return <Navigate to="/login" />;

    return children;
}

export function NoAuth({children}){
    const [user] = useUserContext();
    if(user) return <Navigate to="/" />;

    return children;
}   