import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import SkillBento from "./SkillBento";

const ACCENT = "#6C63FF";

function Skills() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const titleColor = isDark ? "#fff" : "#000";

  return (
    <Box w="100%">
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
            Stack
          </Text>
          <Text
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="800"
            color={titleColor}
            letterSpacing="-0.03em"
          >
            Skills
          </Text>
        </Box>
      </Flex>
      <SkillBento />
    </Box>
  )
}

export default Skills;