import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { Box, Button, useColorMode } from '@chakra-ui/react';
import { Home } from "./components/Home";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Aboutme } from "./components/Aboutme";
import { Timeline } from "./components/Timeline";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const options = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: "#ff0000"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 1
      },
      size: {
        value: 2
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ff0000",
        opacity: 0.4,
        width: .5
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out"
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        }
      }
    }
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);



  return (
    <Box>
      <Button onClick={toggleColorMode} position={'fixed'} top={5} right={5} zIndex={5}>
          {colorMode === "light" ? <MdDarkMode/> : <MdLightMode/>} 
      </Button>
      <Particles options={options} init={particlesInit} style={{zIndex: 0}} />
      {/* <AnimateCursor/> */}
      <Home />
      <Aboutme/>
      <Timeline/>
      {/* <FloatBar/> */}
    </Box>
  );
}

export default App;
