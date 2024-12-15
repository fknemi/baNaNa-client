// tailwind.config.js
import { nextui } from "@nextui-org/react";
export default {
    content: [
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",

    ],

    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            "white": "#FFF",
            "offWhite": "#cfcfcf",
            "secondaryOffWhite": "#f2f2f2",
            "lightGray": "",
            "darkGray": "#7c7c7c",
            "primaryBlack": "#101010",
            "secondaryBlack": "222222",
            "darkBlue": "009BFF",
        },
        extend: {
            fontFamily: {
                infinity: ["Made Infinity", 'sans-serif'],
                fabio: ["FabioXM", 'sans-serif'],


            }
        },
    },
    darkMode: "class",
    plugins: [nextui()],

}




