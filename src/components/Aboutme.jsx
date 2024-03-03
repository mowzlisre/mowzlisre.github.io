import { Card, CardBody, Flex, Heading, Image, Text, VStack, useColorModeValue } from "@chakra-ui/react"
import banner1 from "../assets/mowzlisre.jpg"
export const Aboutme = () => {
    const bgColor = useColorModeValue("red.500", "red.800");
    return (
        <>
            <Flex>
                <Flex zIndex={0} mt={10} mx={'auto'} justifyContent={"center"}>
                    <Card direction={{ base: 'column', md: 'column', lg: "row" }} maxW={{ base: "90%", md: "80%", lg: "70%", xl: "60%" }} overflow='hidden'>
                        <Image objectFit='cover' height={{base: "300px", lg: "auto"}} objectPosition={"center 10%"} maxW={{ base: '100%', lg: '300px' }} src={banner1} alt='Mowzli Sre' />
                        <Flex bg={bgColor}>
                            <CardBody color={"white"} my={'auto'}>
                                <Heading fontSize={30} size='md'> Hey there!</Heading>
                                <VStack fontSize={'xs'} textAlign={"justify"} gap={3} mt={3}>
                                    <Text>
                                        I'm <b>Mowzli Sre Mohan Dass</b>, originally from the vibrant city of Coimbatore, India. My journey into the world of technology began with a keen interest in Computer Science, which led me to pursue freelancing gigs in full-stack development and database management for over four enriching years.
                                    </Text>
                                    <Text>
                                        One of the highlights of my career journey was founding <b>Achaarya Tech</b>, a startup that became a huge success. But, as someone who's always hungry for knowledge, I decided to take a leap of faith and pursue a Master's degree in <b>Data Science at George Washington University</b> in Washington, DC.
                                    </Text>
                                    <Text>
                                        My ultimate career goal is to thrive in an environment where innovation is encouraged, and hard work is recognized. With my diverse skill set, entrepreneurial spirit, and unwavering commitment to growth, I'm excited to make meaningful contributions to the ever-evolving world of technology and beyond.
                                    </Text>
                                    <Text>
                                        Beyond coding, I find immense joy in exploring my creative side. Music, poetry writing, dancing, basketball, and creating pixel art are just a few of the avenues where I pour my heart and soul.
                                    </Text>
                                </VStack>

                            </CardBody>
                        </Flex>
                    </Card>
                </Flex>
            </Flex>
        </>
    )
}