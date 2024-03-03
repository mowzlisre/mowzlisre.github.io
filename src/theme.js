import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: () => ({
        _focus: {
          boxShadow: "none",
        },
        _disabled: {
          opacity: "0.6",
          cursor: "not-allowed",
        },
        red: {
          color: "white", // Adjust text color based on color mode
          bg: "red.500", // Example red color
          _hover: {
            bg: "red.600", // Example darker red color on hover
          },
        },
      }),
    },
  },
});

export default theme;
