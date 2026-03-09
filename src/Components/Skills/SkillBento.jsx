import { Box, Flex, Text, Tooltip, useColorMode } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import data from "../../../db";

import {
  SiPython, SiJavascript, SiGo, SiCplusplus, SiR,
  SiReact, SiVuedotjs, SiElectron, SiRedux, SiChakraui,
  SiDjango, SiFastapi, SiNodedotjs, SiExpress, SiFlask, SiGraphql,
  SiPostgresql, SiMongodb, SiRedis, SiNeo4J, SiOracle,
  SiAmazonwebservices, SiTerraform, SiApacheairflow, SiDocker, SiKubernetes, SiJenkins,
  SiLangchain, SiHuggingface, SiPytorch, SiTensorflow,
  SiScikitlearn, SiPandas, SiApachespark,
  SiJsonwebtokens, SiGithubactions,
  SiFigma,
} from "react-icons/si";
import { FaRobot, FaNetworkWired, FaBrain, FaShieldAlt, FaServer } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-4px); }
`;

// Maps skill names from db.js to their icon components
const ICON_MAP = {
  "React.js":        SiReact,
  "Vue.js":          SiVuedotjs,
  "Electron.js":     SiElectron,
  "Redux":           SiRedux,
  "Chakra UI":       SiChakraui,
  "Figma":           SiFigma,
  "JavaScript":      SiJavascript,
  "Django DRF":      SiDjango,
  "FastAPI":         SiFastapi,
  "Node.js":         SiNodedotjs,
  "Express.js":      SiExpress,
  "Flask":           SiFlask,
  "GraphQL":         SiGraphql,
  "REST APIs":       TbApi,
  "gRPC":            FaServer,
  "AWS":             SiAmazonwebservices,
  "Terraform":       SiTerraform,
  "Airflow":         SiApacheairflow,
  "Docker":          SiDocker,
  "Kubernetes":      SiKubernetes,
  "Jenkins":         SiJenkins,
  "GitHub Actions":  SiGithubactions,
  "LangChain":       SiLangchain,
  "LangGraph":       FaRobot,
  "HuggingFace":     SiHuggingface,
  "RAG Pipelines":   FaBrain,
  "MCP Protocol":    FaNetworkWired,
  "PyTorch":         SiPytorch,
  "TensorFlow":      SiTensorflow,
  "Scikit-learn":    SiScikitlearn,
  "Transformers":    SiHuggingface,
  "Pandas":          SiPandas,
  "PySpark":         SiApachespark,
  "PostgreSQL":      SiPostgresql,
  "MongoDB":         SiMongodb,
  "Redis":           SiRedis,
  "Neo4j":           SiNeo4J,
  "Oracle":          SiOracle,
  "pgvector":        FaNetworkWired,
  "Redshift":        SiPostgresql,
  "Plotly":          SiPython,
  "Seaborn":         SiR,
  "Python":          SiPython,
  "Go":              SiGo,
  "C++":             SiCplusplus,
  "R":               SiR,
  "AWS IAM":         FaShieldAlt,
  "JWT":             SiJsonwebtokens,
  "OAuth 2.0":       FaShieldAlt,
  "OWASP":           FaShieldAlt,
  "Secrets Manager": SiAmazonwebservices,
};

const IngredientIcon = ({ name, accent, isDark }) => {
  const iconBg = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)";
  const iconBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const iconColor = isDark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.5)";
  const Icon = ICON_MAP[name];
  if (!Icon) return null;

  return (
    <Tooltip
      label={name}
      hasArrow
      fontSize="2xs"
      px={2}
      py={1}
      borderRadius="md"
      bg={isDark ? "gray.800" : "gray.100"}
      color={isDark ? "white" : "gray.800"}
    >
      <Box
        w={{ base: "36px", lg: "40px" }}
        h={{ base: "36px", lg: "40px" }}
        borderRadius="xl"
        bg={iconBg}
        border="1px solid"
        borderColor={iconBorder}
        display="flex"
        alignItems="center"
        justifyContent="center"
        cursor="default"
        transition="all 0.25s cubic-bezier(0.4,0,0.2,1)"
        _hover={{
          bg: accent + "18",
          borderColor: accent + "66",
          color: accent,
          transform: "translateY(-3px) scale(1.08)",
          boxShadow: `0 8px 20px ${accent}28`,
          animation: `${float} 2s ease-in-out infinite`,
        }}
        color={iconColor}
      >
        <Icon size={18} />
      </Box>
    </Tooltip>
  );
};

const RecipeCard = ({ recipe, isDark, index }) => {
  const cardBg = isDark ? "rgba(255,255,255,0.025)" : "rgba(0,0,0,0.018)";
  const cardBorder = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";
  const titleColor = isDark ? "rgba(255,255,255,0.92)" : "rgba(0,0,0,0.88)";
  const descColor = isDark ? "rgba(255,255,255,0.32)" : "rgba(0,0,0,0.36)";
  const dividerColor = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)";

  return (
    <Box
      bg={cardBg}
      border="1px solid"
      borderColor={cardBorder}
      borderRadius="2xl"
      p={{ base: 4, lg: 5 }}
      position="relative"
      overflow="hidden"
      transition="all 0.35s cubic-bezier(0.4,0,0.2,1)"
      animation={`${fadeUp} 0.5s ease both`}
      style={{ animationDelay: `${index * 55}ms` }}
      role="group"
      _hover={{
        borderColor: recipe.accent + "44",
        transform: "translateY(-5px)",
        boxShadow: `0 28px 56px ${recipe.accent}14`,
        bg: isDark ? "rgba(255,255,255,0.045)" : "rgba(0,0,0,0.028)",
      }}
    >
      {/* Glow blob */}
      <Box
        position="absolute"
        bottom="-40px"
        right="-40px"
        w="110px"
        h="110px"
        borderRadius="full"
        bg={recipe.accent}
        opacity={0.055}
        filter="blur(40px)"
        transition="opacity 0.4s, transform 0.4s"
        _groupHover={{ opacity: 0.18, transform: "scale(1.5)" }}
        pointerEvents="none"
      />

      {/* Top accent line */}
      <Box
        position="absolute"
        top={0} left={0} right={0}
        h="2px"
        bgGradient={`linear(to-r, transparent, ${recipe.accent}88, transparent)`}
        opacity={0}
        transition="opacity 0.35s"
        _groupHover={{ opacity: 1 }}
      />

      {/* Header */}
      <Flex align="center" gap={2} mb={1}>
        <Text fontSize="lg" lineHeight={1}>{recipe.emoji}</Text>
        <Text
          fontSize={{ base: "sm", lg: "sm" }}
          fontWeight="700"
          color={titleColor}
          letterSpacing="-0.02em"
        >
          {recipe.title}
        </Text>
      </Flex>

      <Text fontSize="xs" color={descColor} mb={3} lineHeight="1.5" pl="28px">
        {recipe.description}
      </Text>

      {/* Divider */}
      <Box
        h="1px"
        bg={dividerColor}
        mb={3}
        transition="background 0.35s"
        _groupHover={{ bg: recipe.accent + "28" }}
      />

      {/* Ingredients label */}
      <Text
        fontSize="2xs"
        fontWeight="600"
        letterSpacing="0.1em"
        textTransform="uppercase"
        color={recipe.accent}
        opacity={0.65}
        mb={3}
      >
        Ingredients
      </Text>

      {/* Icon grid */}
      <Flex wrap="wrap" gap={2}>
        {recipe.skills.map((skillName, i) => (
          <IngredientIcon
            key={i}
            name={skillName}
            accent={recipe.accent}
            isDark={isDark}
          />
        ))}
      </Flex>
    </Box>
  );
};

const SkillBento = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box px={{ base: 5, lg: 0 }} w="100%">
      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={{ base: 3, lg: 4 }}
        w="100%"
      >
        {data.skillCategories.map((recipe, i) => (
          <RecipeCard key={recipe.title} recipe={recipe} isDark={isDark} index={i} />
        ))}
      </Box>
    </Box>
  );
};

export default SkillBento;