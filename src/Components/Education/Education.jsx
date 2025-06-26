import { Divider, Flex, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import data from "../../../db"
import EducationCard from "./EducationCard";

function Education() {
    const color = useColorModeValue('#000', '#fff')
    return (
        <Stack direction={"column"} p={{base: 0, lg: "5%"}} mt={{lg: -50}}>
            <Flex direction="column" p={{base: 5, lg: 0}} pb={{base: 2}}>
                <Text fontSize="2xl" color={color} fontWeight="bold">Education</Text>
                <Divider bg={"gray.400"} mb={{base: 0, lg: 2}} />
            </Flex>
            <Flex direction={{base: "column", lg: "row"}} gap={5} justify={"space-evenly"}>
                {
                    data.education.map((item, index) => (
                        <EducationCard key={index} data={item} />
                    ))
                }
            </Flex>
        </Stack>
    )
}

export default Education;