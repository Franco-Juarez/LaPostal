import { HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";
import bgImageMobile from "../assets/bg-mobile-hero.png";
import bgImageDesktop from "../assets/bg-desktop-hero.png";

const animationKeyframes = keyframes`
  0% { opacity: 0;}
  100% { opacity: 1 }
`;

const animation = `${animationKeyframes} .5s ease-in-out`;

const HeroSection = () => {
  return (
    <HStack
      p={0}
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      backgroundImage={{ base: bgImageMobile, md: bgImageDesktop }}
      width={"100%"}
      height={"100vh"}
    >
      <VStack
        as={motion.div}
        animation={animation}
        margin={"0 auto"}
        gap={{ base: 2, lg: 0 }}
        alignItems={"center"}
        px={{ base: 8, lg: 12 }}
      >
        <Heading
          w={{ base: "98%", lg: "80%" }}
          textAlign={"left"}
          lineHeight={{ base: "70px", md: "120px", lg: "150px" }}
          fontWeight={400}
          fontSize={{ base: "70px", lg: "160px" }}
          color={"brand.secondaryColor"}
        >
          La Postal
        </Heading>
        <Text
          w={{ base: "100%", xl: "75%" }}
          textAlign={"left"}
          fontFamily={"secondaryHeading"}
          fontStyle={"italic"}
          color={"brand.acentColor"}
          fontSize={{ base: "1.2rem", sm: "42px" }}
        >
          Parador de playa | Est. 1993
        </Text>
      </VStack>
    </HStack>
  );
};

export default HeroSection;
