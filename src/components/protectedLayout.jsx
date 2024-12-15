import Footer from "./footer"
import Navbar from "./navbar"
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from "react";

function ProtectedLayout({ children }) {
    const {
        isLoading,
        isAuthenticated,
        loginWithRedirect,
    } = useAuth0();
    useEffect(() => {
        if (!isLoading && !isAuthenticated) loginWithRedirect()
    }, [isAuthenticated]);

    return <>
        <Navbar />
        {children}
        <Footer />
    </>
}

export default ProtectedLayout
