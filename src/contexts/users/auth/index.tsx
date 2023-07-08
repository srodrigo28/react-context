import { ReactNode, createContext, useState } from "react";

export type UserProps = {
    name: string
    token: string
}

type AuthContextProps = {
    user: UserProps | null
    login: ( user: UserProps ) => void
    logout: () => void
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({children} : { children : ReactNode }) => {
    const [user, setUser] = useState<UserProps | null>(
        { name: 'Bastiao', token: 'A321A5DFEA' }
    )

    const login = (user: UserProps) => {
        setUser(user)
        console.log(user)
    }

    const logout = () => {
        console.log('logout')
    }

    return (
        <>
            <AuthContext.Provider value={{
                user,
                login,
                logout
            }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export {AuthProvider, AuthContext}