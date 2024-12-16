import { Tabs, Tab } from "@nextui-org/react"
import { useLocation } from 'react-router'
import { useRecoilState } from "recoil";
import { currentNavTabKeyAtom, loggedInStatusAtom } from "../statedrive/atoms";
import { useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
function Navbar() {
    const { pathname } = useLocation()
    let [currentNavTabKey, setCurrentNavTabKey] = useRecoilState(currentNavTabKeyAtom);
    let [loggedInStatus, setLoggedInStatus] = useRecoilState(loggedInStatusAtom);

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

    ]


    // {
    //            name: "Login",
    //
    //            key: "login",
    //            path: "/login",
    //        },

    return <nav className="mt-10">
        <Tabs
            aria-label="Nav Links"
            variant="light"
            selectedKey={pathname}
        >

            {
                links.splice(0, 4).map(({ name, path, key }) => {
                    const tabRef = useRef()
                    const { isLoading, isAuthenticated } = useAuth0()
                    return <Tab key={key} title={name} href={path} ref={tabRef} />
                })
            }
            {
                !loggedInStatusAtom ? <Tab key={"dashboard"} title={"dashboard"} href={"/dashboard"} /> : <Tab key={"login"} title={"login"} href={"/login"} />


            }



        </Tabs>
    </nav>
}

export default Navbar
