import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import { useRef, useState } from "react";
import data from "../../../db";
import ExperienceCard from "./ExperienceCard";
import { keyframes } from "@emotion/react";


const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const cometTrail = keyframes`
  0%   { width: 0%; opacity: 0; }
  20%  { opacity: 1; }
  100% { width: 100%; opacity: 1; }
`;
const ACCENT = "#6C63FF";

const cometGlow = keyframes`
  0%, 100% { box-shadow: 0 0 6px 2px ${ACCENT}88, 0 0 12px 4px ${ACCENT}44; }
  50%       { box-shadow: 0 0 10px 4px ${ACCENT}cc, 0 0 20px 8px ${ACCENT}66; }
`;


function Experience() {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const scrollRef = useRef(null);
    const [activeIdx, setActiveIdx] = useState(0);

    const titleColor = isDark ? "#fff" : "#000";
    const mutedColor = isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)";
    const trackBg = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";

    // Flatten all roles into individual cards
    const cards = [];
    data.experience.forEach((item) => {
        item.roles.forEach((role) => {
            cards.push({ item, role });
        });
    });

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -340, behavior: "smooth" });
    };
    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 340, behavior: "smooth" });
    };

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
                        Career
                    </Text>
                    <Text
                        fontSize={{ base: "2xl", md: "3xl" }}
                        fontWeight="800"
                        color={titleColor}
                        letterSpacing="-0.03em"
                    >
                        Experience
                    </Text>
                </Box>

                {/* Scroll controls */}
                <Flex gap={2}>
                    {[{ label: "←", fn: scrollLeft }, { label: "→", fn: scrollRight }].map(({ label, fn }) => (
                        <Box
                            key={label}
                            onClick={fn}
                            role="button"
                            w="36px" h="36px"
                            borderRadius="full"
                            border="1px solid"
                            borderColor={isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            cursor="pointer"
                            fontSize="sm"
                            color={mutedColor}
                            transition="all 0.2s"
                            _hover={{
                                borderColor: ACCENT + "66",
                                color: ACCENT,
                                bg: ACCENT + "12",
                            }}
                        >
                            {label}
                        </Box>
                    ))}
                </Flex>
            </Flex>

            {/* Timeline track */}
            {/* Timeline track */}
            <Box position="relative" mb={6} px={{ base: 5, lg: 0 }}>
                <Box
                    position="relative"
                    h="20px"
                    display="flex"
                    alignItems="center"
                >
                    {/* Base track */}
                    <Box
                        position="absolute"
                        left={0} right={0}
                        h="1px"
                        bg={isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}
                    />

                    {/* Comet trail — filled portion */}
                    <Box
                        position="absolute"
                        left={0}
                        h="1px"
                        bg={`linear-gradient(to right, transparent, ${ACCENT}44, ${ACCENT})`}
                        transition="width 0.4s cubic-bezier(0.4,0,0.2,1)"
                        style={{
                            width: `${(activeIdx / Math.max(cards.length - 1, 1)) * 100}%`,
                        }}
                    />

                    {/* Comet head */}
                    <Box
                        position="absolute"
                        w="10px"
                        h="10px"
                        borderRadius="full"
                        bg={ACCENT}
                        transform="translateX(-50%)"
                        transition="left 0.4s cubic-bezier(0.4,0,0.2,1)"
                        animation={`${cometGlow} 1.8s ease-in-out infinite`}
                        style={{
                            left: `${(activeIdx / Math.max(cards.length - 1, 1)) * 100}%`,
                        }}
                        zIndex={2}
                    />

                    {/* Comet tail — fading streak behind head */}
                    <Box
                        position="absolute"
                        h="2px"
                        borderRadius="full"
                        bg={`linear-gradient(to right, transparent, ${ACCENT}22, ${ACCENT}88)`}
                        transform="translateX(-100%)"
                        transition="left 0.4s cubic-bezier(0.4,0,0.2,1)"
                        style={{
                            left: `${(activeIdx / Math.max(cards.length - 1, 1)) * 100}%`,
                            width: `${Math.min(activeIdx * 12, 80)}px`,
                        }}
                        zIndex={1}
                    />

                    {/* Station dots */}
                    {cards.map((_, i) => (
                        <Box
                            key={i}
                            position="absolute"
                            transform="translateX(-50%)"
                            style={{ left: `${(i / Math.max(cards.length - 1, 1)) * 100}%` }}
                            w={i === activeIdx ? "0px" : "5px"}
                            h={i === activeIdx ? "0px" : "5px"}
                            borderRadius="full"
                            bg={i < activeIdx
                                ? ACCENT + "88"
                                : isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)"
                            }
                            transition="all 0.3s"
                            cursor="pointer"
                            zIndex={3}
                            onClick={() => {
                                setActiveIdx(i);
                                scrollRef.current?.children[i]?.scrollIntoView({
                                    behavior: "smooth", block: "nearest", inline: "center"
                                });
                            }}
                            _hover={{ transform: "translateX(-50%) scale(1.6)", bg: ACCENT }}
                        />
                    ))}
                </Box>
            </Box>

            {/* Scrollable cards */}
            <Box
                ref={scrollRef}
                display="flex"
                gap={4}
                overflowX="auto"
                pb={4}
                px={{ base: 5, lg: 0 }}
                sx={{
                    scrollSnapType: "x mandatory",
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": { display: "none" },
                    "& > *": { scrollSnapAlign: "start" },
                }}
                onScroll={(e) => {
                    const el = e.target;
                    const cardWidth = 336;
                    const idx = Math.round(el.scrollLeft / cardWidth);
                    setActiveIdx(Math.min(idx, cards.length - 1));
                }}
            >
                {cards.map(({ item, role }, i) => (
                    <ExperienceCard
                        key={i}
                        item={item}
                        role={role}
                        index={i}
                        isDark={isDark}
                        isActive={activeIdx === i}
                        onClick={() => {
                            setActiveIdx(i);
                            scrollRef.current?.children[i]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
                        }}
                    />
                ))}
            </Box>

            {/* Active card detail — company + role full name */}
            <Box
                mt={4}
                px={{ base: 5, lg: 0 }}
                animation={`${fadeUp} 0.3s ease both`}
                key={activeIdx}
            >
                <Text fontSize="xs" color={mutedColor} letterSpacing="0.05em">
                    {activeIdx + 1} / {cards.length} · {cards[activeIdx]?.item.company} — {cards[activeIdx]?.role.role}
                </Text>
            </Box>
        </Box>
    );
}

export default Experience;