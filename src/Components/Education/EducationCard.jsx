import { Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";

function EducationCard(data){
    const color = useColorModeValue('#000', '#fff')
    const bgHover = useColorModeValue('gray.100', 'gray.900');
    
    return (
        <Flex direction="column" maxW={{ base: "100%", xl: "55%" }} color={color} p={10} gap={5} rounded="xl" transition="background 0.2s ease" _hover={{ bg: bgHover }}>
            <Image mx={"auto"} src={data.data.logo} maxW={{ base: "200px", xl: "250px" }} rounded="md"/>
            <Flex direction={"column"} textAlign={'center'}>
                <Text fontSize={{base: "sm", lg: "sm"}} fontWeight={"bold"} color={"gray.500"}>{data.data.degree} • {data.data.graduation}</Text>
                <Text fontSize={{base: "lg", lg: "lg"}}>{data.data.institution}</Text>
                <Text fontSize={{base: "sm", lg: "sm"}} color={"gray.500"}>{data.data.location}</Text>
            </Flex>
        </Flex>
    )
}

export default EducationCard