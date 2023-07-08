import { useContext } from "react"
import { AuthContext } from "../contexts/users/auth"

export function Page(){
    const { user, login, logout } = useContext(AuthContext)
    console.log(user)
    return(
        <div>
            <p>{user?.name} - {user?.token}</p>
            <button onClick={logout}>Logout</button>
        </div>
    )
}