import { createContext, useContext, useState } from "react";

export const UserContext = createContext();
export function useUserContext(){
    return useContext(UserContext);
}

export function UserProvider({children}){
  const userState = useState(); 

  return <UserContext.Provider value={userState}>
    {children}
  </UserContext.Provider>
}