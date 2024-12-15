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

        },
        extend: {},
    },
    darkMode: "class",
    plugins: [nextui()],

}




