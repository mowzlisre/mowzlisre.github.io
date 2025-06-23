import { extendTheme } from "@chakra-ui/react"

// Color mode config
const config = {
  initialColorMode: "dark",  // OR 'dark' if you want dark by default
  useSystemColorMode: false,
}

// Define light and dark color palettes
const colors = {
  brand: {
    50: "#e0f2f1",
    100: "#b2dfdb",
    200: "#80cbc4",
    300: "#4db6ac",
    400: "#26a69a",
    500: "#009688",  // Teal for example
    600: "#00897b",
    700: "#00796b",
    800: "#00695c",
    900: "#004d40",
  },
  lightBg: "#ffffff",
  darkBg: "#000000",
}

const theme = extendTheme({ config, colors })

export default theme
