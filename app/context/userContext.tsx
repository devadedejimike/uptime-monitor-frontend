import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../lib/api";
import { ReactNode } from "react";

type User = {
    id: number
    email: string,
}
type userContextType = {
    user: User | null,
    setUser: (user: User | null) => void
}

export const userContext = createContext<userContextType | null>(null);

export const UserProvider = ({children}: {children: ReactNode}) => {
    const [user, setUser] = useState<User | null>(null)

     useEffect(() => {
       const fetchUser = async() => {
        try {
            const data = await api.get('/auth/me')
            setUser(data)
        } catch (error) {
            console.log("Error fetching user", error)
        }
       }
       fetchUser();
    },[])
    return(
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(userContext);

    if(!context) {
        throw new Error('useUser must be used within a userProvider')
    }
    return context;

}