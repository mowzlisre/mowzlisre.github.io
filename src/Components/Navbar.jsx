import { Box, Flex, Text, useColorMode } from "@chakra-ui/react"
import { useState } from "react"
import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai"

function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box height="70px" p="10" px={{base: "5", md: "5%"}} display="flex" justifyContent="space-between" alignItems="center">
            <Box>
                <Text>MS.</Text>
            </Box>
            <Flex gap="8">
                <Flex display={{base: "none", md: "flex"}} gap="10">
                    <Text>Projects</Text>
                    <Text>Resume</Text>
                    <Text>Contact</Text>
                </Flex>
                <Box role="button" my="auto" onClick={toggleColorMode}>
                    {
                        colorMode === "light" ? <AiOutlineSun/> : <AiOutlineMoon/>
                    }
                </Box>
            </Flex>
        </Box>
    )
}

export default Navbar