import "../../index.css"
import Footer from "./footer"
import Navbar from "./navbar"
import { useEffect } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router";
function Layout({ children }) {

    return <>
        <Navbar />
        {children}
        <Footer />
    </>
}

export default Layout
