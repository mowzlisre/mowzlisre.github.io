import { Box, Flex, useColorModeValue } from "@chakra-ui/react"
import Navbar from "./Components/Navbar"
import HeroBanner from "./Components/HeroBanner"
import Wave1 from "./Components/Waves/Wave1"
import Footer from "./Components/Footer"
import Experience from "./Components/Experience/Experience"
import Wave2 from "./Components/Waves/Wave2"
import Education from "./Components/Education/Education"
import Wave3 from "./Components/Waves/Wave3"
import Wave4 from "./Components/Waves/Wave4"
import Projects from "./Components/Projects/Projects"
import Wave5 from "./Components/Waves/Wave5"
import Skills from "./Components/Skills/Skills"

function App() {
  const bgColor = useColorModeValue('#000', '#fff')
  const bgInvColor = useColorModeValue('#fff', '#000')

  return (
    <Box bg={bgColor} minH="100vh">
      <Flex width="100%" bg={bgInvColor}>
        <Flex bg={bgInvColor} direction={"column"} width={{base: "100%", md: "70%"}} mx="auto" px={{base: "5", md: "5%"}}>
          <Navbar />
          <HeroBanner />
        </Flex>
      </Flex>
      <Wave1 />
      <Flex id={"experience"} width="100%" bg={bgColor}>
        <Flex bg={bgColor} direction={"column"} width={{base: "100%", md: "70%"}} mx="auto" px={{base: "5", md: "5%"}}>
          <Experience />
        </Flex>
      </Flex>
      <Wave2 />
      <Flex id={"education"} width="100%" bg={bgInvColor}>
        <Flex bg={bgInvColor} direction={"column"} width={{base: "100%", md: "70%"}} mx="auto" px={{base: "5", md: "5%"}}>
          <Education />
        </Flex>
      </Flex>
      <Wave3 />
      <Flex id={"projects"} width="100%" bg={bgColor}>
        <Flex bg={bgColor} direction={"column"} width={{base: "100%", md: "70%"}} mx="auto" px={{base: "5", md: "5%"}}>
          <Projects />
        </Flex>
      </Flex>
      <Wave4 />
      <Flex width="100%" bg={bgInvColor}>
        <Flex bg={bgInvColor} direction={"column"} width={{base: "100%", md: "70%"}} mx="auto" px={{base: "5", md: "5%"}}>
          <Skills />
        </Flex>
      </Flex>
      <Wave5 />
      <Flex width="100%" bg={bgColor}>
        <Flex bg={bgColor} direction={"column"} width={"100%"} mx="auto">
          <Footer />
        </Flex>
      </Flex>
    </Box>
  )
}

export default App;