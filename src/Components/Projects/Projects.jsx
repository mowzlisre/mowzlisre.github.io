import { Divider, Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import GlassyGrid from "../Grid/GlassyGrid"
import data from "../../../db"
function Projects(){
    const color = useColorModeValue('#fff', '#000')
    
    return (
        <Stack direction={"column"} p={{base: 0, lg: "5%"}} mt={{base: 5, lg: -30}} mb={{base: 10, md: 30}}>
            <Flex direction="column" px={{base: 5, lg: 0}} pb={{base: 2}}>
                <Text fontSize="2xl" color={color} fontWeight="bold">Projects</Text>
                <Divider bg={"gray.400"} mb={{base: 0, lg: 2}} />
            </Flex>
            <GlassyGrid cols={{ base: 3, md: 3 }} items={data.projects} />
        </Stack>
    )
}

export default Projects