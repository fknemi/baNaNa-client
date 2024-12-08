import Footer from "./footer"
import Navbar from "./navbar"

function ProtectedLayout({ children }) {

    return <>
        <Navbar />
        {children}
        <Footer />
    </>
}

export default ProtectedLayout
