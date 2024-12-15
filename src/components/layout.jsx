import "../../index.css"
import Footer from "./footer"
import Navbar from "./navbar"
import { Fragment, useEffect } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router";
function Layout({ children }) {

    return <div className="w-lvh items-center align-center flex">
        <Navbar />
        {children}
        <Footer />
    </div>
}

export default Layout
