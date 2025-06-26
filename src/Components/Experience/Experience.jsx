import { Divider, Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import ExperienceCard from "./ExperienceCard";
import data from "../../../db"

function Experience() {
    const color = useColorModeValue('#fff', '#000')

    return (
        <Stack direction={"column"} p={{base: 0, lg: "5%"}}>
            <Flex direction="column" p={{base: 5, lg: 0}} pb={{base: 2}}>
                <Text fontSize="2xl" color={color} fontWeight="bold">Experience</Text>
                <Divider bg={"gray.400"} mb={{base: 0, lg: 2}} />
            </Flex>
            {
                data.experience.map((item, index) => (
                    <ExperienceCard key={index} data={item} />
                ))
            }
        </Stack>
    )
}

export default Experience;