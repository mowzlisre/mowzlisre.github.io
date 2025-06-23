import { Box, chakra, useColorMode } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const moveWave = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

function Wave() {
  
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    colorMode === "dark" ? (
    <Box position="relative" width="100%">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#000000" fillOpacity="1" d="M0,0L30,26.7C60,53,120,107,180,138.7C240,171,300,181,360,170.7C420,160,480,128,540,128C600,128,660,160,720,170.7C780,181,840,171,900,154.7C960,139,1020,117,1080,128C1140,139,1200,181,1260,186.7C1320,192,1380,160,1410,144L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
      </svg>
    </Box>
  ) : (
    <Box position="relative" width="100%">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fillOpacity="1" d="M0,0L30,26.7C60,53,120,107,180,138.7C240,171,300,181,360,170.7C420,160,480,128,540,128C600,128,660,160,720,170.7C780,181,840,171,900,154.7C960,139,1020,117,1080,128C1140,139,1200,181,1260,186.7C1320,192,1380,160,1410,144L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
      </svg>
    </Box>
  )
  );
}

export default Wave;
