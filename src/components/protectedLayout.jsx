import Footer from "./footer"
import Navbar from "./navbar"
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from "react";
import { useLocation} from "react-router"
function ProtectedLayout({ children }) {
    const { isLoading, isAuthenticated, error, loginWithRedirect,loginWithPopup } =
        useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Oops... {error.message}</div>;
    }
    if (!isAuthenticated) {
        //return loginWithPopup()

    }
}
export default ProtectedLayout
