import {
    Box, Button, Flex, IconButton, Text, useDisclosure, useColorModeValue, Avatar, HStack, Link,
    useColorMode,
    Divider
} from "@chakra-ui/react";
import { FaTimes, FaLinkedin, FaGithub, FaDownload, FaFolderOpen, FaReact, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineMoreVert } from "react-icons/md";
import "../index.css";
import NeonButton from "../Elements/NeonButton";
import profile from "../assets/hero-image.png";
const MotionBox = motion.create(Box);

function FloatBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const bgOverlay = useColorModeValue("rgba(0,0,0,0.2)", "rgba(255,255,255,0.05)");
    const cardBg = useColorModeValue("rgba(255, 255, 255, 0.1)", "rgba(0, 0, 0, 0.2)");

    return (
        <>
            <Box display={{ base: "block", md: "none" }}  position="relative" justifyContent="center" alignItems="center">

                <AnimatePresence>
                    {isOpen && (
                        <MotionBox
                            position="fixed"
                            top="0"
                            left="0"
                            width="100%"
                            height="100%"
                            backdropFilter="blur(8px)"
                            backgroundColor={bgOverlay}
                            onClick={onClose}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                    )}
                </AnimatePresence>
                {/* Full screen centered modal */}
                <Box>
                    <AnimatePresence>
                        {isOpen && (
                            <MotionBox position="fixed"
                                bg={cardBg}
                                p={8}
                                mx="5"
                                width="90%"
                                borderRadius="xl"
                                backdropFilter="blur(12px)"
                                border="1px solid rgba(255, 255, 255, 0.2)"
                                boxShadow="2xl"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >

                                <Flex justifyContent="center" mb={5}>
                                    <Avatar bg="transparent" src={profile} size="2xl" />
                                </Flex>

                                <Text textAlign="center" fontSize="lg" mb={5}>
                                    I don't want peace, I want problem statements! 
                                </Text>

                                <HStack spacing={4} justify="center" mb={8}>
                                    <Link href="https://linkedin.com/in/mowzlisre" isExternal>
                                        <IconButton icon={<FaLinkedin />} isRound size="md" />
                                    </Link>
                                    <Link href="https://github.com/mowzlisre" isExternal>
                                        <IconButton icon={<FaGithub />} isRound size="md" />
                                    </Link>
                                    <Link href="https://instagram.com/mowzlisre" isExternal>
                                        <IconButton icon={<FaInstagram />} isRound size="md" />
                                    </Link>
                                    <Link href="mailto:speak2mowzli@gmail.com" isExternal>
                                        <IconButton icon={<FaEnvelope />} isRound size="md" />
                                    </Link>
                                    <Link href="tel:12025345686" isExternal>
                                        <IconButton icon={<FaPhone />} isRound size="md" />
                                    </Link>
                                </HStack>

                                <Flex direction="column" gap={4}>
                                    <NeonButton borderRadius={"full"} onClick={() => alert("Download Resume")}>
                                        Download Resume
                                    </NeonButton>
                                </Flex>
                                <Divider my={4} />
                                <Flex direction="column" gap={4}>
                                    <NeonButton borderRadius={"full"} onClick={() => alert("Projects")}>
                                        Projects
                                    </NeonButton>
                                </Flex>
                            </MotionBox>
                        )}
                    </AnimatePresence>
                </Box>

                {/* The main floating trigger button */}
                <Box position="fixed" bottom="30px" right="30px" zIndex="1000">
                    <IconButton
                        icon={<MdOutlineMoreVert />}
                        isRound
                        size="lg"
                        onClick={isOpen ? onClose : onOpen}
                        shadow="lg"
                    />
                </Box>

            </Box>
        </>
    );
}

export default FloatBar;
