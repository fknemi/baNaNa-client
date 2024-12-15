import "../../index.css"
import Footer from "./footer"
import Navbar from "./navbar"
import { Fragment, useEffect } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router";
function Layout({ children }) {

    return <div className="w-lvh items-center align-center flex border-2 flex-col h-lvh gap-8">
        <Navbar />
        {children}
        <Footer />
    </div>
}

export default Layout
