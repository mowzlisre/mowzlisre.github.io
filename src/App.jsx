import { Box, Flex, useColorMode } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import HeroBanner from "./Components/HeroBanner";
import Footer from "./Components/Footer";
import Experience from "./Components/Experience/Experience";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

const SectionDivider = ({ isDark, flip = false }) => (
  <Box
    h="100px"
    bgGradient={
      flip
        ? isDark
          ? "linear(to-b, #111, #000)"
          : "linear(to-b, #f5f5f5, #fff)"
        : isDark
          ? "linear(to-b, #000, #111)"
          : "linear(to-b, #fff, #f5f5f5)"
    }
    pointerEvents="none"
  />
);

function App() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const bg1 = isDark ? "#000" : "#fff";
  const bg2 = isDark ? "#111" : "#f5f5f5";

  return (
    <Box bg={bg1} minH="100vh">
      {/* Navbar — floating over hero */}
      <Box position="fixed" top={0} left={0} right={0} zIndex={100}
        backdropFilter="blur(12px)"
        borderBottom="1px solid"
        borderColor={isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}
        bg={isDark ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.7)"}
      >
        <Box maxW="900px" mx="auto">
          <Navbar />
        </Box>
      </Box>

      {/* Hero */}
      <HeroBanner />

      <SectionDivider isDark={isDark} />

      {/* Experience */}
      <Box id="experience" bg={bg2} py={16}>
        <Box maxW="900px" mx="auto" px={{ base: 5, md: "5%" }}>
          <Experience />
        </Box>
      </Box>

      <SectionDivider isDark={isDark} flip />

      {/* Education */}
      <Box id="education" bg={bg1} py={16}>
        <Box maxW="900px" mx="auto" px={{ base: 5, md: "5%" }}>
          <Education />
        </Box>
      </Box>

      <SectionDivider isDark={isDark} />

      {/* Projects */}
      <Box id="projects" bg={bg2} py={16}>
        <Box maxW="900px" mx="auto" px={{ base: 5, md: "5%" }}>
          <Projects />
        </Box>
      </Box>

      <SectionDivider isDark={isDark} flip />

      {/* Skills */}
      <Box bg={bg1} py={16}>
        <Box maxW="900px" mx="auto" px={{ base: 5, md: "5%" }}>
          <Skills />
        </Box>
      </Box>

      <SectionDivider isDark={isDark} />

      {/* Footer */}
      <Box bg={bg2}>
        <Footer />
      </Box>
    </Box>
  );
}

export default App;