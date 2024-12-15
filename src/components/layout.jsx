import "../../index.css"
import Footer from "./footer"
import Navbar from "./navbar"
import { Fragment, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";
import { nowPlayingAtom } from "../statedrive/atoms";
import { useSearchParams, useNavigate, useLocation } from "react-router";
function Layout({ children }) {
    const [nowPlaying, setNowPlaying] = useRecoilState(nowPlayingAtom)
    const { isLoading, error, data } = useQuery({
        queryKey: ['nowShowing'],

        queryFn: async () => {
            const res = await fetch('http://localhost:8080/get/movies/now-playing?location=Indore, Madhya Pradesh, India&language=en&shortCountryCode=in', {
                method: "get",
            });
            return res.json();
        },
        onSuccess: (data) => {
            console.log(data)
            setNowPlaying(data);
        },
    })


    return <div className="w-lvh items-center align-center flex border-2 flex-col h-lvh gap-8">
        <Navbar />
        {children}
        <Footer />
    </div>
}

export default Layout
