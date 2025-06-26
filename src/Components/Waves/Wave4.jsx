import { Box, chakra, useColorMode } from "@chakra-ui/react";

function Wave4() {
  
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    colorMode === "dark" ? (
    <Box position="relative" width="100%">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 220" style={{ display: "block", width: "100%", marginBottom: "-1px" }}>
        <path fill="#000000" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </Box>
  ) : (
    <Box position="relative" width="100%">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 220" style={{ display: "block", width: "100%", marginBottom: "-1px" }}>
        <path fill="#ffffff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </Box>
  )
  );
}

export default Wave4;
