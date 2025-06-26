import React, { useState } from "react";
import { Box, Flex, Grid, Image, Text, useColorModeValue } from "@chakra-ui/react";

const GlassyGrid = ({ cols, items }) => {
  const [hovered, setHovered] = useState(null);

  const templateColumns =
    typeof cols === "number"
      ? `repeat(${cols}, 1fr)`
      : Array.isArray(cols)
      ? cols.map(c => (c ? `repeat(${c}, 1fr)` : null))
      : Object.fromEntries(Object.entries(cols).map(([bp, c]) => [bp, `repeat(${c}, 1fr)`]));

  return (
    <Box position="relative" w="100%" px={{ base: 5, md: 0 }}>
      <Grid templateColumns={templateColumns} w="100%" mx="auto" gap={{ base: 3, md: 4 }}>
        {items.map((item, idx) => {
          const isHovered = hovered === idx;
          return (
            <Flex
              key={idx}
              direction="column"
              justify="center"
              textAlign="center"
              bg="#fff"
              mx="auto"
              aspectRatio="1 / 1"
              w="100%"
              h="100%"
              borderRadius="2xl"
              boxShadow="lg"
              transition="transform 0.3s ease, filter 0.3s ease" 
              transform={isHovered ? "scale(1.1)" : "scale(1)"}
              filter={{ base: "none", lg: isHovered ? "grayscale(0%)" : "grayscale(100%)"} }
              _hover={{ cursor: "pointer" }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              zIndex={isHovered ? 1 : 0}
            >
              <Image
                src={item.logo}
                mx="auto"
                width={{ base: "100%", lg: "150px" }}
                borderRadius="xl"
              />
              <Text display={{ base: "none", md: "block" }} fontSize="xl" fontWeight="350" color={"gray.700"}>
                {item.name}
              </Text>
            </Flex>
          );
        })}
      </Grid>
    </Box>
  );
};

export default GlassyGrid;
