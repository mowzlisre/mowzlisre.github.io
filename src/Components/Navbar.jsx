import { Box, Flex, Link, Text, useColorMode } from "@chakra-ui/react"
import { useState } from "react"
import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai"

function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box height="70px" p="10" px={{ base: "5", md: "5%" }} display="flex" justifyContent="space-between" alignItems="center">
            <Box>
                <Text>MS.</Text>
            </Box>
            <Flex gap="8">
                <Flex display={{ base: "none", md: "flex" }} gap={10}>
                    <Link href="#experience" _hover={{ textDecoration: "none", opacity: 0.8 }}>
                        Experience
                    </Link>
                    <Link href="#education" _hover={{ textDecoration: "none", opacity: 0.8 }}>
                        Education
                    </Link>
                    <Link href="#projects" _hover={{ textDecoration: "none", opacity: 0.8 }}>
                        Projects
                    </Link>
                </Flex>
                <Box role="button" my="auto" onClick={toggleColorMode}>
                    {
                        colorMode === "light" ? <AiOutlineSun /> : <AiOutlineMoon />
                    }
                </Box>
            </Flex>
        </Box>
    )
}

export default Navbar