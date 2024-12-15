import { useAuth0 } from "@auth0/auth0-react"
import { useEffect } from "react"

function Login() {
    const { user } = useAuth0()
    useEffect(() => {
        console.log(user)
    }, [])
    return (
        <>
            Login
        </>
    )
}

export default Login
