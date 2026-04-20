import { useState } from "react";
import { Box, Flex, Image, Text, useColorMode } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { FaGithub, FaExternalLinkAlt, FaLock, FaArrowRight } from "react-icons/fa";
import data from "../../../db";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 10px rgba(255, 177, 99, 0.2); }
  50%       { box-shadow: 0 0 20px rgba(255, 185, 99, 0.4); }
`;

const SmallCard = ({ project, index, isDark }) => {
    const [hovered, setHovered] = useState(false);
    const cardBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)";
    const cardBorder = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";
    const titleColor = isDark ? "rgba(255,255,255,0.88)" : "rgba(0,0,0,0.85)";
    const mutedColor = isDark ? "rgba(255,255,255,0.38)" : "rgba(0,0,0,0.38)";
    const logoBg = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)";

    return (
        <Box
            bg={cardBg}
            border="1px solid"
            borderColor={hovered ? project.accent + "55" : cardBorder}
            borderRadius="2xl"
            p={4}
            position="relative"
            overflow="hidden"
            transition="all 0.3s cubic-bezier(0.4,0,0.2,1)"
            animation={`${fadeUp} 0.5s ease both`}
            style={{ animationDelay: `${index * 40}ms` }}
            transform={hovered ? "translateY(-4px)" : "translateY(0)"}
            boxShadow={hovered ? `0 20px 40px ${project.accent}14` : "none"}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            cursor="default"
        >
            {/* Top accent line */}
            <Box
                position="absolute"
                top={0} left={0} right={0}
                h="2px"
                bgGradient={`linear(to-r, transparent, ${project.accent}99, transparent)`}
                opacity={hovered ? 1 : 0}
                transition="opacity 0.3s"
            />

            {/* Glow blob */}
            <Box
                position="absolute"
                bottom="-20px" right="-20px"
                w="80px" h="80px"
                borderRadius="full"
                bg={project.accent}
                opacity={hovered ? 0.12 : 0.04}
                filter="blur(25px)"
                transition="opacity 0.3s"
                pointerEvents="none"
            />

            {/* Logo + Title row */}
            <Flex align="center" gap={3} mb={3}>
                <Box
                    w="36px" h="36px"
                    borderRadius="lg"
                    bg={logoBg}
                    borderColor={hovered ? project.accent + "44" : cardBorder}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                    overflow="hidden"
                    transition="border-color 0.3s"
                    p={0}
                >
                    <Image src={project.logo} w="100%" h="100%" objectFit="contain" />
                </Box>
                <Text
                    fontSize="xs"
                    fontWeight="700"
                    color={hovered ? project.accent : titleColor}
                    letterSpacing="-0.01em"
                    lineHeight="1.3"
                    transition="color 0.3s"
                    noOfLines={1}
                >
                    {project.name}
                </Text>
            </Flex>

            {/* Description */}
            <Text
                fontSize="2xs"
                color={mutedColor}
                lineHeight="1.6"
                noOfLines={3}
                mb={3}
            >
                {project.description}
            </Text>

            {/* Footer */}
            <Flex justify="space-between" align="center">
                <Flex gap={3} align="center">
                    {project.type && (
                        <Box
                            px={2} py={0.5}
                            borderRadius="full"
                            border="1px solid"
                            borderColor={project.accent + "44"}
                            bg={project.accent + "12"}
                        >
                            <Text fontSize="2xs" fontWeight="600" color={project.accent}>
                                {project.type}
                            </Text>
                        </Box>
                    )}
                    {project.github && (
                        <Box
                            color={mutedColor}
                            cursor="pointer"
                            transition="color 0.2s"
                            _hover={{ color: project.accent }}
                            onClick={() => window.open(project.github, "_blank")}
                        >
                            <FaGithub size={13} />
                        </Box>
                    )}
                    {project.demo && (
                        <Box
                            color={mutedColor}
                            cursor="pointer"
                            transition="color 0.2s"
                            _hover={{ color: project.accent }}
                            onClick={() => window.open(project.demo, "_blank")}
                        >
                            <FaExternalLinkAlt size={11} />
                        </Box>
                    )}
                </Flex>
                <Box
                    w="20px" h="20px"
                    borderRadius="full"
                    border="1px solid"
                    borderColor={hovered ? project.accent + "66" : cardBorder}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    transition="all 0.2s"
                    bg={hovered ? project.accent + "18" : "transparent"}
                    cursor="pointer"
                    onClick={() => window.open(project.open, "_blank")} 
                >
                    <FaArrowRight size={8} color={hovered ? project.accent : mutedColor} />
                </Box>
            </Flex>
        </Box>
    );
};

function Projects() {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const titleColor = isDark ? "#fff" : "#000";
    const cardBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)";
    const cardBorder = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";
    const mutedColor = isDark ? "rgba(255,255,255,0.38)" : "rgba(0,0,0,0.38)";
    const ACCENT = data.featured[0].accent;

    return (
        <Box w="100%">
            {/* Section Header */}
            <Flex align="flex-end" justify="space-between" mb={8} px={{ base: 5, lg: 0 }}>
                <Box>
                    <Text
                        fontSize="xs"
                        fontWeight="600"
                        letterSpacing="0.1em"
                        textTransform="uppercase"
                        color={ACCENT}
                        opacity={0.7}
                        mb={1}
                    >
                        Work
                    </Text>
                    <Text
                        fontSize={{ base: "2xl", md: "3xl" }}
                        fontWeight="800"
                        color={titleColor}
                        letterSpacing="-0.03em"
                    >
                        Projects
                    </Text>
                </Box>
            </Flex>

            <Box px={{ base: 5, lg: 0 }}>
                {/* Featured Cards */}
                {data.featured.map((featured) => {
                    const A = featured.accent;
                    return (
                        <Box
                            key={featured.name}
                            bg={cardBg}
                            border="1px solid"
                            borderColor={cardBorder}
                            borderRadius="2xl"
                            overflow="hidden"
                            mb={4}
                            animation={`${fadeUp} 0.5s ease both`}
                            role="group"
                            position="relative"
                            transition="all 0.35s cubic-bezier(0.4,0,0.2,1)"
                            _hover={{
                                borderColor: A + "55",
                                boxShadow: `0 32px 64px ${A}16`,
                            }}
                            sx={{ animation: `${pulseGlow} 4s ease-in-out infinite` }}
                        >
                            {/* Top accent line */}
                            <Box
                                position="absolute"
                                top={0} left={0} right={0}
                                h="2px"
                                bgGradient={`linear(to-r, transparent, ${A}, transparent)`}
                            />

                            {/* Background mesh */}
                            <Box
                                position="absolute"
                                top="-60px" right="-60px"
                                w="300px" h="300px"
                                borderRadius="full"
                                bg={A}
                                opacity={isDark ? 0.06 : 0.04}
                                filter="blur(80px)"
                                transition="opacity 0.4s"
                                _groupHover={{ opacity: isDark ? 0.14 : 0.08 }}
                                pointerEvents="none"
                            />
                            <Box
                                position="absolute"
                                bottom="-40px" left="20%"
                                w="200px" h="200px"
                                borderRadius="full"
                                bg="#EC4899"
                                opacity={isDark ? 0.04 : 0.03}
                                filter="blur(60px)"
                                pointerEvents="none"
                            />

                            <Flex
                                direction={{ base: "column", md: "row" }}
                                align={{ base: "flex-start", md: "center" }}
                                gap={6}
                                p={{ base: 6, md: 8 }}
                            >
                                {/* Left — text */}
                                <Box flex={1} position="relative" zIndex={1}>
                                    {/* Status badge */}
                                    <Flex align="center" gap={2} mb={4}>
                                        <Box
                                            w="6px" h="6px"
                                            borderRadius="full"
                                            bg="#10B981"
                                            boxShadow="0 0 8px #10B98188"
                                            sx={{ animation: `${pulseGlow} 2s ease-in-out infinite` }}
                                        />
                                        <Text fontSize="2xs" fontWeight="600" color="#10B981" letterSpacing="0.08em" textTransform="uppercase">
                                            {featured.status}
                                        </Text>
                                        <Box
                                            px={2} py={0.5}
                                            borderRadius="full"
                                            border="1px solid"
                                            borderColor={A + "44"}
                                            bg={A + "12"}
                                            ml={1}
                                        >
                                            <Text fontSize="2xs" fontWeight="600" color={A}>Featured</Text>
                                        </Box>
                                    </Flex>

                                    {/* Name */}
                                    <Flex align="center" gap={2} mb={2}>
                                        <Image src={featured.logo} w="50px" h="50px" objectFit="contain" borderRadius={12} mr={3} />
                                        <Text
                                            fontSize={{ base: "3xl", md: "4xl" }}
                                            fontWeight="800"
                                            color={titleColor}
                                            letterSpacing="-0.04em"
                                            lineHeight={1}
                                            mb={2}
                                            my={"auto"}
                                        >
                                            {featured.name}
                                        </Text>
                                    </Flex>

                                    {/* Tagline */}
                                    <Text
                                        fontSize={{ base: "sm", md: "md" }}
                                        color={A}
                                        fontWeight="500"
                                        mb={4}
                                        opacity={0.8}
                                    >
                                        {featured.tagline}
                                    </Text>

                                    {/* Description */}
                                    <Text
                                        fontSize="sm"
                                        color={mutedColor}
                                        lineHeight="1.8"
                                        maxW="520px"
                                        mb={6}
                                    >
                                        {featured.description}
                                    </Text>

                                    {/* Stack pills */}
                                    <Flex gap={2} wrap="wrap" mb={6}>
                                        {featured.stack.map((tech, i) => (
                                            <Box
                                                key={i}
                                                px={3} py={1}
                                                borderRadius="full"
                                                border="1px solid"
                                                borderColor={A + "44"}
                                                bg={A + "10"}
                                            >
                                                <Text fontSize="2xs" fontWeight="600" color={A}>{tech}</Text>
                                            </Box>
                                        ))}
                                    </Flex>
                                </Box>

                                {/* Right — visual */}
                                <Box
                                    flexShrink={0}
                                    w={{ base: "100%", md: "220px" }}
                                    h={{ base: "160px", md: "220px" }}
                                    borderRadius="2xl"
                                    border="1px solid"
                                    borderColor={A + "33"}
                                    bg={isDark ? `${A}0f` : `${A}08`}
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    justifyContent="center"
                                    gap={3}
                                    position="relative"
                                    overflow="hidden"
                                >
                                    <Box
                                        w="64px" h="64px"
                                        borderRadius="2xl"
                                        bg={A + "18"}
                                        border="1px solid"
                                        borderColor={A + "44"}
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <FaLock size={28} color={A} />
                                    </Box>

                                    <Text fontSize="xs" color={A} fontWeight="600" opacity={0.7}>
                                        {featured.visualLabel}
                                    </Text>

                                    {featured.demo && (
                                        <Flex
                                            align="center"
                                            gap={1.5}
                                            px={3} py={1.5}
                                            borderRadius="full"
                                            border="1px solid"
                                            borderColor={A + "55"}
                                            bg={A + "12"}
                                            cursor="pointer"
                                            transition="all 0.2s"
                                            _hover={{ bg: A + "28", borderColor: A + "99" }}
                                            onClick={() => window.open(featured.demo, "_blank")}
                                        >
                                            <FaExternalLinkAlt size={9} color={A} />
                                            <Text fontSize="2xs" fontWeight="600" color={A}>
                                                Visit Site
                                            </Text>
                                        </Flex>
                                    )}

                                    {[...Array(3)].map((_, i) => (
                                        <Box
                                            key={i}
                                            position="absolute"
                                            w="4px" h="4px"
                                            borderRadius="full"
                                            bg={A}
                                            opacity={0.2 + i * 0.1}
                                            top={`${20 + i ** 2 * 30}%`}
                                            right={`${10 + i * 8}%`}
                                        />
                                    ))}
                                </Box>
                            </Flex>
                        </Box>
                    );
                })}

                {/* Other Projects Grid */}
                <Box
                    display="grid"
                    gridTemplateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                    gap={4}
                >
                    {data.projects.map((project, i) => (
                        <SmallCard
                            key={project.name}
                            project={project}
                            index={i}
                            isDark={isDark}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default Projects;