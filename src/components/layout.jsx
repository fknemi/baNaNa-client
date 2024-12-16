import "../../index.css"
import Footer from "./footer"
import Navbar from "./navbar"
import { Fragment, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";
import { actorsAtom, comingSoonAtom, nowPlayingAtom, promotionsAtom } from "../statedrive/atoms";
import { useSearchParams, useNavigate, useLocation } from "react-router";
function Layout({ children }) {
    const [nowPlaying, setNowPlaying] = useRecoilState(nowPlayingAtom)
    const [comingSoon, setComingSoon] = useRecoilState(comingSoonAtom)
    const [promotions, setPromotions] = useRecoilState(promotionsAtom)
    const [actors, setActors] = useRecoilState(actorsAtom)
    useQuery({
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

    useQuery({
        queryKey: ['comingSoon'],

        queryFn: async () => {
            const res = await fetch('http://localhost:8080/get/movies/coming-soon?location=Indore, Madhya Pradesh, India&language=en&shortCountryCode=in', {
                method: "get",
            });
            return res.json();
        },
        onSuccess: (data) => {
            console.log(data)
            setComingSoon(data);
        },
    })

    useQuery({
        queryKey: ['promotions'],

        queryFn: async () => {
            const res = await fetch('http://localhost:8080/get/movies/promotions', {
                method: "get",
            });
            return res.json();
        },
        onSuccess: (data) => {
            console.log(data)
            setPromotions(data.data);
        },
    })

    useQuery({
        queryKey: ['actors'],

        queryFn: async () => {
            const res = await fetch('http://localhost:8080/get/movies/actors', {
                method: "get",
            });
            return res.json();
        },
        onSuccess: (data) => {
            console.log(data)
            setComingSoon(data);
        },
    })
    return <div className="w-lvh items-center align-center flex border-2 flex-col h-lvh gap-8">
        <Navbar />
        {children}
        <Footer />
    </div>
}

export default Layout
