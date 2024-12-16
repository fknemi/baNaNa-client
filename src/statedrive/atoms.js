import { atom } from "recoil";

import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

export const currentNavTabKeyAtom = atom({
    key: "currentNavTabKey",
    default: "home",
    effects_UNSTABLE: [persistAtom]

});

export const cityAtom = atom({
    key: "city",
    default: "",
    effects_UNSTABLE: [persistAtom]


})

export const userAtom = atom({
    key: "user",
    default: "",
    effects_UNSTABLE: [persistAtom]


})
export const foodOptionsAtom = atom({
    key: "foodOptions",
    default: "home",
    effects_UNSTABLE: [persistAtom]


})
export const invoiceAtom = atom({
    key: "invoice",
    default: "",
    effects_UNSTABLE: [persistAtom]


})

export const movieAtom = atom({
    key: "movie",
    default: "",
    effects_UNSTABLE: [persistAtom]


})
export const moviesAtom = atom({
    key: "movies",
    default: "",
    effects_UNSTABLE: [persistAtom]


})
export const ticketsAtom = atom({
    key: "tickets",
    default: "",
    effects_UNSTABLE: [persistAtom]


})



export const nowPlayingAtom = atom({
    key: "nowPlaying",
    default: [],
    effects_UNSTABLE: [persistAtom]

})

export const showTimesAtom = atom({
    key: "showTimes",
    default: [],
    effects_UNSTABLE: [persistAtom]

})

export const comingSoonAtom = atom({
    key: "comingSoon",
    default: [],
    effects_UNSTABLE: [persistAtom]


})

export const promotionsAtom = atom({
    key: "promotions",
    default: [],
    effects_UNSTABLE: [persistAtom]


})

export const actorsAtom = atom({
    key: "actors",
    default: [],
    effects_UNSTABLE: [persistAtom]


})


export const cinemasAtom = atom({
    key: "cinemas",
    default: [],
    effects_UNSTABLE: [persistAtom]


})

export const loggedInStatusAtom = atom({
    key: "loggedInStatus",
    default: false,
    effects_UNSTABLE: [persistAtom]


})




export const navLinksAtom = atom({
    key: "navLinks",
    default: [
        {
            name: "Home",
            key: "/",
            path: "/",
        },
        {
            name: "Now Playing",
            key: "/now-playing",
            path: "/now-playing",
        },
        {
            name: "Coming Soon",
            key: "/coming-soon",
            path: "/coming-soon",
        },
        {
            name: "Login",
            key: "/login",
            path: "/login",
        },

    ]


})




