import React, { useState } from "react";
import { Box, Grid, Flex, Image, Text } from "@chakra-ui/react";

const GlassyGrid = ({ cols, items }) => {
  const [hovered, setHovered] = useState(null);

  const templateColumns =
    typeof cols === "number"
      ? `repeat(${cols}, 1fr)`
      : Array.isArray(cols)
      ? cols.map(c => (c ? `repeat(${c}, 1fr)` : null))
      : Object.fromEntries(Object.entries(cols).map(([bp, c]) => [bp, `repeat(${c}, 1fr)`]));

  return (
    <Box position="relative" w="100%" px={{ base: 3, md: 0 }}>
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", lg: templateColumns }}
        w="100%"
        mx="auto"
        gap={{ base: 3, md: 4 }}
      >
        {items.map((item, idx) => {
          const isHovered = hovered === idx;
          return (
            <Flex
              key={idx}
              direction="column"
              justify="center"
              align="center"
              textAlign="center"
              bg="#fff"
              mx="auto"
              aspectRatio="1 / 1"
              w="100%"
              borderRadius="2xl"
              boxShadow="lg"
              transition="transform 0.3s ease, filter 0.3s ease"
              transform={isHovered ? "scale(1.1)" : "scale(1)"}
              filter={{ base: "none", lg: isHovered ? "grayscale(0%)" : "grayscale(100%)" }}
              _hover={{ cursor: "pointer" }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              zIndex={isHovered ? 1 : 0}
              p={{ base: 2, md: 4 }}
              gap={2}
              overflow="hidden"
            >
              <Image
                src={item.logo}
                width={{ base: "50%", lg: "60%" }}
                borderRadius="xl"
                objectFit="contain"
                flexShrink={0}
              />
              <Text
                fontSize={{ base: "xs", lg: "sm" }}
                fontWeight="350"
                color="gray.700"
                noOfLines={2}
                w="100%"
              >
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