// ExperienceCard.jsx
import { Box, Collapse, Flex, IconButton, Image, ListItem, Text, UnorderedList, useColorModeValue } from "@chakra-ui/react";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import { useState } from "react";

function ExperienceCard({ data }) {
  const [open, setOpen] = useState(false);
  const color = useColorModeValue("gray.200", "gray.800");
  const bgHover = useColorModeValue("gray.900", "gray.100");
  const divColor = useColorModeValue("gray.900", "gray.200");

  return (
    <Flex direction="column" color={color} p={4} rounded="xl" transition="background 0.2s ease" _hover={{ bg: bgHover }} mb={2}>
      <Flex gap={{ base: 4, xl: 10 }}>
        <Box>
        <Image src={data.logo} alt={`${data.company} logo`} maxW={{ base: "70px", xl: "100px" }} rounded="md" />
        </Box>
        <Flex my="auto" direction="column" gap={{ base: 0, xl: 1 }}>
          <Text color={color} fontSize={{ base: "md", xl: "2xl" }} fontWeight="bold">{data.role}</Text>
          <Text color={color} fontSize={{ base: "xs", xl: "md" }}>{data.company}</Text>
          <Text fontSize="xs" color="gray.500">{data.dates} • {data.type} • {data.location}</Text>

          <Box display={{ base: "none", md: "block" }} borderLeft="1px" borderColor={divColor} mt={2} mx={1} px={3}>
            <UnorderedList>
              {data.bullets.map((item, idx) => <ListItem key={idx} textAlign="justify" fontSize={{ base: "xs", md: "sm" }}>{item}</ListItem>)}
            </UnorderedList>
          </Box>
        </Flex>
      </Flex>

      {/* MOBILE bullets (slide) */}
      <Collapse in={open} animateOpacity>
        <Box display={{ base: "block", md: "none" }} borderLeft="1px" borderColor={divColor} mt={4} px={{lg:3}}>
          <UnorderedList>
            {data.bullets.map((item, idx) => <ListItem key={idx} textAlign="justify" fontSize="xs">{item}</ListItem>)}
          </UnorderedList>
        </Box>
      </Collapse>
      {/* MOBILE chevron toggle */}
      <Flex display={{ base: "flex", md: "none" }} justify="center" mt={2} onClick={() => setOpen(!open)}>
        <Box color="gray.500">
            {open ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
        </Box>
      </Flex>

    </Flex>
  );
}

export default ExperienceCard;
