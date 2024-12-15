import { Tabs, Tab } from "@nextui-org/react"
import { useLocation } from 'react-router'
import { useRecoilState } from "recoil";
import { currentNavTabKeyAtom } from "../statedrive/atoms";
import { useEffect, useRef } from "react";

function Navbar() {
    const location = useLocation()
    let [currentNavTabKey, setCurrentNavTabKey] = useRecoilState(currentNavTabKeyAtom);
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

    useEffect(() => {
        links.forEach((link) => {
            if(link.path === location.pathname){
                setCurrentNavTabKey(link.key)
            }
        }
        );
        setTimeout(() => {
            console.log(currentNavTabKey)
            console.log(location.pathname)
        }, 4000)
    }, []);



    return <nav className="mt-10">
        <Tabs
            aria-label="Nav Links"
            variant="light"
    selectedKey={currentNavTabKey}
        >
            {
                links.splice(0, 4).map(({ name, path, key }) => {
                    const tabRef = useRef()
                    return <Tab key={key} title={name} href={path} ref={tabRef} />
                })
            }
        </Tabs>
    </nav>
}

export default Navbar
