import { Box, Flex, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";

import { keyframes } from "@emotion/react";


const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;


const ACCENT = "#6C63FF";

export default function ExperienceCard({ item, role, index, isDark, isActive, onClick }) {
  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)";
  const cardBorder = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";
  const activeBorder = ACCENT + "66";
  const titleColor = isDark ? "rgba(255,255,255,0.92)" : "rgba(0,0,0,0.88)";
  const mutedColor = isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)";
  const tagBg = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)";
  const tagBorder = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)";
  const tagColor = isDark ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.6)";

  return (
    <Box
      flexShrink={0}
      w={{ base: "280px", md: "320px" }}
      bg={isActive ? (isDark ? "rgba(108,99,255,0.08)" : "rgba(108,99,255,0.05)") : cardBg}
      border="1px solid"
      borderColor={isActive ? activeBorder : cardBorder}
      borderRadius="2xl"
      p={5}
      cursor="pointer"
      position="relative"
      overflow="hidden"
      transition="all 0.3s cubic-bezier(0.4,0,0.2,1)"
      animation={`${fadeUp} 0.5s ease both`}
      style={{ animationDelay: `${index * 80}ms` }}
      onClick={onClick}
      _hover={{
        borderColor: activeBorder,
        transform: "translateY(-4px)",
        boxShadow: `0 20px 40px ${ACCENT}14`,
      }}
    >
      {/* Top accent line on active */}
      <Box
        position="absolute"
        top={0} left={0} right={0}
        h="2px"
        bgGradient={`linear(to-r, transparent, ${ACCENT}99, transparent)`}
        opacity={isActive ? 1 : 0}
        transition="opacity 0.3s"
      />

      {/* Glow blob */}
      <Box
        position="absolute"
        top="-30px" right="-30px"
        w="100px" h="100px"
        borderRadius="full"
        bg={ACCENT}
        opacity={isActive ? 0.1 : 0.04}
        filter="blur(35px)"
        transition="opacity 0.3s"
        pointerEvents="none"
      />

      {/* Logo + Company */}
      <Flex align="center" gap={3} mb={4}>
        {item.logo ? (
          <Image
            src={item.logo}
            boxSize="40px"
            borderRadius="lg"
            objectFit="cover"
            flexShrink={0}
            border="1px solid"
            borderColor={cardBorder}
          />
        ) : (
          <Box
            boxSize="40px"
            borderRadius="lg"
            bg={ACCENT + "22"}
            border="1px solid"
            borderColor={ACCENT + "44"}
            flexShrink={0}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="lg" lineHeight={1}>🏢</Text>
          </Box>
        )}
        <Box minW={0}>
          <Text
            fontSize="sm"
            fontWeight="700"
            color={titleColor}
            letterSpacing="-0.01em"
            noOfLines={1}
          >
            {item.company}
          </Text>
          <Text fontSize="xs" color={mutedColor} noOfLines={1}>
            {item.location}
          </Text>
        </Box>
      </Flex>

      {/* Role */}
      <Text
        fontSize="sm"
        fontWeight="600"
        color={isActive ? ACCENT : titleColor}
        letterSpacing="-0.01em"
        mb={1}
        transition="color 0.3s"
        noOfLines={2}
      >
        {role.role}
      </Text>

      {/* Dates + Type */}
      <Flex align="center" gap={2} mb={4}>
        <Text fontSize="xs" color={mutedColor}>{role.dates}</Text>
        <Box w="3px" h="3px" borderRadius="full" bg={mutedColor} />
        <Text fontSize="xs" color={mutedColor}>{role.type}</Text>
      </Flex>

      {/* Stack pills */}
      {role.stack && (
        <Wrap spacing={1.5}>
          {role.stack.slice(0, 5).map((tech, i) => (
            <WrapItem key={i}>
              <Box
                px={2.5} py={0.5}
                borderRadius="full"
                bg={isActive ? ACCENT + "18" : tagBg}
                border="1px solid"
                borderColor={isActive ? ACCENT + "44" : tagBorder}
                transition="all 0.3s"
              >
                <Text fontSize="2xs" fontWeight="500" color={isActive ? ACCENT : tagColor}>
                  {tech}
                </Text>
              </Box>
            </WrapItem>
          ))}
          {role.stack.length > 5 && (
            <WrapItem>
              <Box px={2.5} py={0.5} borderRadius="full" bg={tagBg} border="1px solid" borderColor={tagBorder}>
                <Text fontSize="2xs" color={mutedColor}>+{role.stack.length - 5}</Text>
              </Box>
            </WrapItem>
          )}
        </Wrap>
      )}
    </Box>
  );
}