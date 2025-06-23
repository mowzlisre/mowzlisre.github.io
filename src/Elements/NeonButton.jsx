import { Button, useColorModeValue } from "@chakra-ui/react";
import { glowAnimation } from "../helper"; // you're already using this

function NeonButton({ children, leftIcon, onClick }) {
  const bgColor = useColorModeValue("#111", "#fff");   // dark bg in light mode, white bg in dark mode
  const textColor = useColorModeValue("#000", "#fff"); // inverted text color

  return (
    <Button
      leftIcon={leftIcon}
      onClick={onClick}
      px="28px"
      py="14px"
      borderRadius="full"     // pill shape
      fontWeight="600"
      fontSize="md"
      bg={"#ffffff00"}
      color={textColor}
      transition="all 0.3s ease"
      boxShadow="md"
      sx={{
        animation: `${glowAnimation} 3s ease-in-out infinite`,
        _hover: {
          animation: `${glowAnimation} 3s ease-in-out infinite`,
          transform: "scale(1.03)",
          boxShadow: "0 0 10px rgba(0, 128, 255, 0.6), 0 0 10px rgba(255, 0, 128, 0.4)",
        },
      }}
    >
      {children}
    </Button>
  );
}

export default NeonButton;
