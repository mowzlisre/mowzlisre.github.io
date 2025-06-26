import React from "react";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import {FaPython, FaGolang, FaJava, FaHtml5, FaCss3Alt, FaReact, FaVuejs, FaSass, FaBootstrap,FaNodeJs, FaGitAlt} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandCpp, TbSql } from "react-icons/tb";
import {
  SiDart, SiMongodb, SiPostgresql, SiMariadb, SiNeo4J, SiRedis,
  SiChakraui, SiMui, SiDjango, SiFlask, SiFastapi, SiExpress,
  SiTableau, SiDocker, SiSentry, SiTrello, SiPostman, SiApache,
  SiPandas, SiNumpy, SiPytorch, SiTensorflow, SiPlotly,
  SiScikitlearn, SiApachespark, SiSpacy,
} from "react-icons/si";
import { MdOutlineApi } from "react-icons/md";


const langIcons = {
  Python: <FaPython color="seagreen" />,
  Go: <FaGolang color="deepskyblue" />,
  JavaScript: <IoLogoJavascript color="gold" />,
  "C++": <TbBrandCpp color="royalblue" />,
  SQL: <TbSql color="deeppink" />,
  Cypher: <TbSql color="purple" />,
  Dart: <SiDart color="mediumblue" />,
  Java: <FaJava color="coral" />,
};

const dbIcons = {
  MongoDB: <SiMongodb color="#4DB33D" />,
  PostgreSQL: <SiPostgresql color="#336791" />,
  MariaDB: <SiMariadb color="#003545" />,
  Neo4j: <SiNeo4J color="#008cc1" />,
  Redis: <SiRedis color="#d82c20" />,
};

const frontendIcons = {
  HTML: <FaHtml5 color="#e34f26" />,
  CSS: <FaCss3Alt color="#264de4" />,
  React: <FaReact color="#61dafb" />,
  Vue: <FaVuejs color="#41b883" />,
  Sass: <FaSass color="hotpink" />,
  Bootstrap: <FaBootstrap color="#563d7c" />,
  "Chakra UI": <SiChakraui color="#319795" />,
  "Material UI": <SiMui color="#007fff" />,
};

const backendIcons = {
  Django: <SiDjango color="#092e20" />,
  "RESTful API": <MdOutlineApi color="#319795" />,
  "Node.js": <FaNodeJs color="#3c873a" />,
  Flask: <SiFlask color="#000000" />,
  FastAPI: <SiFastapi color="#009688" />,
  "Express.js": <SiExpress color="#000000" />,
};

const toolsIcons = {
  Tableau: <SiTableau color="#00537a" />,
  Docker: <SiDocker color="#0db7ed" />,
  Sentry: <SiSentry color="#fb4226" />,
  Trello: <SiTrello color="#0079bf" />,
  Postman: <SiPostman color="#ff6c37" />,
  Git: <FaGitAlt color="#f14e32" />,
  Apache: <SiApache color="#d22128" />,
};

const libraryIcons = {
  Pandas: <SiPandas color="#150458" />,
  NumPy: <SiNumpy color="#4d77cf" />,
  PyTorch: <SiPytorch color="#ee4c2c" />,
  TensorFlow: <SiTensorflow color="#ff6f00" />,
  Plotly: <SiPlotly color="#3f4f75" />,
  "Scikit-learn": <SiScikitlearn color="#f7931e" />,
  PySpark: <SiApachespark color="#e25a1c" />,
  spaCy: <SiSpacy color="#09a3b0" />,
};


const langs = ["Python", "Go", "JavaScript", "C++", "SQL", "Cypher", "Dart", "Java"];
const databases = ["MongoDB", "PostgreSQL", "MariaDB", "Neo4j", "Redis"];
const frontend = ["HTML", "CSS", "React", "Vue", "Sass", "Bootstrap", "Chakra UI", "Material UI"];
const backend = ["Django", "RESTful API", "Node.js", "Flask", "FastAPI", "Express.js"];
const tools = ["Tableau", "Docker", "Sentry", "Trello", "Postman", "Git", "Apache"];
const libraries = ["Pandas", "NumPy", "PyTorch", "TensorFlow", "Plotly", "Scikit-learn", "PySpark", "spaCy"];


const marqueeScroll = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`;

const MarqueeRow = ({ icons, duration, reverse = false }) => {
  const track = [...icons, ...icons, ...icons, ...icons, ...icons, ...icons, ...icons, ...icons];

  return (
    <Flex as="ul" gap={3} w="max-content" whiteSpace="nowrap" animation={`${marqueeScroll} ${duration}s linear infinite${reverse ? " reverse" : ""}`} m={3}>
      {track.map((icon, idx) => (
        <Flex
          key={idx}
          bg="#fff"
          w="60px"
          h="60px"
          borderRadius="2xl"
          boxShadow="lg"
          justify="center"
          align="center"
          fontSize="2xl"
          transition="transform 0.3s ease, filter 0.3s ease"
          _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
        >
          {icon}
        </Flex>
      ))}
    </Flex>
  );
};

function Marquee() {
  const rows = [
    { arr: langs, map: langIcons, duration: 40 },
    { arr: databases, map: dbIcons, duration: 34 },
    { arr: frontend, map: frontendIcons, duration: 38 },
    { arr: backend, map: backendIcons, duration: 30 },
    { arr: tools, map: toolsIcons, duration: 36 },
    { arr: libraries, map: libraryIcons, duration: 28 },
  ];

  const shadowColor = useColorModeValue("#fffffffa", "#000000aa");

  return (
    <Box w="100%" pb={5} overflow="hidden" position="relative">
      { rows.map(({ arr, map, duration }, i) => ( <MarqueeRow key={i} icons={arr.map(name => map[name])} duration={duration}/> ))}
      <Box
        position="absolute"
        inset={0}
        pointerEvents="none"
        zIndex={1}
        _before={{ content: '""', position: "absolute", top: 0, left: 0, w: { base: 8, md: 8 }, h: "100%", bgGradient: `linear(to-r, ${shadowColor}, transparent)`, }}
        _after={{ content: '""', position: "absolute", top: 0, right: 0, w: { base: 8, md: 8 }, h: "100%", bgGradient: `linear(to-l, ${shadowColor}, transparent)`, }}
      />
    </Box>
  );
}

export default Marquee;
