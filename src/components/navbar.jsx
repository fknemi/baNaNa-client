import { Tabs, Tab } from "@nextui-org/react"
import { useNavigate } from 'react-router-dom'
function Navbar() {

    const links = [
        {
            name: "Home",
            key: "home",
            path: "/",
        },
        {
            name: "Now Playing",

            key: "now-playing",
            path: "/now-playing",
        },
        {
            name: "Coming Soon",

            key: "coming-soon",
            path: "/coming-soon",
        },
        {
            name: "Login",

            key: "login",
            path: "/login",
        },
        {
            name: "Support",

            key: "support",
            path: "/support",
        },

    ]
    const navigate = useNavigate()
    return <nav>
        <Tabs
            aria-label="Nav Links"
        >
            {
                links.map(({ name, path, key }) => {
                    return <Tab key={key} title={name} href={path} />
                })
            }
        </Tabs>
    </nav>
}

export default Navbar
