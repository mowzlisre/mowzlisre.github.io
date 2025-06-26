import { Box, chakra, useColorMode } from "@chakra-ui/react";

function Wave3() {
  
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    colorMode === "dark" ? (
    <Box position="relative" width="100%">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250" style={{ display: "block", width: "100%", marginBottom: "-1px" }}>
        <path fill="#000000" fillOpacity="1" d="M0,96L48,106.7C96,117,192,139,288,133.3C384,128,480,96,576,101.3C672,107,768,149,864,181.3C960,213,1056,235,1152,213.3C1248,192,1344,128,1392,96L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
    </Box>
  ) : (
    <Box position="relative" width="100%">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250" style={{ display: "block", width: "100%", marginBottom: "-1px" }}>
        <path fill="#ffffff" fillOpacity="1" d="M0,96L48,106.7C96,117,192,139,288,133.3C384,128,480,96,576,101.3C672,107,768,149,864,181.3C960,213,1056,235,1152,213.3C1248,192,1344,128,1392,96L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
    </Box>
  )
  );
}

export default Wave3;
