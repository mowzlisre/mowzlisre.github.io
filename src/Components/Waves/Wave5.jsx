import { Box, useColorMode } from "@chakra-ui/react";

function Wave5() {
  
  const { colorMode, toggleColorMode } = useColorMode();
  return (

    colorMode === "dark" ? (
      <Box position="relative" width="100%">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 320" style={{ display: "block", width: "100%", marginBottom: "-1px" }}>
          <path fill="#000000" fillOpacity="1" d="M0,96L48,128C96,160,192,224,288,245.3C384,267,480,245,576,213.3C672,181,768,139,864,144C960,149,1056,203,1152,224C1248,245,1344,235,1392,229.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </Box>
    ) : (
    <Box position="relative" width="100%">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 320" style={{ display: "block", width: "100%", marginBottom: "-1px" }}>
        <path fill="#ffffff" fillOpacity="1" d="M0,96L48,128C96,160,192,224,288,245.3C384,267,480,245,576,213.3C672,181,768,139,864,144C960,149,1056,203,1152,224C1248,245,1344,235,1392,229.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
    </Box>
    )
  );
}

export default Wave5;
