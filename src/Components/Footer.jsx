// Footer.jsx
import {
    Box,
    Flex,
    Stack,
    Link,
    IconButton,
    Text,
    Divider,
    Heading,
    useColorModeValue,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaInstagram, FaReact, FaHeart } from 'react-icons/fa';

function Footer() {
    const color = useColorModeValue('#fff', 'gray.700')
    return (
        <Box color={color} as="footer" px={{ base: 5, md: '5%' }} py={10}>
            <Flex direction={"column"} width={{ base: "100%", md: "70%" }} mx="auto" px={{ base: "5", md: "5%" }}>
                <Flex direction={{ base: 'column', md: 'row' }} justify="space-between"gap={8}>
                    <Stack spacing={4} maxW="280px">
                        <Heading as="h3" size="md">
                            Mowzli Sre Mohan Dass
                        </Heading>
                        <Text fontSize="sm">
                            Crafting data-driven solutions!
                        </Text>
                    </Stack>

                    <Stack maxW="500px" direction={{ base: 'column', md: 'row' }} spacing={{ base: "6", md: "20" }}>
                        <Stack spacing={2}>
                            <Text fontWeight="bold" mb={1}>
                                Explore
                            </Text>
                            <Link href="#experience">Experience</Link>
                            <Link href="#education">Education</Link>
                            <Link href="#projects">Projects</Link>
                        </Stack>

                        <Stack spacing={2}>
                            <Text fontWeight="bold" mb={1}>
                                Contact
                            </Text>
                            <Link href="mailto:contact@mowzlisre.me">contact@mowzlisre.me</Link>
                            <Link href="tel:+12025345686">+1 (202) 534-5686</Link>
                        </Stack>
                    </Stack>

                    <Stack direction="row" spacing={3} mx={{ base: "auto", md: "0" }} align="flex-start">
                        <IconButton
                            as="a"
                            href="https://linkedin.com/in/mowzlisre"
                            aria-label="LinkedIn"
                            icon={<FaLinkedin />}
                            variant="ghost"
                            colorScheme="white"
                            size="lg"
                        />
                        <IconButton
                            as="a"
                            href="https://github.com/mowzlisre"
                            aria-label="GitHub"
                            icon={<FaGithub />}
                            variant="ghost"
                            colorScheme="white"
                            size="lg"
                        />
                        <IconButton
                            as="a"
                            href="https://twitter.com/mowzlisre"
                            aria-label="Instagram"
                            icon={<FaInstagram />}
                            variant="ghost"
                            colorScheme="white"
                            size="lg"
                        />

                    </Stack>
                </Flex>

                <Divider my={8} borderColor="gray.700" />

                <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between" fontSize="sm" gap={2} >
                    <Text>
                        © {new Date().getFullYear()} Mowzli Sre Mohan Dass
                    </Text>
                    <Flex align="center" gap="2">
                        Built in <FaHeart color="red" /> with <FaReact color="cyan" />
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
}

export default Footer;
