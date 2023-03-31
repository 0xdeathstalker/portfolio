import {extendTheme} from "@chakra-ui/react";
import { neutralPalette } from "../lib/constants/colors";

const theme = extendTheme({
    colors: {
        primary: "#10100e",
        neutral: neutralPalette,
    },
    fonts: {
        body: "General Sans, sans-serif",
        secondary: "Ranade, sans-serif"
    }
})

export {theme};