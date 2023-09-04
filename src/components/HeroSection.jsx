import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";

const animationKeyframes = keyframes`
  0% { opacity: 0;}
  100% { opacity: 1 }
`;

const animation = `${animationKeyframes} .5s ease-in-out`;

const HeroSection = () => {
  return (
    <HStack
      p={{ base: 2, lg: 0 }}
      backgroundPosition={"bottom"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      width={"100%"}
      height={"90vh"}
      backgroundColor={"blackAlpha.900"}
    >
      <VStack
        as={motion.div}
        animation={animation}
        width={"90%"}
        margin={"0 auto"}
        gap={4}
        alignItems={{ base: "center", md: "flex-start" }}
        pl={{ base: 0, lg: 12 }}
      >
        <Heading
          w={{ base: "85%", lg: "100%" }}
          textAlign={{ base: "center", md: "left" }}
          fontSize={{ base: "2rem", md: "3rem" }}
          color={"whiteAlpha.900"}
        >
          Descubre un sitio <br /> en el que{" "}
          <Box as="span" color={"mainColor"}>
            ames
          </Box>{" "}
          trabajar
        </Heading>
        <Text
          textAlign={{ base: "center", md: "left" }}
          color={"whiteAlpha.900"}
          fontSize={{ base: "1.2rem", sm: "1.5rem" }}
        >
          Oficinas perfectas para tí, tu equipo o toda tu empresa.
        </Text>
        <HStack
          fontSize={{ base: "1rem", lg: "1.2rem" }}
          flexDirection={{ base: "column", md: "row" }}
          color={"whiteAlpha.900"}
          alignItems={"center"}
        >
          <Text
            textAlign={{ base: "center", md: "left" }}
            fontFamily={"'Unbounded Variable', sans-serif"}
            fontWeight={700}
          >
            1500+
          </Text>
          <Text textAlign={{ base: "center", md: "left" }}>
            Espacios disponibles
          </Text>
          <Text
            textAlign={{ base: "center", md: "left" }}
            fontFamily={"'Unbounded Variable', sans-serif"}
            fontWeight={700}
          >
            500+
          </Text>
          <Text textAlign={{ base: "center", md: "left" }}>
            Clientes satisfechos
          </Text>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default HeroSection;
