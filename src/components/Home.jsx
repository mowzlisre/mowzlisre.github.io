import { Box, Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, VStack, useDisclosure } from "@chakra-ui/react"
import { useEffect, useRef } from "react";
import Typed from 'typed.js';
import { FaGithubAlt, FaHandshakeSimple, FaLinkedinIn } from "react-icons/fa6";
import { IoChevronDown, IoDocumentTextOutline, IoLogoElectron, IoLogoNodejs, IoLogoPython, IoLogoReact } from "react-icons/io5";
import { SiAmazonaws, SiApachespark, SiDjango, SiMongodb, SiNeo4J, SiPostgresql } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { MdAlternateEmail, MdLocalPhone } from "react-icons/md";

export const Home = () => {
    const el = useRef(null);
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        const options = {
            strings: ['Full Stack Developer', 'Data Analyst', 'Python Enthusiast', 'Neo4j Graph Engineer', "Database and Backend Developer", "AI Prompt Expert"],
            typeSpeed: 60,
            backSpeed: 30,
            loop: true
        };

        const typed = new Typed(el.current, options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <Flex height={"100vh"}>
                <Box m={'auto'}>
                    <VStack mt={10}>
                        <Text fontFamily={'Anton'} fontSize={{ base: 40, md: 60 }}>Hi, I'm <span style={{ color: "#ff0000" }}>Mowzli Sre</span></Text>
                        <Text textAlign={'center'} fontSize={{ base: "sm", md: "lg" }} fontWeight={300} >I'm a <b style={{ color: "#ff0000" }} ref={el}></b></Text>
                        <Flex justifyContent={'center'} mt={5} gap={3}>
                            <Button size={'sm'} colorScheme={"red"} borderRadius={20} p={5} onClick={onOpen} color={"white"} bg="rgba(229, 62, 62, 0.8)" _hover={{ bg: "#E53E3E" }} leftIcon={<FaHandshakeSimple />}>Hire Me!</Button>
                            <Button size={'sm'} colorScheme={"red"} borderRadius={20} p={5} variant={"outline"} leftIcon={<IoDocumentTextOutline />}>Resume</Button>
                        </Flex>
                    </VStack>
                    <Box mt={20}>
                        <Text textAlign={'center'} fontWeight={300} mb={7}>You can <b style={{ color: "#ff0000" }}>trust</b> me on</Text>
                        <Flex mx={"auto"} maxW={{ base: "100%", md: "60%" }} justifyContent={'center'} mb={5} gap={3} wrap={"wrap"}>
                            <Button size={'xs'} borderRadius={20} p={4} colorScheme="yellow" leftIcon={<IoLogoPython fontSize={15} />}>Python</Button>
                            <Button size={'xs'} borderRadius={20} p={4} colorScheme="yellow" leftIcon={<IoLogoPython fontSize={15} />}>Javascript</Button>
                            <Button size={'xs'} borderRadius={20} p={4} colorScheme="teal" leftIcon={<SiDjango fontSize={15} />}>Django</Button>
                            <Button size={'xs'} borderRadius={20} p={4} colorScheme="twitter" leftIcon={<IoLogoReact fontSize={15} />}>React</Button>
                            <Button size={'xs'} borderRadius={20} p={4} colorScheme="green" leftIcon={<IoLogoNodejs fontSize={15} />}>Node.js</Button>
                            <Button size={'xs'} borderRadius={20} p={4} colorScheme="telegram" leftIcon={<SiNeo4J fontSize={15} />}>Neo4j</Button>
                            <Button size={'xs'} borderRadius={20} p={4} colorScheme="facebook" leftIcon={<SiPostgresql fontSize={15} />}>Postgresql</Button>
                            <Button size={'xs'} borderRadius={20} p={4} colorScheme="green" leftIcon={<SiMongodb fontSize={15} />}>MongoDb</Button>
                            <Button size={'xs'} borderRadius={20} p={4} colorScheme="pink" leftIcon={<TbApi fontSize={15} />}>RESTful</Button>
                            <Button size={'xs'} borderRadius={20} p={4} colorScheme="orange" leftIcon={<SiAmazonaws fontSize={15} />}>AWS</Button>
                            <Button size={'xs'} borderRadius={20} p={4} colorScheme="orange" leftIcon={<SiApachespark fontSize={15} />}>PySpark</Button>
                            <Button size={'xs'} borderRadius={20} p={4} colorScheme="cyan" leftIcon={<IoLogoElectron fontSize={15} />}>Electron</Button>
                        </Flex>
                    </Box>
                    <Flex justifyContent={"center"} color={"red"} mt={20} gap={2}>
                        <Text fontSize={"xs"}>Scroll to know more </Text>
                        <Box my={'auto'}>
                            <IoChevronDown />
                        </Box>
                    </Flex>
                    <Modal isOpen={isOpen} onClose={onClose} isCentered>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalCloseButton />
                            <ModalBody>
                                <Box p={10}>
                                    <Text textAlign={'center'} fontFamily={"Anton"} letterSpacing={2}>LET'S CONNECT</Text>
                                    <Text fontSize={"xs"} fontStyle={"italic"} textAlign={"center"} mt={2}>Get in touch with me through the following channels</Text>
                                    <VStack textAlign={'center'} mt={7}>
                                        <Flex m={"auto"} gap={2} role="button" onClick={() => window.open("tel:2025345686", "_blank")}>
                                            <Box my={"auto"}><MdLocalPhone color="red" /></Box>
                                            <Text fontSize={"sm"}>(202) 534 5686</Text>
                                        </Flex>
                                        <Flex m={"auto"} gap={2} role="button" onClick={() => window.open("mailto:mowzlisre.mohandass@gwu.edu", "_blank")}>
                                            <Box my={"auto"}><MdAlternateEmail color="orangered" /></Box>
                                            <Text fontSize={"sm"}>mowzlisre.mohandass@gwu.edu</Text>
                                        </Flex>
                                        <Flex m={"auto"} gap={2} role="button" onClick={() => window.open("https://www.linkedin.com/in/mowzlisremohandass/", "_blank")}>
                                            <Box my={"auto"}><FaLinkedinIn color="#4299e1" /></Box>
                                            <Text fontSize={"sm"}>mowzlisremohandass</Text>
                                        </Flex>
                                        <Flex m={"auto"} gap={2} role="button" onClick={() => window.open("https://github.com/mowzlisre", "_blank")}>
                                            <Box my={"auto"}><FaGithubAlt /></Box>
                                            <Text fontSize={"sm"}>mowzlisre</Text>
                                        </Flex>
                                    </VStack>
                                </Box>
                            </ModalBody>
                        </ModalContent>
                    </Modal>


                </Box>
            </Flex>
        </>
    )
}

