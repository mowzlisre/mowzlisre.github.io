import { Box, Flex, Image, Text, useColorMode } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import data from "../../../db";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

function Education() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const titleColor       = isDark ? "#fff" : "#000";
  const cardBg           = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)";
  const cardBorder       = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";
  const mutedColor       = isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)";
  const dividerColor     = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";
  const degreeColor      = isDark ? "rgba(255,255,255,0.88)" : "rgba(0,0,0,0.85)";
  const institutionColor = isDark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.55)";
  const ACCENT           = "#6C63FF";

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
            Background
          </Text>
          <Text
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="800"
            color={titleColor}
            letterSpacing="-0.03em"
          >
            Education & Achievements
          </Text>
        </Box>
      </Flex>

      {/* Split Bento */}
      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", lg: "5fr 4fr" }}
        gap={4}
        px={{ base: 5, lg: 0 }}
        alignItems="stretch"
      >
        {/* LEFT — Education Card */}
        <Box
          bg={cardBg}
          border="1px solid"
          borderColor={cardBorder}
          borderRadius="2xl"
          p={{ base: 6, md: 8 }}
          position="relative"
          overflow="hidden"
          animation={`${fadeUp} 0.5s ease both`}
          role="group"
          _hover={{
            borderColor: ACCENT + "44",
            boxShadow: `0 24px 48px ${ACCENT}12`,
          }}
          transition="all 0.35s cubic-bezier(0.4,0,0.2,1)"
        >
          <Box
            position="absolute"
            bottom="-60px" right="-60px"
            w="220px" h="220px"
            borderRadius="full"
            bg={ACCENT}
            opacity={0.05}
            filter="blur(60px)"
            transition="opacity 0.4s"
            _groupHover={{ opacity: 0.13 }}
            pointerEvents="none"
          />
          <Box
            position="absolute"
            top={0} left={0} right={0}
            h="2px"
            bgGradient={`linear(to-r, transparent, ${ACCENT}88, transparent)`}
            opacity={0}
            transition="opacity 0.35s"
            _groupHover={{ opacity: 1 }}
          />

          <Text
            fontSize="2xs"
            fontWeight="600"
            letterSpacing="0.1em"
            textTransform="uppercase"
            color={ACCENT}
            opacity={0.65}
            mb={8}
          >
            Education
          </Text>

          <Flex direction="column" gap={0} position="relative">
            {data.education.map((edu, i) => (
              <Box key={i} position="relative">
                {i < data.education.length - 1 && (
                  <Box
                    position="absolute"
                    left="36px"
                    top="72px"
                    bottom="-48px"
                    w="1px"
                    bgGradient={`linear(to-b, ${ACCENT}44, transparent)`}
                  />
                )}
                <Flex gap={5} mb={i < data.education.length - 1 ? 12 : 0} align="flex-start">
                  <Box
                    flexShrink={0}
                    w={{ base: "56px", md: "72px" }}
                    h={{ base: "56px", md: "72px" }}
                    borderRadius="xl"
                    overflow="hidden"
                    border="1px solid"
                    borderColor={cardBorder}
                    bg="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    p={1.5}
                  >
                    <Image src={edu.logo} w="100%" h="100%" objectFit="contain" />
                  </Box>
                  <Box flex={1}>
                    <Text
                      fontSize={{ base: "md", md: "lg" }}
                      fontWeight="700"
                      color={degreeColor}
                      letterSpacing="-0.02em"
                      mb={1}
                      lineHeight="1.2"
                    >
                      {edu.degree}
                    </Text>
                    <Text
                      fontSize={{ base: "sm", md: "md" }}
                      color={institutionColor}
                      mb={2}
                      lineHeight="1.4"
                    >
                      {edu.institution}
                    </Text>
                    <Flex align="center" gap={2} wrap="wrap">
                      <Box
                        px={2.5} py={0.5}
                        borderRadius="full"
                        border="1px solid"
                        borderColor={ACCENT + "44"}
                        bg={ACCENT + "12"}
                      >
                        <Text fontSize="2xs" fontWeight="600" color={ACCENT}>
                          {edu.graduation}
                        </Text>
                      </Box>
                      <Text fontSize="xs" color={mutedColor}>
                        {edu.location}
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            ))}
          </Flex>

          <Box h="1px" bg={dividerColor} mt={10} mb={6} />

          <Flex gap={8} px={2} wrap="wrap">
            {[
              { value: "4+", label: "Years in Tech" },
              { value: "2",  label: "Degrees" },
              { value: "6",  label: "Achievements" },
            ].map((stat, i) => (
              <Box key={i}>
                <Text fontSize="2xl" fontWeight="800" color={titleColor} letterSpacing="-0.03em" lineHeight={1} mb={1}>
                  {stat.value}
                </Text>
                <Text fontSize="2xs" color={mutedColor} textTransform="uppercase" letterSpacing="0.06em">
                  {stat.label}
                </Text>
              </Box>
            ))}
          </Flex>
        </Box>

        {/* RIGHT — Achievement Grid */}
        <Box
          display="grid"
          gridTemplateColumns="repeat(2, 1fr)"
          gap={4}
          alignContent="start"
        >
          {data.achievements.map((item, i) => (
            <Box
              key={i}
              bg={cardBg}
              border="1px solid"
              borderColor={cardBorder}
              borderRadius="2xl"
              p={4}
              position="relative"
              overflow="hidden"
              animation={`${fadeUp} 0.5s ease both`}
              style={{ animationDelay: `${(i + 1) * 60}ms` }}
              role="group"
              transition="all 0.3s cubic-bezier(0.4,0,0.2,1)"
              _hover={{
                borderColor: item.accent + "55",
                transform: "translateY(-4px)",
                boxShadow: `0 20px 40px ${item.accent}14`,
              }}
            >
              <Box
                position="absolute"
                top={0} left={0} right={0}
                h="2px"
                bgGradient={`linear(to-r, transparent, ${item.accent}99, transparent)`}
                opacity={0}
                transition="opacity 0.3s"
                _groupHover={{ opacity: 1 }}
              />
              <Box
                position="absolute"
                bottom="-20px" right="-20px"
                w="80px" h="80px"
                borderRadius="full"
                bg={item.accent}
                opacity={0.05}
                filter="blur(25px)"
                transition="opacity 0.3s"
                _groupHover={{ opacity: 0.15 }}
                pointerEvents="none"
              />

              {/* Logo */}
              <Box
                w="40px" h="40px"
                borderRadius="lg"
                overflow="hidden"
                borderColor={cardBorder}
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={3}
                flexShrink={0}
              >
                <Image
                  src={item.logo}
                  w="100%"
                  h="100%"
                  objectFit="contain"
                />
              </Box>

              <Text
                fontSize="xs"
                fontWeight="700"
                color={degreeColor}
                letterSpacing="-0.01em"
                mb={1}
                lineHeight="1.3"
                noOfLines={2}
              >
                {item.title}
              </Text>

              <Text
                fontSize="2xs"
                color={mutedColor}
                lineHeight="1.4"
                mb={3}
                noOfLines={2}
              >
                {item.issuer}
              </Text>

              <Box display="inline-flex">
                <Box
                  px={2.5} py={0.5}
                  borderRadius="full"
                  border="1px solid"
                  borderColor={item.accent + "44"}
                  bg={item.accent + "12"}
                >
                  <Text fontSize="2xs" fontWeight="600" color={item.accent} letterSpacing="0.04em">
                    {item.date}
                  </Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Education;