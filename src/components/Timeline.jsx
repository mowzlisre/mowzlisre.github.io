import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { Chrono } from "react-chrono";
import "../index.css"
import { AFRCard, AchaaryaTechCard, FoodDesertCard, GCEGradCard, GWUJoinCard, NYCTaxiCard, Neo4jCard, Neo4jVsMongoCard, SkillSafariCard } from "./Cards";
import { FaCircle } from "react-icons/fa6";

const CustomTitle = ({ title, subtitle }) => {
    return (
        <>
            <Box textAlign={'center'}>
                <Text fontSize={[9, 10, 12, 14, 16, 18, 20, 22, 24]} w="100%" maxW="100%" color={"red"}>{title}</Text>
                <Text fontSize={[6, 8, 10]} w="100%" maxW="100%" color={"gray"} fontStyle={'italic'}>{subtitle}</Text>
            </Box>
        </>
    )
}


export const Timeline = () => {
    const isVertical = useBreakpointValue({ base: true, lg: false });
    const items = [
        {
            title: <CustomTitle title={"Open Source"} subtitle={"Jan, 2024 - *"}/> ,
            component: <Neo4jCard/>
        },
        {
            title: <CustomTitle title={"Academic Project"} subtitle={"Dec, 2023"}/>,
            component: <FoodDesertCard/>
        },
        {
            title: <CustomTitle title={"Academic Project"} subtitle={"Dec, 2023"}/>,
            component: <Neo4jVsMongoCard/>
        },
        {
            title: <CustomTitle title={"Academic Project"} subtitle={"Dec, 2023"}/>,
            component: <NYCTaxiCard/>
        },
        {
            title: <CustomTitle title={"Masters"} subtitle={"Aug, 2023"}/>,
            component: <GWUJoinCard/>
        },
        {
            title: <CustomTitle title={"Startup"} subtitle={"Jul, 2021 - Jan, 2023"}/>,
            component: <AchaaryaTechCard/>
        },
        {
            title: <CustomTitle title={"Undergrad"} subtitle={"Jul, 2022"}/>,
            component: <GCEGradCard/>
        },
        {
            title: <CustomTitle title={"Internship"} subtitle={"June, 2020 - June, 2021"}/>,
            component: <SkillSafariCard/>
        },
        {
            title: <CustomTitle title={"Academic Project"} subtitle={"May, 2022"}/>,
            component: <AFRCard/>
        },
    ]
    return (
        <>
            <Text mt={10} textAlign={"center"} fontSize={'3xl'} fontWeight={'bold'} color={"red"}>Activity</Text>
            <Flex mt={5} justifyContent={'center'}>
                <Box width={{base: "100%", md: "80%", lg: "100%", xl:"100%"}} id="chrono-wrapper">
                    <Chrono
                        mode={isVertical ? "VERTICAL" : "VERTICAL_ALTERNATING"}
                        items={items}
                        hideControls="false"
                        useReadMore={false}
                        cardHeight={"auto"}
                        theme={{
                            primary: "red",
                            secondary: "transparent",
                            cardBgColor: "transparent",
                            color: "black",

                        }}

                    >
                        {
                            items.map((item, index) => (
                                <Flex key={index} width={"auto"}>
                                    {item.component}
                                </Flex>
                            ))
                        }
                        <div className="chrono-icons">
                            {
                                items.map((item, index) => (
                                    <FaCircle key={index} style={{cursor: "none"}} color="red"/>
                                ))
                            }
                        </div>
                    </Chrono>
                </Box>
            </Flex>
        </>
    );
};
