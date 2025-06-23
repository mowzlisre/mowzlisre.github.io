import { Box, Text } from "@chakra-ui/react";
import "../index.css";
import NeonButton from "../Elements/NeonButton";

function HeroBanner() {
    return (
        <Box p="10" px={{base: "5", md: "5%"}} pb="0">
            <Text>Hi, I'm</Text>
            <Text my="4" fontSize={{base: "2xl", md: "6xl"}} fontWeight="bold">Mowzli Sre Mohan Dass</Text>
            <Text textAlign={"justify"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
            <Box my="10">
                <NeonButton borderRadius={"full"}>
                    <Text my="auto" fontSize={{base: "sm", md: "sm"}}>Say Hi 👋</Text>
                </NeonButton>
            </Box>
        </Box>
    )
}

export default HeroBanner;