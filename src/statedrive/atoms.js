import { atom } from "recoil";


export const currentNavTabKeyAtom = atom({
    key: "currentNavTabKey",
    default: "home",
});


export const userAtom = atom({
    key: "user",
    default: ""

})
export const foodOptionsAtom = atom({
    key: "foodOptions",
    default: "home",

})
export const invoiceAtom = atom({
    key: "invoice",
    default: "",

})

export const movieAtom = atom({
    key: "movie",
    default: ""

})
export const moviesAtom = atom({
    key: "movies",
    default: ""

})
export const ticketsAtom = atom({
    key: "tickets",
    default: ""

})



export const nowPlayingAtom = atom({
    key: "nowPlaying",
    default: []

})

export const comingSoonAtom = atom({
    key: "comingSoon",
    default: []

})

export const promotionsAtom = atom({
    key: "promotions",
    default: []

})

export const actorsAtom = atom({
    key: "actors",
    default: []

})


export const cinemasAtom = atom({
    key: "cinemas",
    default: []

})







