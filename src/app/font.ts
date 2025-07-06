import {  Raleway } from "next/font/google";

const Raleway_init = Raleway({
    subsets: ["latin"],
    display: "swap",
})

const fontRal = Raleway_init.className;
export default fontRal;