import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import data from "../../db";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const ACCENT = "#6C63FF";

const SOCIAL_ICONS = {
  LinkedIn:  FaLinkedin,
  GitHub:    FaGithub,
  Instagram: FaInstagram,
};

function Footer() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const bg          = isDark ? "#000" : "#fff";
  const borderColor = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";
  const titleColor  = isDark ? "#fff" : "#000";
  const mutedColor  = isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)";
  const iconColor   = isDark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.4)";

  return (
    <Box
      bg={bg}
      borderTop="1px solid"
      borderColor={borderColor}
      position="relative"
      overflow="hidden"
    >
      {/* Subtle background glow */}
      <Box
        position="absolute"
        bottom="-60px"
        left="50%"
        transform="translateX(-50%)"
        w="400px"
        h="200px"
        borderRadius="full"
        bg={ACCENT}
        opacity={isDark ? 0.05 : 0.03}
        filter="blur(80px)"
        pointerEvents="none"
      />

      <Box
        maxW="900px"
        mx="auto"
        px={{ base: 6, md: "5%" }}
        py={{ base: 10, md: 12 }}
        position="relative"
        zIndex={1}
        animation={`${fadeUp} 0.5s ease both`}
      >
        {/* Top row — name + tagline left, socials right */}
        <Flex
          justify="space-between"
          align="flex-start"
          direction={{ base: "column", md: "row" }}
          gap={6}
          mb={8}
        >
          {/* Name + tagline */}
          <Box>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="800"
              color={titleColor}
              letterSpacing="-0.03em"
              mb={1}
            >
              {data.contact.name}
            </Text>
            <Text fontSize="sm" color={mutedColor} maxW="320px" lineHeight="1.6">
              {data.contact.tagline}
            </Text>
          </Box>

          {/* Socials */}
          <Flex gap={3} align="center" mt={{ base: 0, md: 1 }}>
            {data.contact.socials.map(({ label, url }) => {
              const Icon = SOCIAL_ICONS[label];
              return (
                <Box
                  key={label}
                  w="38px" h="38px"
                  borderRadius="xl"
                  border="1px solid"
                  borderColor={borderColor}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  cursor="pointer"
                  color={iconColor}
                  transition="all 0.2s"
                  _hover={{
                    borderColor: ACCENT + "66",
                    color: ACCENT,
                    bg: ACCENT + "12",
                    transform: "translateY(-2px)",
                  }}
                  onClick={() => window.open(url, "_blank")}
                  aria-label={label}
                >
                  <Icon size={16} />
                </Box>
              );
            })}
          </Flex>
        </Flex>

        {/* Divider */}
        <Box h="1px" bg={borderColor} mb={6} />

        {/* Bottom row — resume left, copyright right */}
        <Flex
          justify="space-between"
          align="center"
          direction={{ base: "column", md: "row" }}
          gap={4}
        >
          {/* Resume download */}
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
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            <HiDownload size={14} color={ACCENT} />
            <Text fontSize="xs" fontWeight="600" color={ACCENT} onClick={() => window.open(data.contact.resume, "_blank")}>
              Download Résumé
            </Text>
          </Flex>

          {/* Copyright */}
          <Text fontSize="xs" color={mutedColor} letterSpacing="0.02em">
            © {new Date().getFullYear()} {data.contact.name}. All rights reserved.
          </Text>
          <Text fontSize="xs" color={mutedColor} letterSpacing="0.02em">
            Best viewed in dark mode.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;