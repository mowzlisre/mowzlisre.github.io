import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import "../index.css";
import NeonButton from "../Elements/NeonButton";
import { FaGithub, FaInstagram, FaPhone } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function HeroBanner() {
    const color = useColorModeValue("gray.700", "gray.400")
    return (
        <Box p="10" px={{base: "5", md: "5%"}} pb="0">
            <Text fontWeight={"350"} color={color}>Hi, I'm</Text>
            <Text my="4" fontSize={{base: "2xl", md: "6xl"}} fontWeight="bold">Mowzli Sre Mohan Dass</Text>
            <Text textAlign={"justify"} fontWeight={"350"} color={color}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
            <Flex my="10" gap="5">
                <NeonButton borderRadius={"full"}>
                    <Text my="auto" fontSize={{base: "sm", md: "sm"}} onClick={() => window.open("mailto:contact@mowzlisre.me")}>Say Hi 👋</Text>
                </NeonButton>
                <Text my="auto" color="gray.500">or</Text>
                <Flex my="auto" align="center" gap="5">
                    <Box role="button" onClick={() => window.open("https://www.linkedin.com/in/mowzlisre", "_blank")}><FaLinkedin size={18} /></Box>
                    <Box role="button" onClick={() => window.open("https://github.com/mowzlisre", "_blank")}><FaGithub size={18} /></Box>
                    <Box role="button" onClick={() => window.open("https://www.instagram.com/mowzlisre", "_blank")}><FaInstagram size={18} /></Box>
                    <Box role="button" onClick={() => window.open("tel:+12025345686")}><FaPhone size={16} /></Box>

                </Flex>
            </Flex>
        </Box>
    )
}

export default HeroBanner;