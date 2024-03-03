import { Button, VStack } from "@chakra-ui/react"
import { IoLogoAppleAr } from "react-icons/io5"
import { RiOpenSourceFill, RiRssLine } from "react-icons/ri"
import { Tooltip } from "@chakra-ui/react";
import { FaLaughWink } from "react-icons/fa";

const NTooltip = ({ label, el }) => {
  return (
    <Tooltip label={label} placement="right" bg="#00000000" shadow={'none'} color={"#E53E3E"} borderRadius={20}>
      <Button colorScheme={"red"} borderRadius={20} color={"white"} bg="rgba(229, 62, 62, 0.6)" _hover={{ bg: "#E53E3E" }} >{el}</Button>
    </Tooltip>
  );
};


export const FloatBar = () => {
    const items = [
        {
            label: "About Me",
            el: <FaLaughWink fontSize={20} />
        },
        {
            label: "Open Source",
            el: <RiOpenSourceFill fontSize={20} />
        },
        {
            label: "Projects",
            el: <IoLogoAppleAr fontSize={20} />
        },
        {
            label: "Contact",
            el: <RiRssLine fontSize={20} />
        },
    ]
    return (
        <>
            <VStack position={'fixed'} left={5} gap={3} top={"40%"}>
                {
                    items.map((item, index) => (
                        <NTooltip label={item.label} el={item.el}/>
                    ))
                }   
            </VStack>
        </>
    )
}