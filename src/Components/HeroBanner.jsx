import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { CiLocationOn } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import NeonButton from "../Elements/NeonButton";
import { HiDownload } from "react-icons/hi";
import data from "../../db";

const ACCENT = "#6C63FF";

const meshMove1 = keyframes`
  0%   { transform: translate(0%, 0%) scale(1); }
  33%  { transform: translate(8%, -12%) scale(1.15); }
  66%  { transform: translate(-6%, 8%) scale(0.95); }
  100% { transform: translate(0%, 0%) scale(1); }
`;
const meshMove2 = keyframes`
  0%   { transform: translate(0%, 0%) scale(1); }
  33%  { transform: translate(-10%, 6%) scale(1.1); }
  66%  { transform: translate(7%, -10%) scale(1.05); }
  100% { transform: translate(0%, 0%) scale(1); }
`;
const meshMove3 = keyframes`
  0%   { transform: translate(0%, 0%) scale(1.05); }
  50%  { transform: translate(5%, 10%) scale(0.95); }
  100% { transform: translate(0%, 0%) scale(1.05); }
`;
const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;
const blink = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
`;

function HeroBanner() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const bg = isDark ? "#000" : "#fff";
  const blob1 = isDark ? "#6C63FF" : "#6C63FF";
  const blob2 = isDark ? "#EC4899" : "#EC4899";
  const blob3 = isDark ? "#3B82F6" : "#3B82F6";
  const nameColor = isDark ? "#fff" : "#000";
  const tagline = isDark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.4)";
  const bioColor = isDark ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.6)";
  const statVal = isDark ? "#fff" : "#000";
  const statLbl = isDark ? "rgba(255,255,255,0.38)" : "rgba(0,0,0,0.38)";
  const divider = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const iconColor = isDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.4)";

  return (
    <Box
      position="relative"
      minH={{ base: "100svh", md: "100vh" }}
      bg={bg}
      overflow="hidden"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      {/* Animated gradient mesh blobs */}
      <Box position="absolute" inset={0} pointerEvents="none" overflow="hidden">
        <Box
          position="absolute"
          top="-20%"
          left="-10%"
          w={{ base: "60vw", lg: "45vw" }}
          h={{ base: "60vw", lg: "45vw" }}
          borderRadius="full"
          bg={blob1}
          opacity={isDark ? 0.12 : 0.07}
          filter="blur(80px)"
          animation={`${meshMove1} 18s ease-in-out infinite`}
        />
        <Box
          position="absolute"
          bottom="-20%"
          right="-10%"
          w={{ base: "55vw", lg: "40vw" }}
          h={{ base: "55vw", lg: "40vw" }}
          borderRadius="full"
          bg={blob2}
          opacity={isDark ? 0.1 : 0.06}
          filter="blur(90px)"
          animation={`${meshMove2} 22s ease-in-out infinite`}
        />
        <Box
          position="absolute"
          top="40%"
          left="40%"
          w={{ base: "40vw", lg: "30vw" }}
          h={{ base: "40vw", lg: "30vw" }}
          borderRadius="full"
          bg={blob3}
          opacity={isDark ? 0.08 : 0.05}
          filter="blur(70px)"
          animation={`${meshMove3} 15s ease-in-out infinite`}
        />
      </Box>

      {/* Content */}
      <Flex
        direction="column"
        maxW="760px"
        mx="auto"
        px={{ base: 6, md: "5%" }}
        py={{ base: 24, md: 0 }}
        position="relative"
        zIndex={1}
        w="100%"
      >
        {/* Tagline pill */}
        <Box
          display="inline-flex"
          alignSelf="flex-start"
          px={3}
          py={1}
          borderRadius="full"
          border="1px solid"
          borderColor={divider}
          mb={6}
          animation={`${fadeSlideUp} 0.6s ease both`}
          style={{ animationDelay: "0ms" }}
          alignItems={"center"}
        >
          <CiLocationOn size={14} color={iconColor} style={{ marginRight: 4 }} />
          <Text fontSize="xs" color={tagline} letterSpacing="0.08em" textTransform="uppercase">
            {data.contact.location}
          </Text>
        </Box>

        {/* Name */}
        <Text
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl", lg: "7xl" }}
          fontWeight="800"
          color={nameColor}
          letterSpacing="-0.03em"
          lineHeight="1.05"
          mb={5}
          animation={`${fadeSlideUp} 0.6s ease both`}
          style={{ animationDelay: "80ms" }}
        >
          {data.contact.name.split(" ").slice(0, 2).join(" ")}

          <br />{data.contact.name.split(" ").slice(2).join(" ")}
          <Box
            as="span"
            display="inline-block"
            w="3px"
            h={{ base: "0.8em", md: "1em" }}
            bg={blob1}
            ml={2}
            verticalAlign="middle"
            borderRadius="full"
            animation={`${blink} 1.2s step-end infinite`}
          />
        </Text>

        {/* Bio */}
        <Text
          fontSize={{ base: "sm", md: "md" }}
          color={bioColor}
          lineHeight="1.8"
          maxW="580px"
          mb={8}
          animation={`${fadeSlideUp} 0.6s ease both`}
          style={{ animationDelay: "160ms" }}
        >
          {data.hero.bio}
        </Text>

        {/* CTAs */}
        <Flex
          gap={4}
          align="center"
          mb={12}
          animation={`${fadeSlideUp} 0.6s ease both`}
          style={{ animationDelay: "240ms" }}
        >
          <NeonButton borderRadius="full" onClick={() => window.open(`mailto:${data.contact.email}`)}>
            <Text fontSize="sm" px={1}>Say Hi 👋</Text>
          </NeonButton>
          <Flex
            align="center"
            gap={2}
            px={4} py={2}
            borderRadius="full"
            border="1px solid"
            borderColor={ACCENT + "44"}
            bg={ACCENT + "10"}
            cursor="pointer"
            transition="all 0.2s"
            _hover={{
              bg: ACCENT + "22",
              borderColor: ACCENT + "88",
              transform: "translateY(-1px)",
            }}
            onClick={() => window.open(data.contact.resume, "_blank")}
          >
            <HiDownload size={14} color={ACCENT} />
            <Text fontSize="xs" fontWeight="600" color={ACCENT}>
              Download Résumé
            </Text>
          </Flex>
          <Flex gap={4} align="center">
            <Box
              role="button"
              color={iconColor}
              transition="color 0.2s"
              _hover={{ color: nameColor }}
              onClick={() => window.open(data.contact.linkedin, "_blank")}
            >
              <FaLinkedin size={20} />
            </Box>
            <Box
              role="button"
              color={iconColor}
              transition="color 0.2s"
              _hover={{ color: nameColor }}
              onClick={() => window.open(data.contact.github, "_blank")}
            >
              <FaGithub size={20} />
            </Box>
          </Flex>

        </Flex>

        {/* Stats row */}

      </Flex>

      {/* Bottom gradient fade into next section */}
      <Box
        position="absolute"
        bottom={0} left={0} right={0}
        h="120px"
        bgGradient={isDark
          ? "linear(to-b, transparent, black)"
          : "linear(to-b, transparent, white)"
        }
        pointerEvents="none"
      />
    </Box>
  );
}

export default HeroBanner;