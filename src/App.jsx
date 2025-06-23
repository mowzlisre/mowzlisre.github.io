import { Box, Flex, useColorModeValue } from "@chakra-ui/react"
import Navbar from "./Components/Navbar"
import FloatBar from "./Components/FloatBar"
import HeroBanner from "./Components/HeroBanner"
import Wave from "./Components/Wave"

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
      <Wave />
      <FloatBar />
    </Box>
  )
}

export default App;