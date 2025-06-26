import { Divider, Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import Marquee from "../Marquee/Marquee";
import data from "../../../db"

function Skills(){
    const color = useColorModeValue('#000', '#fff')

    return (
        <Stack direction={"column"} p={{base: 0, lg: "5%"}} mt={{base: 5, lg: -30}}>
            <Flex direction="column" px={{base: 5, lg: 0}} pb={{base: 2}}>
                <Text fontSize="2xl" color={color} fontWeight="bold">Skills</Text>
                <Divider bg={"gray.400"} mb={{base: 0, lg: 2}} />
            </Flex>
            <Marquee />
        </Stack>
    )
}

export default Skills